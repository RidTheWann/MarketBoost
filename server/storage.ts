import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import { 
  contacts, features, heroContent, testimonials, pricingPlans,
  type Contact, type Feature, type HeroContent, type Testimonial, type PricingPlan,
  type InsertContact, type InsertFeature, type InsertHeroContent, type InsertTestimonial, type InsertPricingPlan
} from "@shared/schema";

export interface IStorage {
  // Contact form
  createContact(contact: InsertContact): Promise<Contact>;

  // CMS Operations
  // Hero
  getActiveHeroContent(): Promise<HeroContent | undefined>;
  createHeroContent(content: InsertHeroContent): Promise<HeroContent>;
  updateHeroContent(id: number, content: Partial<InsertHeroContent>): Promise<HeroContent>;

  // Features
  getFeatures(): Promise<Feature[]>;
  createFeature(feature: InsertFeature): Promise<Feature>;
  updateFeature(id: number, feature: Partial<InsertFeature>): Promise<Feature>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial>;

  // Pricing
  getPricingPlans(): Promise<PricingPlan[]>;
  createPricingPlan(plan: InsertPricingPlan): Promise<PricingPlan>;
  updatePricingPlan(id: number, plan: Partial<InsertPricingPlan>): Promise<PricingPlan>;
}

// Get database connection string or use in-memory storage if not available
const connectionString = process.env.DATABASE_URL;
let pool: Pool | undefined;
let db: PostgresJsDatabase | undefined;

if (connectionString) {
  pool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false
    }
  });
  db = drizzle(pool);
  console.log('Using PostgreSQL database');
} else {
  console.log('DATABASE_URL not provided, using in-memory storage for demonstration');
  // In-memory storage will be used instead
}

// Import memory storage implementation
import { MemoryStorage } from "./memory-storage";

export class PostgresStorage implements IStorage {
  constructor() {
    // Test database connection
    pool?.connect().catch((err: Error) => {
      console.error('Failed to connect to database:', err);
    });
    
    // Ensure db is initialized
    if (!db) {
      console.error('Database connection not initialized');
    }
  }
  // Contact form
  async createContact(contact: InsertContact): Promise<Contact> {
    if (!db) throw new Error('Database connection not initialized');
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }

  // Hero content
  async getActiveHeroContent(): Promise<HeroContent | undefined> {
    if (!db) throw new Error('Database connection not initialized');
    const [content] = await db.select().from(heroContent).where(eq(heroContent.isActive, true));
    return content;
  }

  async createHeroContent(content: InsertHeroContent): Promise<HeroContent> {
    if (!db) throw new Error('Database connection not initialized');
    // Set all existing hero content to inactive
    await db.update(heroContent).set({ isActive: false });
    const [newContent] = await db.insert(heroContent).values({ ...content, isActive: true }).returning();
    return newContent;
  }

  async updateHeroContent(id: number, content: Partial<InsertHeroContent>): Promise<HeroContent> {
    if (!db) throw new Error('Database connection not initialized');
    const [updated] = await db.update(heroContent)
      .set(content)
      .where(eq(heroContent.id, id))
      .returning();
    return updated;
  }

  // Features
  async getFeatures(): Promise<Feature[]> {
    if (!db) throw new Error('Database connection not initialized');
    return await db.select().from(features).orderBy(features.order);
  }

  async createFeature(feature: InsertFeature): Promise<Feature> {
    if (!db) throw new Error('Database connection not initialized');
    const [newFeature] = await db.insert(features).values(feature).returning();
    return newFeature;
  }

  async updateFeature(id: number, feature: Partial<InsertFeature>): Promise<Feature> {
    if (!db) throw new Error('Database connection not initialized');
    const [updated] = await db.update(features)
      .set(feature)
      .where(eq(features.id, id))
      .returning();
    return updated;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    if (!db) throw new Error('Database connection not initialized');
    return await db.select().from(testimonials);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    if (!db) throw new Error('Database connection not initialized');
    const [newTestimonial] = await db.insert(testimonials).values(testimonial).returning();
    return newTestimonial;
  }

  async updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial> {
    if (!db) throw new Error('Database connection not initialized');
    const [updated] = await db.update(testimonials)
      .set(testimonial)
      .where(eq(testimonials.id, id))
      .returning();
    return updated;
  }

  // Pricing plans
  async getPricingPlans(): Promise<PricingPlan[]> {
    if (!db) throw new Error('Database connection not initialized');
    return await db.select().from(pricingPlans);
  }

  async createPricingPlan(plan: InsertPricingPlan): Promise<PricingPlan> {
    if (!db) throw new Error('Database connection not initialized');
    const [newPlan] = await db.insert(pricingPlans).values(plan).returning();
    return newPlan;
  }

  async updatePricingPlan(id: number, plan: Partial<InsertPricingPlan>): Promise<PricingPlan> {
    if (!db) throw new Error('Database connection not initialized');
    const [updated] = await db.update(pricingPlans)
      .set(plan)
      .where(eq(pricingPlans.id, id))
      .returning();
    return updated;
  }
}

// Export the appropriate storage implementation
export const storage = connectionString ? new PostgresStorage() : new MemoryStorage();