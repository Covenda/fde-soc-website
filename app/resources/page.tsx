import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resources | Covenda AI-SOC",
  description:
    "RBVM playbooks, threat modeling guides, compliance mappings, and product documentation. Learn how to operationalize AI-RBVM.",
};

export default function Resources() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Guides, playbooks, and docs to help you operationalize AI-RBVM
            </p>
          </div>
        </Section>

        {/* Featured Downloads */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Downloads
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg border-2 border-accent">
              <div className="inline-block px-3 py-1 bg-accent text-white rounded text-sm font-bold mb-4">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                RBVM Playbook
              </h3>
              <p className="text-gray-600 mb-6">
                A 20-page guide to implementing risk-based vulnerability
                management. Includes runbooks, RACI templates, and KPI
                dashboards.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>• 6-step implementation framework</li>
                <li>• Sample scoring weights & override rules</li>
                <li>• Integration checklists for 20+ tools</li>
                <li>• Compliance mapping (ISO, SOC 2, PCI)</li>
              </ul>
              <Button
                href="/resources/rbvm-playbook-download"
                className="w-full"
              >
                Download (PDF, 2.1 MB)
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm font-bold mb-4">
                NEW
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Lucid Threat Modeling Primer
              </h3>
              <p className="text-gray-600 mb-6">
                How Lucid generates TTP-aware threat intelligence. Deep dive
                into ML model architecture, data sources, and explainability.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>• MITRE ATT&CK integration</li>
                <li>• Attack-path modeling examples</li>
                <li>• Likelihood vs. impact scoring</li>
                <li>• Model validation & bias checks</li>
              </ul>
              <Button
                href="/resources/threat-modeling-download"
                variant="secondary"
                className="w-full"
              >
                Download (PDF, 1.8 MB)
              </Button>
            </div>
          </div>
        </Section>

        {/* Documentation */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documentation
            </h2>
            <p className="text-lg text-gray-600">
              Technical guides for platform setup, integrations, and API usage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Getting Started",
                href: "/docs/getting-started",
                description: "5-minute quickstart guide",
              },
              {
                title: "AI-RBVM Method",
                href: "/docs/rbvm-method",
                description: "Scoring formula, factors, weighting",
              },
              {
                title: "Lucid Threat Modeling",
                href: "/docs/threat-modeling",
                description: "How TTP-aware intel is derived",
              },
              {
                title: "Data & Security",
                href: "/docs/security",
                description: "Data flows, encryption, retention",
              },
              {
                title: "Integrations",
                href: "/docs/integrations",
                description: "Supported sources, schemas, APIs",
              },
              {
                title: "Runbooks & Playbooks",
                href: "/docs/runbooks",
                description: "Intake, triage, assign, verify",
              },
              {
                title: "Responsible AI",
                href: "/docs/responsible-ai",
                description: "Model eval, bias checks, guardrails",
              },
              {
                title: "Compliance Mappings",
                href: "/docs/compliance",
                description: "ISO, SOC 2, PCI DSS controls",
              },
              {
                title: "FDE Engagement Guide",
                href: "/docs/fde-guide",
                description: "Roles, week-by-week plan, RACI",
              },
            ].map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-accent transition-colors"
              >
                <h3 className="font-bold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-600">{doc.description}</p>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/docs" variant="secondary">
              Browse All Docs
            </Button>
          </div>
        </Section>

        {/* Blog */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from the Blog
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: `Why CVSS Alone Isn't Enough for Cloud Risk`,
                date: "Oct 25, 2025",
                category: "Best Practices",
                excerpt: `CVSS scores don't know if your S3 bucket is public. Here's how to layer business context onto vulnerability scoring.`,
              },
              {
                title: "How to Build a 30-Day RBVM Pilot",
                date: "Oct 18, 2025",
                category: "Guides",
                excerpt:
                  "Step-by-step plan to scope, launch, and measure a vulnerability management pilot in 4 weeks.",
              },
              {
                title: "AI-RBVM vs. Traditional VM: A Side-by-Side",
                date: "Oct 11, 2025",
                category: "Product",
                excerpt: `We compare legacy vulnerability management to AI-driven risk-based approaches. Spoiler: it's not close.`,
              },
            ].map((post) => (
              <div
                key={post.title}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium mb-3">
                  {post.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="/resources/blog"
                  className="text-accent hover:underline font-medium text-sm"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/resources/blog" variant="secondary">
              View All Posts
            </Button>
          </div>
        </Section>

        {/* Webinars */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Webinars & Office Hours
            </h2>
            <p className="text-lg text-gray-600">
              Join our team for live walkthroughs and Q&A
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg border-2 border-gray-200">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0">
                <div className="inline-block px-3 py-1 bg-accent text-white rounded text-xs font-bold mb-3">
                  UPCOMING
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  AI-RBVM Office Hours
                </h3>
                <p className="text-gray-600 mb-2">
                  Every Thursday at 11am PT / 2pm ET
                </p>
                <p className="text-sm text-gray-500">
                  Bring your RBVM questions, see live demos, share best
                  practices
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  href="https://calendly.com/covenda/office-hours"
                  size="lg"
                >
                  Register (Free)
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/resources/webinars"
              className="text-accent hover:underline font-medium"
            >
              View past webinar recordings →
            </a>
          </div>
        </Section>

        {/* CTA */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to implement RBVM?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Book a demo or start a pilot. Our FDEs will guide you every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Book a Demo
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
