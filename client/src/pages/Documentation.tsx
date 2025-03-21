import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Documentation() {
  const [activeTab, setActiveTab] = useState("getting-started");

  const tabs = [
    { id: "getting-started", title: "Getting Started", description: "Learn the basics of MarketBoost" },
    { id: "installation", title: "Installation Guide", description: "Step-by-step installation instructions" },
    { id: "customization", title: "Customization Options", description: "How to customize your MarketBoost site" },
    { id: "cms", title: "CMS Usage Guide", description: "How to use the built-in CMS" },
    { id: "api", title: "API Reference", description: "Complete API documentation" },
    { id: "deployment", title: "Deployment Guide", description: "How to deploy your MarketBoost site" },
    { id: "live-demo", title: "Live Demo", description: "View live demonstration of MarketBoost" },
    { id: "faq", title: "Frequently Asked Questions", description: "Common questions and answers" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 container py-10">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
            <p className="text-muted-foreground text-lg">Comprehensive guide to using MarketBoost</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-1">
                    {tabs.map((tab) => (
                      <Button
                        key={tab.id}
                        variant={activeTab === tab.id ? "default" : "ghost"}
                        className="w-full justify-start text-left"
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.title}
                      </Button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{tabs.find((tab) => tab.id === activeTab)?.title}</CardTitle>
                  <CardDescription>{tabs.find((tab) => tab.id === activeTab)?.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[calc(100vh-300px)] pr-4">
                    {activeTab === "getting-started" && (
                      <div className="space-y-6">
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Welcome to MarketBoost</h2>
                          <p>
                            MarketBoost is a modern, conversion-optimized business landing page template with a built-in CMS,
                            perfect for agencies, startups, and businesses. This documentation will guide you through setup and customization.
                          </p>
                        </section>
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Key Features</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Modern Dark Theme Design</li>
                            <li>Fully Responsive Layout</li>
                            <li>Built-in CMS Dashboard</li>
                            <li>Performance Optimized</li>
                            <li>PostgreSQL Database</li>
                            <li>SEO Friendly</li>
                            <li>Easy Customization</li>
                            <li>API Documentation</li>
                          </ul>
                        </section>
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Tech Stack</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>React 18 with TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Shadcn UI Components</li>
                            <li>Express.js Backend</li>
                            <li>PostgreSQL + Drizzle ORM</li>
                            <li>Framer Motion Animations</li>
                          </ul>
                        </section>
                      </div>
                    )}

                    {activeTab === "installation" && (
                      <div className="space-y-6">
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Prerequisites</h2>
                          <p>Ensure you have the following installed:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Node.js (v16+)</li>
                            <li>npm or yarn</li>
                            <li>PostgreSQL (optional for development)</li>
                          </ul>
                        </section>
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Installation Steps</h2>
                          <ol className="list-decimal pl-6 space-y-2">
                            <li>
                              Clone the repository:
                              <pre className="bg-muted p-4 rounded-md mt-2">
                                <code>git clone https://github.com/yourusername/marketboost.git</code>
                              </pre>
                            </li>
                            <li>
                              Install dependencies:
                              <pre className="bg-muted p-4 rounded-md mt-2">
                                <code>cd marketboost && npm install</code>
                              </pre>
                            </li>
                            <li>
                              Set up environment variables in a `.env` file:
                              <pre className="bg-muted p-4 rounded-md mt-2">
                                <code>DATABASE_URL=your_postgresql_database_url</code>
                              </pre>
                            </li>
                            <li>
                              Initialize the database:
                              <pre className="bg-muted p-4 rounded-md mt-2">
                                <code>npm run db:push</code>
                              </pre>
                            </li>
                            <li>
                              Start the development server:
                              <pre className="bg-muted p-4 rounded-md mt-2">
                                <code>npm run dev</code>
                              </pre>
                            </li>
                          </ol>
                        </section>
                      </div>
                    )}

                    {activeTab === "customization" && (
                      <div className="space-y-6">
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Theme Customization</h2>
                          <p>Edit `theme.json` to customize colors, typography, and more:</p>
                          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                            <code>{`{
  "colors": {
    "primary": "#3b82f6",
    "background": "#0f172a"
  }
}`}</code>
                          </pre>
                        </section>
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Component Customization</h2>
                          <p>Modify components in `client/src/components` to match your brand.</p>
                        </section>
                      </div>
                    )}

                    {activeTab === "cms" && (
                      <div className="space-y-6">
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Accessing the CMS</h2>
                          <p>Visit <code>/admin</code> to manage content like the Hero section, Features, and Pricing.</p>
                        </section>
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Best Practices</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Keep content concise</li>
                            <li>Use high-quality images</li>
                            <li>Test changes thoroughly</li>
                          </ul>
                        </section>
                      </div>
                    )}

                    {activeTab === "api" && (
                      <div className="space-y-6">
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">API Overview</h2>
                          <p>All endpoints are prefixed with <code>/api</code>.</p>
                        </section>
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Hero Section API</h2>
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="hero-get">
                              <AccordionTrigger>GET /api/cms/hero</AccordionTrigger>
                              <AccordionContent>
                                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                                  <code>{`{
  "id": 1,
  "heading": "Modern Business Landing Page",
  "subheading": "Build your dream website with no code",
  "primaryButton": "Start Free Trial",
  "secondaryButton": "Watch Demo"
}`}</code>
                                </pre>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="features-get">
                              <AccordionTrigger>GET /api/cms/features</AccordionTrigger>
                              <AccordionContent>
                                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                                  <code>{`[
  {
    "title": "Drag & Drop Builder",
    "description": "Intuitive visual editor for rapid prototyping"
  },
  {
    "title": "SEO Tools",
    "description": "Built-in optimization for better rankings"
  }
]`}</code>
                                </pre>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="pricing-get">
                              <AccordionTrigger>GET /api/cms/pricing</AccordionTrigger>
                              <AccordionContent>
                                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                                  <code>{`[
  {
    "plan": "Starter",
    "price": 29,
    "features": ["5 Projects", "Basic Analytics"]
  },
  {
    "plan": "Pro",
    "price": 99,
    "features": ["Unlimited Projects", "Advanced Analytics"]
  }
]`}</code>
                                </pre>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </section>
                      </div>
                    )}

                    {activeTab === "deployment" && (
                      <div className="space-y-6">
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Vercel Deployment</h2>
                          <ol className="list-decimal pl-6 space-y-2">
                            <li>Create a Vercel account</li>
                            <li>Run <code>vercel</code> in your project directory</li>
                          </ol>
                        </section>
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Environment Variables</h2>
                          <p>Set <code>DATABASE_URL</code> and <code>NODE_ENV=production</code>.</p>
                        </section>
                      </div>
                    )}

                    {activeTab === "live-demo" && (
                      <div className="space-y-6">
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Live Demo</h2>
                          <p>
                          Access a live demo of MarketBoost via the following link:
                            <a href="https://demo.code.market/marketboost" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="text-primary font-medium ml-2">
                              https://demo.code.market/marketboost
                            </a>
                          </p>
                          <p className="text-muted-foreground">
                          The demo includes features:
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              <li>Main page with full navigation</li>
                              <li>CMS dashboard with demo content</li>
                              <li>Functional contact form</li>
                              <li>Interactive pricing page</li>
                            </ul>
                          </p>
                        </section>
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Live Demo</h2>
                          <p>Demo live tersedia di: <a href="https://marketboost.vercel.app/" className="text-primary underline" target="_blank" rel="noopener noreferrer">https://marketboost.vercel.app/</a></p>
                          <div className="mt-4 aspect-video rounded-lg border">
                            <iframe 
                              className="h-full w-full rounded-md"
                              src="https://marketboost.vercel.app/"
                              title="MarketBoost Demo"
                              allowFullScreen
                            />
                          </div>
                          <p className="text-sm text-muted-foreground mt-4">
                            *Ganti URL dengan domain Anda sendiri setelah deploy
                          </p>
                        </section>
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Live Demonstration</h2>
                          <p>
                            Access live demo at: 
                            <a href="https://marketboost-demo.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                              https://marketboost-demo.com
                            </a>
                          </p>
                        </section>
                      </div>
                    )}

                    {activeTab === "faq" && (
                      <div className="space-y-6">
                        <section className="space-y-3">
                          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="faq-1">
                              <AccordionTrigger>How do I deploy to production?</AccordionTrigger>
                              <AccordionContent>
                                <p>Use our one-click deployment with Vercel or Netlify. Refer to the Deployment Guide for detailed instructions.</p>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="faq-2">
                              <AccordionTrigger>How to access the CMS?</AccordionTrigger>
                              <AccordionContent>
                                <p>Navigate to /admin route after deployment. Set up admin credentials in your environment variables.</p>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="faq-3">
                              <AccordionTrigger>What databases are supported?</AccordionTrigger>
                              <AccordionContent>
                                <p>We support PostgreSQL out-of-the-box. MySQL and SQLite can be configured via environment variables.</p>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="faq-4">
                              <AccordionTrigger>How to update content?</AccordionTrigger>
                              <AccordionContent>
                                <p>Use the built-in CMS dashboard or modify content directly through the API endpoints.</p>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </section>
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}