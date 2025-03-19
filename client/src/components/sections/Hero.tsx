import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your Business with Our
              <span className="text-primary"> Digital Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Empower your business with cutting-edge technology and innovative solutions
              that drive growth and success in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Get Started Now</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-primary/10 absolute inset-0 -z-10" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full p-12"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
