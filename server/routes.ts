import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSchema, insertHeroContentSchema, insertFeatureSchema,
  insertTestimonialSchema, insertPricingPlanSchema
} from "@shared/schema";
import { z } from "zod";
import { demoHeroContent, demoFeatures, demoTestimonials, demoPricingPlans } from "./demo-data";

// Function to initialize demo data if database is empty
async function initializeDemoData() {
  try {
    // Check if hero content exists
    const heroContent = await storage.getActiveHeroContent();
    if (!heroContent) {
      console.log('Initializing demo hero content...');
      await storage.createHeroContent(demoHeroContent);
    }

    // Check if features exist
    const features = await storage.getFeatures();
    if (features.length === 0) {
      console.log('Initializing demo features...');
      for (const feature of demoFeatures) {
        await storage.createFeature(feature);
      }
    }

    // Check if testimonials exist
    const testimonials = await storage.getTestimonials();
    if (testimonials.length === 0) {
      console.log('Initializing demo testimonials...');
      for (const testimonial of demoTestimonials) {
        await storage.createTestimonial(testimonial);
      }
    }

    // Check if pricing plans exist
    const pricingPlans = await storage.getPricingPlans();
    if (pricingPlans.length === 0) {
      console.log('Initializing demo pricing plans...');
      for (const plan of demoPricingPlans) {
        await storage.createPricingPlan(plan);
      }
    }

    console.log('Demo data initialization complete!');
  } catch (error) {
    console.error('Error initializing demo data:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize demo data
  await initializeDemoData();
  // Contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      const result = await storage.createContact(contact);
      res.json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // CMS Routes
  // Hero Content
  app.get("/api/cms/hero", async (_req: Request, res: Response) => {
    try {
      const content = await storage.getActiveHeroContent();
      res.json(content || {
        heading: "Welcome",
        subheading: "Getting Started",
        primaryButtonText: "Get Started",
        secondaryButtonText: "Learn More",
        isActive: true
      });
    } catch (error) {
      console.error('Hero content error:', error);
      res.status(500).json({ message: error instanceof Error ? error.message : "Internal server error" });
    }
  });

  app.post("/api/cms/hero", async (req: Request, res: Response) => {
    try {
      const content = insertHeroContentSchema.parse(req.body);
      const result = await storage.createHeroContent(content);
      res.json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Features
  app.get("/api/cms/features", async (_req: Request, res: Response) => {
    try {
      const features = await storage.getFeatures();
      res.json(features);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/cms/features", async (req: Request, res: Response) => {
    try {
      const feature = insertFeatureSchema.parse(req.body);
      const result = await storage.createFeature(feature);
      res.json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Testimonials
  app.get("/api/cms/testimonials", async (_req: Request, res: Response) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/cms/testimonials", async (req: Request, res: Response) => {
    try {
      const testimonial = insertTestimonialSchema.parse(req.body);
      const result = await storage.createTestimonial(testimonial);
      res.json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Pricing Plans
  app.get("/api/cms/pricing", async (_req: Request, res: Response) => {
    try {
      const plans = await storage.getPricingPlans();
      res.json(plans);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/cms/pricing", async (req: Request, res: Response) => {
    try {
      const plan = insertPricingPlanSchema.parse(req.body);
      const result = await storage.createPricingPlan(plan);
      res.json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}