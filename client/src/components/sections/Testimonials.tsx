import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

// Fallback testimonials if API fails
const fallbackTestimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    content: "This platform has revolutionized how we manage our business operations. The results have been incredible.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "The features and support we've received have been exceptional. Highly recommend for any growing business.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emily Taylor",
    role: "Product Manager",
    content: "Easy to use and incredibly powerful. This solution has helped us scale our operations efficiently.",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

export default function Testimonials() {
  // Fetch testimonials from API
  const { data: apiTestimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/cms/testimonials"],
  });
  
  // Use API data if available, otherwise use fallback testimonials
  const testimonials = apiTestimonials || fallbackTestimonials;
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about our solutions.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg italic">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
