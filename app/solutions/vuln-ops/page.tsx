import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vulnerability Ops at Scale | Covenda Solutions",
  description:
    "AI-RBVM for enterprise-scale vulnerability operations. Manage 10K+ assets, automate triage, and reduce backlog by 60–80% with Lucid ML.",
};

export default function VulnOps() {
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
              Vulnerability Ops at Scale
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Manage tens of thousands of assets, automate triage, and burn down
              backlogs 60–80% with AI-RBVM
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
                <h3 className="font-bold text-gray-900 mb-3">
                  Volume Paralysis
                </h3>
                <p className="text-gray-600">
                  10K+ assets, 50K+ vulnerabilities, 20+ scanner sources. Manual
                  triage takes weeks. By the time you prioritize, attackers have
                  moved on.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Endless Backlog
                </h3>
                <p className="text-gray-600">
                  Your backlog grows faster than remediation. Every month: 5K
                  new findings, 2K closed. Net change: -3K more work.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Burnout & Churn
                </h3>
                <p className="text-gray-600">
                  Security teams spend 80% of time on low-value triage. Analysts
                  burn out, quit, or get pulled into other projects.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  No Accountability
                </h3>
                <p className="text-gray-600">
                  Tickets sit in Jira for months with no owner, no SLA, no
                  follow-up. &quot;It&apos;s in the backlog&quot; becomes the
                  default answer.
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
              AI-RBVM processes 50K+ vulnerabilities in seconds, auto-assigns to
              owners, and shrinks backlogs by 60–80%
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Multi-Source Aggregation",
                description:
                  "Lucid ingests from 20+ scanner types: Tenable, Qualys, Rapid7, Wiz, Orca, CrowdStrike, cloud-native tools. Normalized, deduplicated, enriched in real-time.",
                icon: "🔄",
              },
              {
                title: "Automated Triage at Scale",
                description:
                  "ML-driven scoring processes thousands of CVEs per minute. No manual review required. 90% of findings auto-closed (false positives, dev assets, compensating controls).",
                icon: "⚡",
              },
              {
                title: "Smart Assignment",
                description:
                  "Lucid maps vulns to owners via RACI, CMDB, and asset tags. Tickets auto-created in Jira/ServiceNow with context, fix guidance, and SLAs.",
                icon: "🎯",
              },
              {
                title: "Backlog Burn-Down",
                description:
                  "Focus on the 10% that matters. Lucid ranks by exploitability, exposure, and business impact. Typical result: 60–80% backlog reduction in 90 days.",
                icon: "🔥",
              },
              {
                title: "SLA Enforcement",
                description:
                  "Auto-escalate overdue tickets. Page on-call. Notify managers. Close the loop on remediation with automated verification and audit evidence.",
                icon: "📋",
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
              Real outcomes from enterprise security teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="text-5xl font-bold text-accent mb-2">78%</div>
              <div className="text-lg font-medium text-white mb-2">
                Backlog reduction
              </div>
              <p className="text-sm text-gray-300">
                Enterprise with 15K assets, 60K vulns → 13K after 90 days
              </p>
            </div>
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="text-5xl font-bold text-accent mb-2">2 hours</div>
              <div className="text-lg font-medium text-white mb-2">
                Weekly triage time
              </div>
              <p className="text-sm text-gray-300">
                Down from 40 hours/week of manual review
              </p>
            </div>
            <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-lg font-medium text-white mb-2">
                SLA adherence
              </div>
              <p className="text-sm text-gray-300">
                With auto-escalation and ownership tracking
              </p>
            </div>
          </div>
        </Section>

        {/* How It Works */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works at 10K+ Assets
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Ingest & Normalize",
                description:
                  "Daily sync from all scanners. Lucid merges duplicates, enriches with CMDB/cloud metadata, and builds a unified asset inventory.",
              },
              {
                step: "2",
                title: "ML Triage",
                description:
                  "Lucid scores 50K+ vulns in <5 minutes. False positives auto-closed. Dev/staging assets deprioritized. Critical prod assets flagged.",
              },
              {
                step: "3",
                title: "Batch Assignment",
                description:
                  "Thousands of tickets created overnight. Owners, SLAs, fix guidance auto-populated. Teams wake up to a prioritized workload.",
              },
              {
                step: "4",
                title: "Remediation Sprints",
                description:
                  "Run 2-week sprints. Lucid dashboard shows burn-down, risk trend, and SLA compliance. FDEs coach teams on process.",
              },
              {
                step: "5",
                title: "Verification & Rollback",
                description:
                  "Post-fix, Lucid rescans assets. Confirms CVE closure. Captures evidence. If regression detected, auto-creates rollback ticket.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="bg-accent text-white font-bold w-12 h-12 rounded-full flex items-center justify-center text-xl mr-6 flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Use Cases */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Enterprise VM Programs",
                description:
                  "10K+ assets, multiple business units, global SOC. Centralized risk view, decentralized remediation.",
              },
              {
                title: "Mergers & Acquisitions",
                description:
                  "Absorbing a new company? Ingest their scanners, normalize findings, and run RBVM across both orgs in weeks.",
              },
              {
                title: "Regulated Industries",
                description:
                  "Finance, healthcare, critical infrastructure. Map remediation to compliance controls (PCI, HIPAA, NERC CIP).",
              },
              {
                title: "Managed Security Services",
                description:
                  "MSSPs running VM for 50+ clients. Lucid multi-tenancy: separate scoring, dashboards, and SLAs per client.",
              },
              {
                title: "DevSecOps at Scale",
                description:
                  "Hundreds of dev teams, thousands of repos/containers. Auto-assign vulns to repo owners via GitHub/GitLab integration.",
              },
              {
                title: "Legacy Infrastructure",
                description:
                  "Mix of modern cloud and 10-year-old on-prem servers. Lucid handles both. Prioritize end-of-life systems for migration.",
              },
            ].map((useCase) => (
              <div
                key={useCase.title}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FDE Support */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 rounded-lg border-2 border-accent">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                FDE Support for Large-Scale Deployments
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Scaling VM to 10K+ assets isn&apos;t just a tech
                problem—it&apos;s a people and process problem. Our FDEs embed
                with your team to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Stand up multi-source ingestion pipelines
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Calibrate scoring for your asset criticality model
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Train 10+ team members across business units
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Run first 3 sprints, prove 60% backlog reduction
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <Button href="/services" size="lg">
                  Learn About FDE Services
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Shrink Your Backlog?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Run a 30-day pilot with 1,000 assets. See 60%+ backlog reduction.
              Scale to full org.
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
