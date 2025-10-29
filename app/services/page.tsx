import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Code, Activity, FileCheck } from "lucide-react";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Security Engineering & Operations Services",
  description:
    "Comprehensive security engineering services from assessment to ongoing operations. Forward-deployed engineers and co-managed SOC services.",
};

const services = [
  {
    icon: Shield,
    title: "Forward-Deployed Engineering",
    description:
      "Embedded security engineers who join your team to build and improve your security posture",
    features: [
      "Sprint-based delivery (2-week cycles)",
      "1-3+ engineers embedded with your team",
      "Detection engineering & automation",
      "Knowledge transfer & documentation",
    ],
    href: "/services/fde",
  },
  {
    icon: Activity,
    title: "AI-SOC Co-Management",
    description: "24/7 monitoring and response operations with defined SLOs",
    features: [
      "Co-managed detection and response",
      "On-call support with SLOs",
      "Continuous tuning and improvement",
      "Monthly strategic reviews",
    ],
    href: "/services/ai-soc",
  },
];

const deliverables = [
  {
    icon: Code,
    title: "Detection Rules",
    items: [
      "Sigma rules for SIEM platforms",
      "KQL queries for Sentinel",
      "SPL searches for Splunk",
      "Custom parsers and data models",
    ],
  },
  {
    icon: Activity,
    title: "Automation & Runbooks",
    items: [
      "Automated response playbooks",
      "Investigation workflows",
      "Enrichment pipelines",
      "Ticketing integrations",
    ],
  },
  {
    icon: FileCheck,
    title: "Documentation",
    items: [
      "Threat intelligence reports",
      "Detection logic documentation",
      "Runbook procedures",
      "Architecture diagrams",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Security Engineering & Operations"
        description="From assessment to ongoing operations, we provide the people, platform, and process to build and run world-class security programs."
        primaryCta={{ text: "View Pricing", href: "/pricing/services" }}
        secondaryCta={{ text: "Contact Us", href: "/contact" }}
      />

      {/* Engagement Timeline */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="mb-4">Your engagement journey</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We meet you where you are and scale with your needs, from initial
              assessment to full-time operations.
            </p>
          </div>

          <div className="mb-16 rounded-lg border bg-card p-8">
            <Image
              src="/diagrams/engagement-timeline.svg"
              alt="Engagement Timeline: Assess, Build, Operate"
              width={900}
              height={300}
              className="w-full h-auto"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>1. Assess (2-4 weeks)</CardTitle>
                <CardDescription>
                  Fixed-scope vulnerability assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Current state documentation</li>
                  <li>• Gap analysis vs. frameworks (NIST, CIS)</li>
                  <li>• Prioritized remediation roadmap</li>
                  <li>• Resource and cost estimates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Build (6-12 weeks)</CardTitle>
                <CardDescription>Embedded engineering pods</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Forward-deployed security engineers</li>
                  <li>• Detection engineering & automation</li>
                  <li>• Integration with existing tools</li>
                  <li>• Knowledge transfer to your team</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Operate (Ongoing)</CardTitle>
                <CardDescription>Co-managed SOC with SLOs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 24/7 monitoring and response</li>
                  <li>• Defined SLOs for MTTD/MTTR</li>
                  <li>• Continuous detection tuning</li>
                  <li>• Monthly strategic reviews</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Service Offerings */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="mb-4">Our service offerings</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the model that fits your needs, from project-based FDE
              engagements to ongoing co-managed operations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Deliverables Grid */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="mb-4">What you get</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every engagement delivers production-ready security artifacts, not
              just reports or recommendations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {deliverables.map((deliverable, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <deliverable.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{deliverable.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {deliverable.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Platform Diagram */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="mb-4">Powered by the unified risk platform</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All our services leverage the Covenda platform to connect threat
              models, controls, evidence, detections, and automated response.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-8">
            <Image
              src="/diagrams/platform-diagram.svg"
              alt="Covenda Unified Risk Platform"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Start with an assessment</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Not sure where to begin? Our 2-4 week vulnerability assessment provides a
              comprehensive review of your security posture and a prioritized
              roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link
                  href="/pricing/services"
                  className="inline-flex items-center gap-3"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
