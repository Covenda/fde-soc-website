import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Clock,
  TrendingUp,
  Zap,
  Phone,
  FileText,
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
  title: "AI-SOC: Build & Co-Manage Your Security Operations",
  description:
    "24/7 co-managed SOC operations with defined SLOs. We build your detection pipeline and provide ongoing monitoring and response.",
};

const processFlow = [
  {
    step: "1",
    title: "Data Ingestion",
    description: "Logs and telemetry flow into your SIEM",
    details: "Sentinel, Splunk, or other platforms",
  },
  {
    step: "2",
    title: "Detection",
    description: "Custom rules and ML models trigger alerts",
    details: "Sigma rules, correlation, anomaly detection",
  },
  {
    step: "3",
    title: "Triage & Investigation",
    description: "Automated enrichment and analyst review",
    details: "Runbooks, threat intel, context gathering",
  },
  {
    step: "4",
    title: "Ticketing",
    description: "Incidents routed to Jira/ServiceNow",
    details: "Automated case creation with evidence",
  },
  {
    step: "5",
    title: "Handoff & Response",
    description: "Your team takes action with our support",
    details: "We escalate, you contain and remediate",
  },
];

const coManagedModel = [
  {
    title: "Covenda Responsibilities",
    icon: Shield,
    items: [
      "24/7 monitoring of detection alerts",
      "Initial triage and enrichment",
      "False positive tuning",
      "Detection rule maintenance",
      "Threat intelligence integration",
      "Monthly detection coverage reviews",
    ],
  },
  {
    title: "Your Team Responsibilities",
    icon: Phone,
    items: [
      "Incident response and containment",
      "Access to systems for investigation",
      "Final escalation decisions",
      "Remediation and recovery",
      "Post-incident reviews",
      "Business context and priorities",
    ],
  },
];

const responseSLOs = [
  {
    priority: "Critical",
    initialResponse: "15 minutes",
    escalation: "30 minutes",
    description: "Active exploitation, data breach, ransomware",
  },
  {
    priority: "High",
    initialResponse: "1 hour",
    escalation: "2 hours",
    description: "Confirmed malicious activity, privilege escalation",
  },
  {
    priority: "Medium",
    initialResponse: "4 hours",
    escalation: "8 hours",
    description: "Suspicious activity, policy violations",
  },
  {
    priority: "Low",
    initialResponse: "24 hours",
    escalation: "48 hours",
    description: "Informational alerts, compliance findings",
  },
];

const retainerOptions = [
  {
    tier: "Essential",
    coverage: "Business hours (8x5)",
    slos: "Best effort response",
    features: ["Alert monitoring", "Weekly reports", "Email escalation"],
    bestFor: "Small teams, low-risk environments",
  },
  {
    tier: "Standard",
    coverage: "Extended hours (12x7)",
    slos: "Defined response SLOs",
    features: [
      "Alert monitoring",
      "Triage & enrichment",
      "Daily reports",
      "Phone escalation",
      "Monthly reviews",
    ],
    bestFor: "Most organizations",
  },
  {
    tier: "Premium",
    coverage: "24/7/365",
    slos: "Guaranteed SLOs with penalties",
    features: [
      "All Standard features",
      "On-call phone support",
      "Dedicated Slack channel",
      "Quarterly strategy sessions",
      "Threat hunting",
    ],
    bestFor: "High-risk, regulated industries",
  },
];

export default function AISOCPage() {
  return (
    <>
      <Hero
        title="Build & Co-Manage Your AI-SOC"
        description="We build your detection pipeline and co-manage operations with defined SLOs. 24/7 monitoring, triage, and escalation - while you retain control of response."
        primaryCta={{ text: "Activate Experts Now", href: "/contact" }}
        secondaryCta={{ text: "View Pricing", href: "/pricing/services" }}
      />

      {/* Process Flow */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">How AI-SOC operations work</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From data ingestion to incident handoff, we manage the detection
              and triage pipeline while you focus on response and remediation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {processFlow.map((step, index) => (
              <div key={index} className="relative">
                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      {step.details}
                    </p>
                  </CardContent>
                </Card>
                {index < processFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Co-Managed Model */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">Shared responsibility model</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We handle detection engineering and monitoring, while you retain
              ownership of incident response and remediation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {coManagedModel.map((model, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <model.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{model.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {model.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Response SLOs */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">Defined response SLOs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Clear service level objectives ensure you know when to expect
              initial triage and escalation to your team.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardHeader>
              <CardTitle>Response Time Commitments</CardTitle>
              <CardDescription>
                From alert generation to your team's notification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {responseSLOs.map((slo, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between gap-4 pb-4 border-b last:border-0"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant={
                            slo.priority === "Critical"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {slo.priority}
                        </Badge>
                        <span className="font-medium">{slo.description}</span>
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm whitespace-nowrap">
                      <div className="text-right">
                        <div className="text-muted-foreground">
                          Initial Response
                        </div>
                        <div className="font-semibold text-primary">
                          {slo.initialResponse}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-muted-foreground">Escalation</div>
                        <div className="font-semibold">{slo.escalation}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Integration Examples */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">Works with your existing stack</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We integrate with leading SIEM platforms and ticketing systems to
              fit into your existing workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>SIEM Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Microsoft Sentinel (Azure)</li>
                  <li>• Splunk Enterprise & Cloud</li>
                  <li>• Elastic Security</li>
                  <li>• Chronicle (Google)</li>
                  <li>• AWS Security Lake</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ticketing & ITSM</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Jira (Cloud & Data Center)</li>
                  <li>• ServiceNow</li>
                  <li>• PagerDuty</li>
                  <li>• Opsgenie</li>
                  <li>• Custom webhooks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Slack (dedicated channel)</li>
                  <li>• Microsoft Teams</li>
                  <li>• Email escalation</li>
                  <li>• Phone/SMS (Premium)</li>
                  <li>• Custom integrations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Retainer Options */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="mb-4">Flexible retainer options</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the coverage and support level that matches your risk
              profile and team capacity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {retainerOptions.map((option, index) => (
              <Card
                key={index}
                className={
                  option.tier === "Standard" ? "border-primary shadow-lg" : ""
                }
              >
                <CardHeader>
                  {option.tier === "Standard" && (
                    <Badge className="w-fit mb-2">Most Popular</Badge>
                  )}
                  <CardTitle>{option.tier}</CardTitle>
                  <CardDescription className="text-base font-semibold text-foreground">
                    {option.coverage}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">{option.slos}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                      Includes:
                    </p>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Best for:</span>{" "}
                      {option.bestFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Activate expert monitoring today</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Start with a Build engagement to implement detections and
              automation, then transition to Operate for ongoing co-managed
              operations.
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
              <Button size="xl" variant="black" asChild>
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
