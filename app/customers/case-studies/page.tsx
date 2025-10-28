import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CaseStudyCard } from "@/components/case-study-card";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from security engineering and operations engagements across financial services, healthcare, and technology industries.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <>
      <Hero
        title="Proven results across industries"
        description="See how we've helped organizations build and operate world-class security programs with measurable outcomes."
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.slug}
                title={study.title}
                slug={study.slug}
                industry={study.industry}
                challenge={study.challenge}
                outcome={study.outcome}
                metrics={study.metrics.slice(0, 2).map((m) => ({
                  label: m.label,
                  value: m.improvement,
                }))}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
