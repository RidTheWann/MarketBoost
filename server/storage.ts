
import mongoose from 'mongoose';
import { 
  type Contact, type Feature, type HeroContent, type Testimonial, type PricingPlan,
  type InsertContact, type InsertFeature, type InsertHeroContent, type InsertTestimonial, type InsertPricingPlan
} from "@shared/schema";

// MongoDB Schema Definitions
const heroSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  ctaText: String,
  isActive: Boolean
});

const featureSchema = new mongoose.Schema({
  title: String,
  description: String,
  order: Number
});

const testimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  content: String,
  imageUrl: String
});

const pricingPlanSchema = new mongoose.Schema({
  name: String,
  price: Number,
  features: [String]
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// MongoDB Models
const Hero = mongoose.model('Hero', heroSchema);
const Feature = mongoose.model('Feature', featureSchema);
const Testimonial = mongoose.model('Testimonial', testimonialSchema);
const PricingPlan = mongoose.model('PricingPlan', pricingPlanSchema);
const Contact = mongoose.model('Contact', contactSchema);

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getActiveHeroContent(): Promise<HeroContent | undefined>;
  createHeroContent(content: InsertHeroContent): Promise<HeroContent>;
  updateHeroContent(id: number, content: Partial<InsertHeroContent>): Promise<HeroContent>;
  getFeatures(): Promise<Feature[]>;
  createFeature(feature: InsertFeature): Promise<Feature>;
  updateFeature(id: number, feature: Partial<InsertFeature>): Promise<Feature>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial>;
  getPricingPlans(): Promise<PricingPlan[]>;
  createPricingPlan(plan: InsertPricingPlan): Promise<PricingPlan>;
  updatePricingPlan(id: number, plan: Partial<InsertPricingPlan>): Promise<PricingPlan>;
}

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error('Please set MONGODB_URI in environment variables');
}

mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

export class MongoDBStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact = await Contact.create(contact);
    return newContact.toObject();
  }

  async getActiveHeroContent(): Promise<HeroContent | undefined> {
    const content = await Hero.findOne({ isActive: true });
    return content?.toObject();
  }

  async createHeroContent(content: InsertHeroContent): Promise<HeroContent> {
    await Hero.updateMany({}, { isActive: false });
    const newContent = await Hero.create({ ...content, isActive: true });
    return newContent.toObject();
  }

  async updateHeroContent(id: number, content: Partial<InsertHeroContent>): Promise<HeroContent> {
    const updated = await Hero.findByIdAndUpdate(id, content, { new: true });
    return updated?.toObject();
  }

  async getFeatures(): Promise<Feature[]> {
    const features = await Feature.find().sort('order');
    return features.map(f => f.toObject());
  }

  async createFeature(feature: InsertFeature): Promise<Feature> {
    const newFeature = await Feature.create(feature);
    return newFeature.toObject();
  }

  async updateFeature(id: number, feature: Partial<InsertFeature>): Promise<Feature> {
    const updated = await Feature.findByIdAndUpdate(id, feature, { new: true });
    return updated?.toObject();
  }

  async getTestimonials(): Promise<Testimonial[]> {
    const testimonials = await Testimonial.find();
    return testimonials.map(t => t.toObject());
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const newTestimonial = await Testimonial.create(testimonial);
    return newTestimonial.toObject();
  }

  async updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial> {
    const updated = await Testimonial.findByIdAndUpdate(id, testimonial, { new: true });
    return updated?.toObject();
  }

  async getPricingPlans(): Promise<PricingPlan[]> {
    const plans = await PricingPlan.find();
    return plans.map(p => p.toObject());
  }

  async createPricingPlan(plan: InsertPricingPlan): Promise<PricingPlan> {
    const newPlan = await PricingPlan.create(plan);
    return newPlan.toObject();
  }

  async updatePricingPlan(id: number, plan: Partial<InsertPricingPlan>): Promise<PricingPlan> {
    const updated = await PricingPlan.findByIdAndUpdate(id, plan, { new: true });
    return updated?.toObject();
  }
}

export const storage = new MongoDBStorage();
