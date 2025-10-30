import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Company | Covenda AI-SOC",
  description: `Learn about Covenda's mission, team, and FDE culture. YC-backed, outcomes-focused, and committed to shipping value fast.`,
};

export default function Company() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Covenda
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              We deploy Forward-Deployed Engineers to operationalize AI-RBVM.
              Ship value fast. Prove it with numbers.
            </p>
          </div>
        </Section>

        {/* Mission */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Vulnerability management is broken. Security teams drown in
              scanner noise, manually triage CVEs without context, and watch
              critical exploits languish in backlogs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Covenda fixes this. We combine <strong>Lucid ML</strong>{" "}
              (AI-powered threat modeling and risk scoring) with{" "}
              <strong>Forward-Deployed Engineers</strong> (embedded experts who
              stand up and run RBVM with your team).
            </p>
            <p className="text-lg text-gray-600">
              The result: measurable risk reduction in weeks, not quarters.
              60–80% backlog burn-down. 30–50% MTTR improvement. Audit-ready
              evidence from day one.
            </p>
          </div>
        </Section>

        {/* Values */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              YC-aligned: ship fast, measure relentlessly, iterate based on
              customer feedback
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Outcomes Over Activity
              </h3>
              <p className="text-gray-600">
                We don&apos;t charge for hours logged or meetings attended. We
                commit to risk reduction, MTTR, and backlog burn-down—metrics
                that matter.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Operator-First
              </h3>
              <p className="text-gray-600">
                Our FDEs are practitioners, not consultants. They embed with
                your SOC, run playbooks, and hand off a working RBVM process—not
                a slide deck.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparency & Trust
              </h3>
              <p className="text-gray-600">
                Every risk score comes with explainability. Every engagement has
                SLAs. Every data flow is documented. No black boxes, no vendor
                lock-in.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ship Fast, Iterate
              </h3>
              <p className="text-gray-600">
                We run 30-day pilots, not 6-month RFPs. Week-long MVPs, not
                year-long roadmaps. If something doesn&apos;t work, we fix it or
                pivot—fast.
              </p>
            </div>
          </div>
        </Section>

        {/* Team */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Team
            </h2>
            <p className="text-lg text-gray-600">
              Security practitioners, ML engineers, and FDEs from Palantir,
              Google, Amazon, and YC startups
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Placeholder",
                role: "CEO & Co-Founder",
                bio: "Ex-Palantir FDE, deployed to DoD and finance",
              },
              {
                name: "Placeholder",
                role: "CTO & Co-Founder",
                bio: "ML lead at Google Cloud Security, PhD in adversarial ML",
              },
              {
                name: "Placeholder",
                role: "Head of FDE",
                bio: "Built SOC programs at AWS and fintech unicorn",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-sm text-accent font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FDE Culture */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FDE Culture
            </h2>
            <p className="text-lg text-gray-600">
              What makes Covenda FDEs different
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Embedded, Not Consulting",
                description: `FDEs join your Slack, attend standups, run playbooks alongside your team. They're temporary teammates, not external advisors.`,
              },
              {
                title: "Technical Depth",
                description: `Every FDE has hands-on security ops experience: scanning, triage, remediation, incident response. They've built or run SOCs.`,
              },
              {
                title: "Outcome SLAs",
                description:
                  'FDEs commit to measurable results: risk reduction %, MTTR, backlog burn-down. No "best effort" clauses.',
              },
              {
                title: "Knowledge Transfer",
                description:
                  "The goal is to make your team self-sufficient. FDEs document runbooks, train operators, and transition ownership by engagement end.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Careers */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Covenda
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We&apos;re hiring FDEs, security engineers, ML researchers, and
              go-to-market roles. Remote-first, global team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/company/careers" size="lg">
                View Open Roles
              </Button>
              <Button
                href="mailto:careers@covenda.ai"
                variant="secondary"
                size="lg"
              >
                Email Us
              </Button>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Questions about our company, partnerships, or press inquiries?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Contact Us
              </Button>
              <a
                href="mailto:hello@covenda.ai"
                className="text-accent hover:underline font-medium"
              >
                hello@covenda.ai
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
