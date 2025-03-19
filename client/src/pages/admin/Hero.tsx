import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertHeroContentSchema, type InsertHeroContent, type HeroContent } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminHero() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const { data: heroContent, isLoading } = useQuery<HeroContent>({
    queryKey: ["/api/cms/hero"],
  });

  const form = useForm<InsertHeroContent>({
    resolver: zodResolver(insertHeroContentSchema),
    defaultValues: {
      heading: heroContent?.heading || "",
      subheading: heroContent?.subheading || "",
      primaryButtonText: heroContent?.primaryButtonText || "",
      secondaryButtonText: heroContent?.secondaryButtonText || "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: InsertHeroContent) =>
      apiRequest("POST", "/api/cms/hero", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cms/hero"] });
      toast({
        title: "Success",
        description: "Hero content has been updated.",
      });
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
    <Card>
      <CardHeader>
        <CardTitle>Hero Section</CardTitle>
        <CardDescription>
          Manage the content displayed in the hero section of your landing page.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
            <FormField
              control={form.control}
              name="heading"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Heading</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter heading text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subheading"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subheading</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter subheading text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="primaryButtonText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Button Text</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter primary button text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="secondaryButtonText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Secondary Button Text</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter secondary button text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={mutation.isPending}>
              {mutation.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
