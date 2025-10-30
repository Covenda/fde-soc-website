import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cloud Risk & AppSec | Covenda Solutions",
  description:
    "AI-RBVM for cloud and application security. Surface exploitable vulns across AWS, Azure, GCP, containers, and repos. Tie risk to business impact.",
};

export default function CloudRisk() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud Risk & AppSec
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Surface exploitable vulnerabilities across cloud, containers, and
              code. Prioritize by business impact.
            </p>
            <Button href="/demo" size="lg">
              Book a 30-Min Pilot
            </Button>
          </div>
        </Section>

        {/* Problem */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              The Problem
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Alert Fatigue</h3>
                <p className="text-gray-600">
                  Cloud scanners (AWS Inspector, Azure Defender, Wiz, Orca)
                  generate thousands of findings. 95% are noise.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Context Gap</h3>
                <p className="text-gray-600">
                  CVSS scores don&apos;t know if your S3 bucket is public, your
                  Lambda talks to production DBs, or your container is
                  internet-facing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Fragmented Visibility
                </h3>
                <p className="text-gray-600">
                  Infrastructure vulns in one tool, container vulns in another,
                  app vulns in a third. No unified risk view.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Slow Remediation
                </h3>
                <p className="text-gray-600">
                  Manual triage → tickets lost in backlog → breach happens
                  before patch lands.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Lucid Approach */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Lucid Approach
            </h2>
            <p className="text-lg text-gray-600">
              AI-RBVM fuses cloud metadata, threat intel, and attack-path
              modeling to rank the 10% of work that removes 90% of risk
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Unified Ingestion",
                description:
                  "Pull findings from AWS Inspector, Azure Defender, GCP SCC, Prisma Cloud, Wiz, Orca, Snyk, Aqua—normalized into a single schema.",
                icon: "📥",
              },
              {
                title: "Contextual Enrichment",
                description: `Lucid overlays asset metadata: is the resource internet-facing? Does it process PII? What's the blast radius if compromised?`,
                icon: "🔍",
              },
              {
                title: "Attack-Path Modeling",
                description:
                  "Lucid chains vulnerabilities into likely attack sequences (e.g., SSRF in Lambda → credential exposure → lateral movement to RDS).",
                icon: "🛤️",
              },
              {
                title: "Risk Scoring",
                description:
                  "Impact × likelihood × exploitability. A critical CVE on a dev instance scores lower than a medium CVE on your payment API.",
                icon: "📊",
              },
              {
                title: "Auto-Assignment",
                description:
                  "Tickets route to the right owner (DevOps, AppSec, or SRE) with fix guidance, SLAs, and rollback instructions.",
                icon: "✅",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <div className="text-4xl mr-6">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Sample Metrics */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sample Metrics
            </h2>
            <p className="text-lg text-gray-300">
              Real outcomes from cloud & AppSec teams using Covenda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="text-5xl font-bold text-accent mb-2">73%</div>
              <div className="text-lg font-medium text-white mb-2">
                Reduction in critical cloud vulns
              </div>
              <p className="text-sm text-gray-300">
                within 90 days (fintech customer, 2K cloud assets)
              </p>
            </div>
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="text-5xl font-bold text-accent mb-2">
                4.2 days
              </div>
              <div className="text-lg font-medium text-white mb-2">
                MTTR for container vulns
              </div>
              <p className="text-sm text-gray-300">
                down from 18 days (SaaS company, 300 microservices)
              </p>
            </div>
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="text-5xl font-bold text-accent mb-2">10x</div>
              <div className="text-lg font-medium text-white mb-2">
                Faster triage
              </div>
              <p className="text-sm text-gray-300">
                Lucid scores replace 2-week manual review cycles
              </p>
            </div>
          </div>
        </Section>

        {/* Use Cases */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Multi-Cloud Security",
                description:
                  "Unified risk view across AWS, Azure, GCP. No vendor lock-in.",
              },
              {
                title: "Container & Kubernetes",
                description:
                  "Scan registries (ECR, ACR, GCR), runtime images, and K8s configs. Track drift.",
              },
              {
                title: "Serverless & PaaS",
                description:
                  "Lambda, Cloud Functions, App Services—identify over-permissioned functions, insecure dependencies.",
              },
              {
                title: "Infrastructure-as-Code",
                description:
                  "Scan Terraform, CloudFormation, ARM templates pre-deploy. Catch misconfigs before prod.",
              },
              {
                title: "SaaS & API Security",
                description:
                  "Monitor SaaS integrations (Okta, Slack, GitHub) for credential leaks, privilege creep.",
              },
              {
                title: "Compliance Mapping",
                description:
                  "Map remediation to CIS, NIST, PCI DSS, HIPAA controls. Auto-generate evidence for audits.",
              },
            ].map((useCase) => (
              <div
                key={useCase.title}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Run a 30-Day Pilot
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect your cloud scanners, see Lucid scoring in action, measure
              MTTR improvement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Book a Pilot
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
                See the Platform
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
