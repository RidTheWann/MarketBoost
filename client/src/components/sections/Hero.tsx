import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              🚀 Launch Your Digital Success
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your Business with{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
                  Digital Solutions
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 md:pr-12">
              Build, grow, and scale your business with our powerful platform. 
              Join thousands of successful companies who trust us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/20 hover:bg-primary/5 h-12 rounded-full"
              >
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/10">
              <p className="text-sm text-muted-foreground mb-3">Trusted by leading companies</p>
              <div className="flex gap-6 items-center opacity-50">
                {/* Replace with actual company logos */}
                <div className="h-8 w-24 bg-foreground/20 rounded" />
                <div className="h-8 w-24 bg-foreground/20 rounded" />
                <div className="h-8 w-24 bg-foreground/20 rounded" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-transparent rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-tl from-primary/10 via-white to-transparent rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/2 h-1/2 text-primary"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}