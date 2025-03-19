import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Create beautiful
              <span className="relative inline-block mx-2">
                <span className="relative z-10 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  websites
                </span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              without code
            </h1>

            <p className="text-lg text-muted-foreground mb-8 md:pr-12">
              Build, launch, and grow your business online with our powerful platform. 
              Join thousands of successful companies who trust us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-white px-8 h-12 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Start Building Free
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
              <p className="text-sm text-muted-foreground mb-3">Trusted by leading companies worldwide</p>
              <div className="flex gap-6 items-center">
                <div className="h-8 w-24 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg" />
                <div className="h-8 w-24 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg" />
                <div className="h-8 w-24 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-blue-500/20 to-transparent rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-tl from-white/40 via-white/60 to-transparent rounded-full backdrop-blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Abstract geometric shape */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-1/2 h-1/2 text-primary/80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
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