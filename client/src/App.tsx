import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AdminLayout from "@/components/layout/AdminLayout";
import AdminHero from "@/pages/admin/Hero";
import AdminFeatures from "@/pages/admin/Features";
import AdminTestimonials from "@/pages/admin/Testimonials";
import AdminPricing from "@/pages/admin/Pricing";
import AdminSettings from "@/pages/admin/Settings";
import { LanguageProvider } from "@/hooks/use-language";
import Documentation from "@/pages/Documentation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin" component={() => (
        <AdminLayout>
          <AdminHero />
        </AdminLayout>
      )} />
      <Route path="/admin/hero" component={() => (
        <AdminLayout>
          <AdminHero />
        </AdminLayout>
      )} />
      <Route path="/admin/features" component={() => (
        <AdminLayout>
          <AdminFeatures />
        </AdminLayout>
      )} />
      <Route path="/admin/testimonials" component={() => (
        <AdminLayout>
          <AdminTestimonials />
        </AdminLayout>
      )} />
      <Route path="/admin/pricing" component={() => (
        <AdminLayout>
          <AdminPricing />
        </AdminLayout>
      )} />
      <Route path="/admin/settings" component={() => (
        <AdminLayout>
          <AdminSettings />
        </AdminLayout>
      )} />
      <Route path="/docs" component={Documentation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;