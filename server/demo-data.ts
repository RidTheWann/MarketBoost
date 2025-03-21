import type { InsertHeroContent, InsertFeature, InsertTestimonial, InsertPricingPlan } from '@shared/schema';

// Demo data for the CMS
export const demoHeroContent: InsertHeroContent = {
  heading: "Create beautiful websites without code",
  subheading: "Build, launch, and grow your business online with our powerful platform. Join thousands of successful companies who trust us.",
  primaryButtonText: "Start Building Free",
  secondaryButtonText: "Watch Demo",
  isActive: true
};

export const demoFeatures: InsertFeature[] = [
  {
    title: "Modern Technology",
    description: "Built with the latest tech stack for optimal performance and scalability. Stay ahead with cutting-edge solutions.",
    icon: "Laptop",
    order: 1
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security to protect your data and privacy. We take security seriously so you don't have to worry.",
    icon: "Shield",
    order: 2
  },
  {
    title: "Fast & Efficient",
    description: "Optimized for speed and exceptional user experience. Your visitors will enjoy lightning-fast page loads.",
    icon: "Zap",
    order: 3
  },
  {
    title: "Team Collaboration",
    description: "Tools designed for seamless team coordination. Work together efficiently no matter where your team is located.",
    icon: "Users",
    order: 4
  }
];

export const demoTestimonials: InsertTestimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "MarketBoost transformed our online presence. The sleek design and powerful CMS made it easy to showcase our products and connect with customers.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthLabs",
    content: "The conversion rate on our landing page increased by 45% after switching to MarketBoost. The design is not only beautiful but strategically effective.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignCraft",
    content: "As a design agency, we have high standards. MarketBoost exceeded our expectations with its flexibility and attention to detail. Highly recommended!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop"
  }
];

export const demoPricingPlans: InsertPricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    features: [
      "1 Website",
      "5 GB Storage",
      "10,000 Monthly Visitors",
      "Basic Analytics",
      "24/7 Support"
    ],
    isPopular: false
  },
  {
    name: "Professional",
    price: "$79",
    features: [
      "5 Websites",
      "20 GB Storage",
      "100,000 Monthly Visitors",
      "Advanced Analytics",
      "Priority Support",
      "Custom Domain"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    features: [
      "Unlimited Websites",
      "100 GB Storage",
      "Unlimited Monthly Visitors",
      "Premium Analytics",
      "Dedicated Support",
      "Custom Domain",
      "White Labeling"
    ],
    isPopular: false
  }
];