import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <Card className="relative">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <blockquote className="text-lg text-foreground mb-6">
          {quote}
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="text-sm text-muted-foreground">
              {role}, {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
