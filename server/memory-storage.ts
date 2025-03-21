// In-memory storage implementation for demonstration purposes
import { 
  type Contact, type Feature, type HeroContent, type Testimonial, type PricingPlan,
  type InsertContact, type InsertFeature, type InsertHeroContent, type InsertTestimonial, type InsertPricingPlan
} from "@shared/schema";
import { IStorage } from "./storage";
import { demoHeroContent, demoFeatures, demoTestimonials, demoPricingPlans } from "./demo-data";

// In-memory data store
const store = {
  contacts: [] as Contact[],
  heroContent: [] as HeroContent[],
  features: [] as Feature[],
  testimonials: [] as Testimonial[],
  pricingPlans: [] as PricingPlan[],
  idCounters: {
    contacts: 1,
    heroContent: 1,
    features: 1,
    testimonials: 1,
    pricingPlans: 1
  }
};

// Initialize with demo data
const initializeMemoryStore = () => {
  // Add demo hero content
  const heroContent: HeroContent = {
    id: store.idCounters.heroContent++,
    heading: demoHeroContent.heading,
    subheading: demoHeroContent.subheading,
    primaryButtonText: demoHeroContent.primaryButtonText,
    secondaryButtonText: demoHeroContent.secondaryButtonText,
    isActive: true,
    updatedAt: new Date()
  };
  store.heroContent.push(heroContent);

  // Add demo features
  demoFeatures.forEach(feature => {
    const newFeature: Feature = {
      id: store.idCounters.features++,
      title: feature.title,
      description: feature.description,
      icon: feature.icon,
      order: feature.order
    };
    store.features.push(newFeature);
  });

  // Add demo testimonials
  demoTestimonials.forEach(testimonial => {
    const newTestimonial: Testimonial = {
      id: store.idCounters.testimonials++,
      name: testimonial.name,
      role: testimonial.role,
      content: testimonial.content,
      image: testimonial.image
    };
    store.testimonials.push(newTestimonial);
  });

  // Add demo pricing plans
  demoPricingPlans.forEach(plan => {
    const newPlan: PricingPlan = {
      id: store.idCounters.pricingPlans++,
      name: plan.name,
      price: plan.price,
      features: plan.features,
      isPopular: plan.isPopular
    };
    store.pricingPlans.push(newPlan);
  });

  console.log('Memory store initialized with demo data');
};

// Initialize store with demo data
initializeMemoryStore();

export class MemoryStorage implements IStorage {
  // Contact form
  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact: Contact = {
      id: store.idCounters.contacts++,
      ...contact
    };
    store.contacts.push(newContact);
    return newContact;
  }

  // Hero content
  async getActiveHeroContent(): Promise<HeroContent | undefined> {
    return store.heroContent.find(content => content.isActive);
  }

  async createHeroContent(content: InsertHeroContent): Promise<HeroContent> {
    // Set all existing hero content to inactive
    store.heroContent.forEach(item => item.isActive = false);
    
    const newContent: HeroContent = {
      id: store.idCounters.heroContent++,
      ...content,
      isActive: true,
      updatedAt: new Date()
    };
    store.heroContent.push(newContent);
    return newContent;
  }

  async updateHeroContent(id: number, content: Partial<InsertHeroContent>): Promise<HeroContent> {
    const index = store.heroContent.findIndex(item => item.id === id);
    if (index === -1) throw new Error('Hero content not found');
    
    store.heroContent[index] = {
      ...store.heroContent[index],
      ...content,
      updatedAt: new Date()
    };
    
    return store.heroContent[index];
  }

  // Features
  async getFeatures(): Promise<Feature[]> {
    return [...store.features].sort((a, b) => a.order - b.order);
  }

  async createFeature(feature: InsertFeature): Promise<Feature> {
    const newFeature: Feature = {
      id: store.idCounters.features++,
      ...feature
    };
    store.features.push(newFeature);
    return newFeature;
  }

  async updateFeature(id: number, feature: Partial<InsertFeature>): Promise<Feature> {
    const index = store.features.findIndex(item => item.id === id);
    if (index === -1) throw new Error('Feature not found');
    
    store.features[index] = {
      ...store.features[index],
      ...feature
    };
    
    return store.features[index];
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return [...store.testimonials];
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const newTestimonial: Testimonial = {
      id: store.idCounters.testimonials++,
      ...testimonial
    };
    store.testimonials.push(newTestimonial);
    return newTestimonial;
  }

  async updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial> {
    const index = store.testimonials.findIndex(item => item.id === id);
    if (index === -1) throw new Error('Testimonial not found');
    
    store.testimonials[index] = {
      ...store.testimonials[index],
      ...testimonial
    };
    
    return store.testimonials[index];
  }

  // Pricing
  async getPricingPlans(): Promise<PricingPlan[]> {
    return [...store.pricingPlans];
  }

  async createPricingPlan(plan: InsertPricingPlan): Promise<PricingPlan> {
    const newPlan: PricingPlan = {
      id: store.idCounters.pricingPlans++,
      ...plan
    };
    store.pricingPlans.push(newPlan);
    return newPlan;
  }

  async updatePricingPlan(id: number, plan: Partial<InsertPricingPlan>): Promise<PricingPlan> {
    const index = store.pricingPlans.findIndex(item => item.id === id);
    if (index === -1) throw new Error('Pricing plan not found');
    
    store.pricingPlans[index] = {
      ...store.pricingPlans[index],
      ...plan
    };
    
    return store.pricingPlans[index];
  }
}