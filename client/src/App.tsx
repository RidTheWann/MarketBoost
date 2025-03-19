import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AdminLayout from "@/components/layout/AdminLayout";
import AdminHero from "@/pages/admin/Hero";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* Admin Routes */}
      <Route path="/admin">
        {() => (
          <AdminLayout>
            <Switch>
              <Route path="/admin/hero" component={AdminHero} />
              {/* Add more admin routes here */}
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