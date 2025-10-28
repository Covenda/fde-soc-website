import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, TrendingUp, Calendar } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonial } from "@/components/testimonial";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-studies";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.challenge,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-b from-primary/5 to-background pt-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-4">
              <Badge variant="secondary">{caseStudy.industry}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(caseStudy.publishedAt)}</span>
              </div>
            </div>
            <h1 className="mb-6">{caseStudy.title}</h1>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Metrics */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Key outcomes</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {caseStudy.metrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          Before:
                        </span>
                        <span className="text-sm font-semibold">
                          {metric.before}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          After:
                        </span>
                        <span className="text-sm font-semibold">
                          {metric.after}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-2 border-t">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="text-base font-bold text-primary">
                          {metric.improvement}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">The challenge</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {caseStudy.challenge}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Our approach</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {caseStudy.approach}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Outcome */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">The outcome</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {caseStudy.outcome}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <Section className="bg-muted/30">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Testimonial
                quote={caseStudy.testimonial.quote}
                author={caseStudy.testimonial.author}
                role={caseStudy.testimonial.role}
                company={caseStudy.testimonial.company}
              />
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Ready for similar results?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's discuss how we can help you build and operate your security
              program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/customers/case-studies">
                  View All Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
