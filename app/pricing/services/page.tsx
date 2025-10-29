import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Transparent Service Pricing",
  description:
    "Clear, straightforward pricing for security engineering and operations services. From assessment to ongoing co-managed SOC operations.",
};

const tiers = [
  {
    name: "Assess",
    duration: "2-4 weeks",
    pricing: "Starting at $25,000",
    description: "Fixed-scope security posture evaluation",
    features: [
      "Current state documentation",
      "Gap analysis vs. frameworks (NIST, CIS, SOC 2)",
      "Threat model and risk prioritization",
      "Prioritized remediation roadmap",
      "Resource and timeline estimates",
      "Executive presentation",
    ],
    cta: "Request Assessment",
    popular: false,
  },
  {
    name: "Deploy",
    duration: "6-12 weeks",
    pricing: "Starting at $120,000",
    description: "Outcome-driven FDE engagements",
    features: [
      "Forward-Deployed Security Engineers",
      "Sprint-based delivery (2-week cycles)",
      "Detection engineering & automation",
      "Custom runbooks and playbooks",
      "Integration with existing tools",
      "Knowledge transfer & documentation",
      "Defined SLOs and exit criteria",
    ],
    cta: "Start Building",
    popular: true,
  },
  {
    name: "Operate",
    duration: "Monthly retainer",
    pricing: "Starting at $15,000/month",
    description: "Ongoing co-managed SOC operations",
    features: [
      "24/7 alert monitoring and triage",
      "Defined response time SLOs",
      "False positive tuning",
      "Detection rule maintenance",
      "Monthly coverage reviews",
      "Quarterly strategy sessions",
      "Dedicated Slack channel",
    ],
    cta: "Activate Experts",
    popular: false,
  },
  {
    name: "Co-Manage",
    duration: "Add-on to Operate",
    pricing: "Contact for quote",
    description: "Enhanced on-call and incident support",
    features: [
      "Guaranteed SLOs with penalties",
      "On-call phone support",
      "Incident commander assistance",
      "Post-incident analysis",
      "Threat hunting sprints",
      "Red team exercise support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How do I know which tier is right for me?",
    answer:
      "Most engagements start with an Assess to understand your current state and build a roadmap. If you already have a clear scope, you can jump directly to Build. Operate is ideal for organizations who want ongoing monitoring and response support.",
  },
  {
    question: "What's included in the pricing?",
    answer:
      "All pricing includes engineer time, platform access, and standard integrations. Travel expenses (if on-site work is required) and third-party tool licenses are billed separately. We provide transparent estimates upfront.",
  },
  {
    question: "Can I scale up or down between tiers?",
    answer:
      "Yes. Many customers start with Assess, transition to Build for implementation, and then move to Operate for ongoing support. You can also pause or adjust Operate retainers with 30 days notice.",
  },
  {
    question: "Do you offer discounts for longer commitments?",
    answer:
      "Yes. Operate retainers come with discounted rates for 12-month commitments. We also offer volume discounts for multiple concurrent Build engagements.",
  },
  {
    question: "What happens if I'm not satisfied?",
    answer:
      "We define success criteria and exit conditions upfront. If we don't meet agreed-upon SLOs or deliverables, we'll work to make it right or provide a prorated refund.",
  },
  {
    question: "Do you support on-premise or cloud environments?",
    answer:
      "We support hybrid, cloud (AWS, Azure, GCP), and on-premise environments. The Covenda platform integrates with your existing SIEM and ticketing systems regardless of where they're hosted.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Transparent Service Pricing"
        description="No hidden fees. No per-user licensing. Just clear, outcome-driven pricing for security engineering and operations."
        secondaryCta={{ text: "Talk to Sales", href: "/contact" }}
      />

      {/* Pricing Tiers */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={
                  tier.popular ? "border-primary shadow-lg relative" : ""
                }
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.duration}</CardDescription>
                  <div className="mt-4">
                    <div className="text-3xl font-bold">{tier.pricing}</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {tier.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3"
                    >
                      <span>{tier.cta}</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All pricing is approximate and based on typical engagements.
              Contact us for a custom quote based on your specific needs.
            </p>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">
              What's included in every engagement
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Platform Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full access to the Covenda unified risk platform, including
                    threat models, detection content, and automation runbooks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Standard Integrations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Connectors for Sentinel, Splunk, Jira, ServiceNow, GitHub,
                    Slack, and other common tools at no additional cost.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Knowledge Transfer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Documentation, runbooks, and training to ensure your team
                    can independently operate what we build.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Email and Slack support during engagement. Operate tier
                    includes 24/7 escalation channels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Talk to our team to discuss your needs and get a custom quote.
              Most engagements start with a 2-4 week assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="black" asChild>
                <Link href="/contact" className="inline-flex items-center gap-3">
                  <span>Talk to Sales</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="black" asChild>
                <Link href="/services" className="inline-flex items-center gap-3">
                  <span>View Services</span>
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
