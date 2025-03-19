import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
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

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is required');
}

import { WebSocket } from 'ws';
// @ts-ignore
global.WebSocket = WebSocket;

const pool = new Pool({ 
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  connectionTimeoutMillis: 5000
});

// Test connection
pool.connect()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

const db = drizzle(pool);

export class PostgresStorage implements IStorage {
  constructor() {
    this.checkConnection();
  }

  private async checkConnection() {
    try {
      await pool.query('SELECT 1');
    } catch (err) {
      console.error('Database connection check failed:', err);
      throw err;
    }
  }
  // Contact form
  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }

  // Hero content
  async getActiveHeroContent(): Promise<HeroContent | undefined> {
    const [content] = await db.select().from(heroContent).where({ isActive: true });
    return content;
  }

  async createHeroContent(content: InsertHeroContent): Promise<HeroContent> {
    // Set all existing hero content to inactive
    await db.update(heroContent).set({ isActive: false });
    const [newContent] = await db.insert(heroContent).values({ ...content, isActive: true }).returning();
    return newContent;
  }

  async updateHeroContent(id: number, content: Partial<InsertHeroContent>): Promise<HeroContent> {
    const [updated] = await db.update(heroContent)
      .set(content)
      .where({ id: id })
      .returning();
    return updated;
  }

  // Features
  async getFeatures(): Promise<Feature[]> {
    return await db.select().from(features).orderBy(features.order);
  }

  async createFeature(feature: InsertFeature): Promise<Feature> {
    const [newFeature] = await db.insert(features).values(feature).returning();
    return newFeature;
  }

  async updateFeature(id: number, feature: Partial<InsertFeature>): Promise<Feature> {
    const [updated] = await db.update(features)
      .set(feature)
      .where({ id: id })
      .returning();
    return updated;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [newTestimonial] = await db.insert(testimonials).values(testimonial).returning();
    return newTestimonial;
  }

  async updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial> {
    const [updated] = await db.update(testimonials)
      .set(testimonial)
      .where({ id: id })
      .returning();
    return updated;
  }

  // Pricing plans
  async getPricingPlans(): Promise<PricingPlan[]> {
    return await db.select().from(pricingPlans);
  }

  async createPricingPlan(plan: InsertPricingPlan): Promise<PricingPlan> {
    const [newPlan] = await db.insert(pricingPlans).values(plan).returning();
    return newPlan;
  }

  async updatePricingPlan(id: number, plan: Partial<InsertPricingPlan>): Promise<PricingPlan> {
    const [updated] = await db.update(pricingPlans)
      .set(plan)
      .where({ id: id })
      .returning();
    return updated;
  }
}

export const storage = new PostgresStorage();