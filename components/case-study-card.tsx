import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  title: string;
  slug: string;
  industry: string;
  challenge: string;
  outcome: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export function CaseStudyCard({ title, slug, industry, challenge, outcome, metrics }: CaseStudyCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="mb-2">
          <Badge variant="secondary">{industry}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{challenge}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{outcome}</p>
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {metrics.slice(0, 2).map((metric, index) => (
                <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Button variant="ghost" className="w-full justify-between" asChild>
          <Link href={`/customers/${slug}`}>
            Read case study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
