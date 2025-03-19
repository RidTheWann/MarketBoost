import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "49",
    features: [
      "Basic features",
      "Up to 5 team members",
      "2GB storage",
      "Basic support"
    ]
  },
  {
    name: "Professional",
    price: "99",
    popular: true,
    features: [
      "Advanced features",
      "Up to 20 team members",
      "10GB storage",
      "Priority support",
      "Advanced analytics"
    ]
  },
  {
    name: "Enterprise",
    price: "199",
    features: [
      "All features",
      "Unlimited team members",
      "Unlimited storage",
      "24/7 premium support",
      "Custom solutions",
      "API access"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle className="text-xl">
                  {plan.name}
                  {plan.popular && (
                    <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
