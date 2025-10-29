import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  GitBranch,
  Activity,
  Workflow,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { Stat } from "@/components/stat";
import { LogoWall } from "@/components/logo-wall";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Assess",
    description:
      "Comprehensive security posture evaluation with actionable roadmap",
    features: [
      "Current state documentation",
      "Gap analysis against frameworks",
      "Prioritized remediation plan",
      "Resource and timeline estimates",
    ],
    href: "/services/fde",
  },
  {
    icon: Zap,
    title: "Deploy",
    description: "Forward-deployed security engineers embedded with your team",
    features: [
      "Security engineers in sprint-based pods",
      "Detection engineering & automation",
      "Runbooks and playbooks",
      "Knowledge transfer & documentation",
    ],
    href: "/services/fde",
  },
  {
    icon: Users,
    title: "Operate",
    description: "Co-managed AI-SOC operations with defined SLOs",
    features: [
      "24/7 monitoring and response",
      "Defined response time SLOs",
      "Continuous detection tuning",
      "Monthly strategy reviews",
    ],
    href: "/services/ai-soc",
  },
];

const integrations = [
  { name: "Microsoft Sentinel", caption: "SIEM Integration" },
  { name: "Splunk", caption: "Log Management" },
  { name: "Jira", caption: "Ticketing" },
  { name: "ServiceNow", caption: "ITSM" },
  { name: "GitHub", caption: "Code & Workflows" },
];

const caseStudies = [
  {
    title: "Financial Services: SOC Modernization",
    slug: "fintech-soc-modernization",
    industry: "Financial Services",
    challenge: "Legacy SIEM with 95% false positive rate and no automation",
    outcome:
      "Built cloud-native detection pipeline with automated triage, reducing analyst workload by 70%",
    metrics: [
      { label: "False Positives", value: "95% → 15%" },
      { label: "MTTD", value: "-60%" },
    ],
  },
  {
    title: "SaaS Platform: Supply Chain Security",
    slug: "saas-supply-chain",
    industry: "Technology",
    challenge:
      "No visibility into third-party dependencies and build pipeline risks",
    outcome:
      "Implemented continuous scanning and policy enforcement across 200+ repositories",
    metrics: [
      { label: "Repos Monitored", value: "200+" },
      { label: "Critical Vulns", value: "-85%" },
    ],
  },
  {
    title: "Healthcare: Compliance & Detection",
    slug: "healthcare-compliance",
    industry: "Healthcare",
    challenge:
      "HIPAA audit findings with insufficient logging and no incident response capability",
    outcome:
      "Deployed comprehensive logging, detection rules, and runbooks aligned with HIPAA requirements",
    metrics: [
      { label: "Coverage", value: "95%" },
      { label: "Audit Findings", value: "0" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="We are your AI-SOC"
        description="We embed Forward-Deployed Security Engineers with your team to build detections, automate responses, and co-manage operations on the Covenda unified risk platform."
        primaryCta={{ text: "Request Demo", href: "/contact" }}
        secondaryCta={{ text: "Contact Us", href: "/contact" }}
      />

      {/* Stats Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <Stat
              value="70%"
              label="Faster MTTD"
              description="Average detection time reduction"
            />
            <Stat
              value="24/7"
              label="Coverage"
              description="Co-managed operations"
            />
            <Stat
              value="2-4 wks"
              label="To Production"
              description="From assessment to first value"
            />
            <Stat
              value="50+"
              label="Integrations"
              description="Platform connectors"
            />
          </div>
        </Container>
      </Section>

      {/* What We Do Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Security engineering and operations as a service
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From initial assessment to ongoing operations, we provide the
              people, process, and platform to build and run your security
              program.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="mb-4">How it works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Covenda unified risk platform connects threat intelligence,
              controls, evidence, and automated response in a single ecosystem.
            </p>
          </div>

          {/* Platform Diagram */}
          <div className="mb-16 rounded-lg border bg-card p-8">
            <Image
              src="/diagrams/platform-diagram.svg"
              alt="Covenda Unified Risk Platform"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Process Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Forward-Deployed Engineers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Security engineers join your team in 2-week sprints.
                  Daily standups, shared Slack channels, and collaborative
                  development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Detection & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom Sigma rules, KQL/SPL queries, and automated runbooks
                  tailored to your environment. All code-reviewed and tested.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Measurable Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clear SLOs for MTTD, MTTR, and coverage. Exit criteria defined
                  upfront. Metrics dashboards for continuous visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Proof Section - Case Studies */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="mb-4">Proven results across industries</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We've helped organizations build and operate world-class security
              programs with measurable outcomes.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/customers/case-studies">
                View all case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Integrations Section */}
      <LogoWall title="Works with your existing tools" logos={integrations} />

      {/* Final CTA Section */}
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Ready to build your AI-SOC?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Start with a 2-4 week assessment to understand your current state
              and build a prioritized roadmap. No long-term commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="black" asChild>
                <Link href="/contact" className="inline-flex items-center gap-3">
                  <span>Request Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="orange" asChild>
                <Link href="/contact" className="inline-flex items-center gap-3">
                  <span>Contact Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
