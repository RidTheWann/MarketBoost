import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AdminLayout from "@/components/layout/AdminLayout";
import AdminHero from "@/pages/admin/Hero";
import AdminFeatures from "@/pages/admin/Features";
import AdminTestimonials from "@/pages/admin/Testimonials";
import AdminPricing from "@/pages/admin/Pricing";
import AdminSettings from "@/pages/admin/Settings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* Admin Routes */}
      <Route path="/admin">
        {() => (
          <AdminLayout>
            <Switch>
              <Route path="/admin" component={AdminHero} />
              <Route path="/admin/hero" component={AdminHero} />
              <Route path="/admin/features" component={AdminFeatures} />
              <Route path="/admin/testimonials" component={AdminTestimonials} />
              <Route path="/admin/pricing" component={AdminPricing} />
              <Route path="/admin/settings" component={AdminSettings} />
              <Route component={NotFound} />
            </Switch>
          </AdminLayout>
        )}
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;