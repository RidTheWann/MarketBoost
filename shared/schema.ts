import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const heroContent = pgTable("hero_content", {
  id: serial("id").primaryKey(),
  heading: text("heading").notNull(),
  subheading: text("subheading").notNull(),
  primaryButtonText: text("primary_button_text").notNull(),
  secondaryButtonText: text("secondary_button_text").notNull(),
  isActive: boolean("is_active").notNull().default(false),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const features = pgTable("features", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  order: integer("order").notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  image: text("image").notNull(),
});

export const pricingPlans = pgTable("pricing_plans", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: text("price").notNull(),
  features: jsonb("features").notNull().$type<string[]>(),
  isPopular: boolean("is_popular").notNull().default(false),
});

// Insert schemas
export const insertContactSchema = createInsertSchema(contacts).extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

export const insertHeroContentSchema = createInsertSchema(heroContent).omit({
  id: true,
  updatedAt: true,
});

export const insertFeatureSchema = createInsertSchema(features).omit({
  id: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export const insertPricingPlanSchema = createInsertSchema(pricingPlans).omit({
  id: true,
}).extend({
  features: z.array(z.string()),
});

// Types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertHeroContent = z.infer<typeof insertHeroContentSchema>;
export type HeroContent = typeof heroContent.$inferSelect;

export type InsertFeature = z.infer<typeof insertFeatureSchema>;
export type Feature = typeof features.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

export type InsertPricingPlan = z.infer<typeof insertPricingPlanSchema>;
export type PricingPlan = typeof pricingPlans.$inferSelect;