import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  GitBranch,
  CheckCircle2,
  Target,
  Zap,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Forward-Deployed Security Engineering",
  description:
    "Embedded security engineers who join your team to build detections, automate responses, and transfer knowledge through sprint-based delivery.",
};

const podModels = [
  {
    size: "1 Engineer",
    duration: "2-4 weeks",
    bestFor: "Specific technical projects",
    examples: [
      "Detection rule migration",
      "Runbook development",
      "Tool integration",
    ],
  },
  {
    size: "2-3 Engineers",
    duration: "6-12 weeks",
    bestFor: "Comprehensive buildout",
    examples: [
      "Full SOC implementation",
      "Detection engineering program",
      "Automation pipeline",
    ],
  },
  {
    size: "3+ Engineers",
    duration: "Ongoing",
    bestFor: "Program ownership",
    examples: [
      "Operate tier transition",
      "Multi-platform coverage",
      "Continuous improvement",
    ],
  },
];

const artifacts = [
  {
    title: "Detection Content",
    description:
      "Production-ready detection rules with documented logic and test cases",
    items: [
      "Sigma rules",
      "KQL/SPL queries",
      "Correlation rules",
      "Custom parsers",
    ],
  },
  {
    title: "Automation & Runbooks",
    description:
      "Executable playbooks for investigation and response workflows",
    items: [
      "Response playbooks",
      "Enrichment scripts",
      "Ticketing automation",
      "Integration code",
    ],
  },
  {
    title: "Documentation",
    description: "Knowledge transfer materials and operational procedures",
    items: [
      "Architecture diagrams",
      "Runbook procedures",
      "Decision trees",
      "Training materials",
    ],
  },
  {
    title: "Code & Infrastructure",
    description: "Version-controlled infrastructure and detection-as-code",
    items: [
      "GitHub/GitLab repos",
      "Pull requests reviewed",
      "CI/CD pipelines",
      "IaC templates",
    ],
  },
];

const stakeholders = [
  {
    role: "Security Operations",
    engagement: "Daily collaboration on detections and investigations",
  },
  {
    role: "Security Engineering",
    engagement: "Joint architecture reviews and technical design",
  },
  {
    role: "Platform/DevOps",
    engagement: "Integration planning and deployment coordination",
  },
  {
    role: "Compliance/GRC",
    engagement: "Control mapping and audit evidence generation",
  },
];

const slos = [
  {
    metric: "MTTD (Mean Time to Detect)",
    target: "< 15 minutes for critical threats",
  },
  {
    metric: "False Positive Rate",
    target: "< 20% for high-fidelity detections",
  },
  { metric: "Detection Coverage", target: "> 80% of MITRE ATT&CK techniques" },
  {
    metric: "Runbook Automation",
    target: "> 60% of common investigation steps",
  },
];

export default function FDEPage() {
  return (
    <>
      <Hero
        title="Forward-Deployed Security Engineering"
        description="Security engineers embedded with your team, delivering production-ready detections, automation, and knowledge transfer through sprint-based delivery."
        primaryCta={{ text: "Start with Assess", href: "/pricing/services" }}
        secondaryCta={{ text: "Contact Us", href: "/contact" }}
      />

      {/* What is FDE */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">What is Forward-Deployed Engineering?</h2>
              <p className="text-lg text-muted-foreground">
                Inspired by the embedded consultant model, Forward-Deployed
                Security Engineers (FDSEs) join your team to own security
                outcomes, not just deliver reports.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="secondary">Traditional Consulting</Badge>
                  </div>
                  <CardTitle className="text-lg">What we don't do</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Deliver PowerPoint decks and recommendations</li>
                    <li>• Work remotely with weekly status calls</li>
                    <li>• Hand off generic detection rules</li>
                    <li>• Exit after the report is delivered</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <div className="mb-2">
                    <Badge>Forward-Deployed Model</Badge>
                  </div>
                  <CardTitle className="text-lg">What we do</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>
                      • Build and deploy production-ready security controls
                    </li>
                    <li>
                      • Join your team in daily standups and Slack channels
                    </li>
                    <li>
                      • Write custom detections tailored to your environment
                    </li>
                    <li>
                      • Transfer knowledge and train your team to operate
                      independently
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pod Models */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">Flexible pod sizes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Scale up or down based on your needs. Start with a single engineer
              for a focused project or build a full program with a dedicated
              team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {podModels.map((model, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{model.size}</CardTitle>
                  <CardDescription>{model.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Best for:</p>
                    <p className="text-sm text-muted-foreground">
                      {model.bestFor}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {model.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Artifacts */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">Tangible artifacts, not just advice</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every sprint delivers production-ready code, runbooks, and
              documentation that your team can operate and maintain.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {artifacts.map((artifact, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{artifact.title}</CardTitle>
                  <CardDescription>{artifact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {artifact.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary" />
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

      {/* SLOs & Exit Criteria */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Measurable outcomes & exit criteria</h2>
              <p className="text-lg text-muted-foreground">
                We define success metrics upfront and work toward clear exit
                criteria so you know when the engagement has delivered value.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Example SLOs</CardTitle>
                <CardDescription>
                  Typical success metrics for FDE engagements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {slos.map((slo, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-4 pb-4 border-b last:border-0"
                    >
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-medium">{slo.metric}</span>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {slo.target}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold mb-2">Exit Criteria</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Engagements conclude when:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    All defined deliverables are deployed to production
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Your team can independently operate and maintain the
                    solution
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>SLO targets are consistently met over 30 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Documentation and runbooks are complete and validated
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stakeholder Map */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Who we work with</h2>
              <p className="text-lg text-muted-foreground">
                FDEs collaborate across security, engineering, and compliance
                teams to ensure holistic security outcomes.
              </p>
            </div>

            <div className="grid gap-4">
              {stakeholders.map((stakeholder, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {stakeholder.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {stakeholder.engagement}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Ready to embed security engineers?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Start with a 2-4 week assessment to identify gaps and build a
              prioritized roadmap, then transition to a Build engagement with
              embedded FDEs.
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
              <Button size="xl" variant="orange" asChild>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3"
                >
                  <span>Contact Us</span>
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
