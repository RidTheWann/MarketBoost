import { motion } from "framer-motion";
import { Laptop, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "Modern Technology",
    description: "Built with the latest tech stack for optimal performance"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security to protect your data"
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Optimized for speed and exceptional user experience"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Tools designed for seamless team coordination"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the tools and features that will transform your business operations
            and drive success in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
