import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertPricingPlanSchema, type InsertPricingPlan, type PricingPlan } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPricing() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const { data: plans, isLoading } = useQuery<PricingPlan[]>({
    queryKey: ["/api/cms/pricing"],
  });

  const form = useForm<InsertPricingPlan>({
    resolver: zodResolver(insertPricingPlanSchema),
    defaultValues: {
      name: "",
      price: "",
      features: [],
      isPopular: false,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: InsertPricingPlan) =>
      apiRequest("POST", "/api/cms/pricing", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cms/pricing"] });
      toast({
        title: "Success",
        description: "Pricing plan has been added.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Pricing Plan</CardTitle>
          <CardDescription>
            Create a new pricing plan for your service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Basic, Pro, Enterprise" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 29" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="features"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Features (one per line)</FormLabel>
                    <FormControl>
                      <Input
                        as="textarea"
                        placeholder="Enter features, one per line"
                        value={field.value.join('\n')}
                        onChange={(e) => field.onChange(e.target.value.split('\n'))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isPopular"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Popular Plan</FormLabel>
                      <FormDescription>
                        Mark this as the recommended plan
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={mutation.isPending}>
                {mutation.isPending ? "Adding..." : "Add Plan"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Plans</CardTitle>
          <CardDescription>
            Current pricing plans displayed on your landing page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {plans?.map((plan) => (
              <div key={plan.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">{plan.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">${plan.price}</span>
                    {plan.isPopular && (
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
