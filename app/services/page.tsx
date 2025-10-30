import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FDE Services | Covenda AI-SOC",
  description:
    "Forward-Deployed Engineers embed with your team to stand up AI-RBVM, run playbooks, and deliver measurable outcomes in weeks. Pilot, subscription, or outcome-based pricing.",
};

export default function Services() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Forward-Deployed Engineers
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              FDEs embed with your team to stand up RBVM, run playbooks, and
              land outcomes in weeks—not quarters
            </p>
            <Button href="/demo" size="lg">
              Book an FDE
            </Button>
          </div>
        </Section>

        {/* What is an FDE */}
        <Section background="gray">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What is an FDE?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Forward-Deployed Engineer is a Covenda expert who works
                directly with your security team—on-site or remote—to deploy
                Lucid ML, operationalize AI-RBVM, and drive measurable risk
                reduction.
              </p>
              <div className="space-y-4">
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
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Embedded Expertise
                    </h3>
                    <p className="text-gray-600">
                      FDEs join standups, sprint planning, and incident response
                      as part of your team
                    </p>
                  </div>
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
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Outcomes-Focused
                    </h3>
                    <p className="text-gray-600">
                      SLAs tied to risk reduction, MTTR, and backlog
                      burn-down—not hours logged
                    </p>
                  </div>
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
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Knowledge Transfer
                    </h3>
                    <p className="text-gray-600">
                      FDEs train your team to run RBVM independently by
                      engagement end
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                [FDE Team Photo Placeholder]
              </div>
            </div>
          </div>
        </Section>

        {/* 90-Day Plan */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sample 90-Day Engagement Plan
            </h2>
            <p className="text-lg text-gray-600">
              From assessment to transition—here&apos;s how FDEs deliver value
              fast
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Week 1-2",
                title: "Assess",
                color: "bg-blue-500",
                objectives: [
                  "Map asset inventory & data sources (cloud, agents, scanners)",
                  "Interview stakeholders: CISO, SecOps, AppSec, Compliance",
                  "Document current VM workflow & pain points",
                  "Define success metrics (MTTR, backlog, risk exposure)",
                ],
              },
              {
                phase: "Week 3-4",
                title: "Stand-Up",
                color: "bg-purple-500",
                objectives: [
                  "Deploy Lucid ML: connect integrations, configure auth",
                  "Ingest first batch of vulnerability data",
                  "Calibrate scoring model with baseline risk weights",
                  "Pilot with 1-2 teams: run first prioritization cycle",
                ],
              },
              {
                phase: "Week 5-8",
                title: "Operate",
                color: "bg-accent",
                objectives: [
                  "Run weekly RBVM sprints: ingest → score → assign → verify",
                  "Auto-create tickets in Jira/ServiceNow with owners & SLAs",
                  "Train team on dashboards, playbooks, and override rules",
                  "Iterate on scoring based on feedback & false positives",
                ],
              },
              {
                phase: "Week 9-12",
                title: "Refine & Scale",
                color: "bg-green-500",
                objectives: [
                  "Expand to all teams: cloud, app, infra",
                  "Add custom playbooks for common remediation patterns",
                  "Integrate compliance mappings (ISO, SOC 2, PCI)",
                  "Generate first board report: risk trend & ROI",
                ],
              },
              {
                phase: "Week 13+",
                title: "Transition",
                color: "bg-gray-700",
                objectives: [
                  "Hand off operational ownership to your team",
                  "Document runbooks, RACI, escalation paths",
                  "Ongoing support via Slack + monthly check-ins",
                  "Optional: extended FDE for advanced use cases",
                ],
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <div className={`${phase.color} text-white px-6 py-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium opacity-90">
                        {phase.phase}
                      </div>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Key Objectives
                  </h4>
                  <ul className="space-y-2">
                    {phase.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* RBVM Runbook */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              RBVM Runbook Outline
            </h2>
            <p className="text-lg text-gray-600">
              FDEs establish a repeatable process your team can run
              independently
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "1. Intake",
                steps: [
                  "Automated daily sync from all scanners",
                  "Deduplication & normalization",
                  "Asset enrichment (owner, criticality, environment)",
                ],
              },
              {
                title: "2. Scoring",
                steps: [
                  "Lucid ML generates risk scores",
                  'Apply custom overrides (e.g., "ignore dev assets")',
                  "Flag high-priority items for immediate review",
                ],
              },
              {
                title: "3. Assignment",
                steps: [
                  "Auto-create tickets in backlog",
                  "Assign to owners via RACI matrix",
                  "Set SLAs (24h for critical, 7d for high, etc.)",
                ],
              },
              {
                title: "4. Change Control",
                steps: [
                  "Owner proposes fix (patch, config, compensating control)",
                  "Change approval workflow (if required)",
                  "Deploy to staging → verify → production",
                ],
              },
              {
                title: "5. Verification",
                steps: [
                  "Rescan asset post-remediation",
                  "Confirm CVE is closed",
                  "Capture evidence for audit trail",
                ],
              },
              {
                title: "6. Evidence Capture",
                steps: [
                  "Export remediation logs, timestamps, approval chains",
                  "Map to compliance controls (ISO 27001, SOC 2, PCI DSS)",
                  "Generate audit-ready reports",
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.steps.map((step, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 flex items-start"
                    >
                      <span className="text-accent mr-2">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Pricing Models */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing Models
            </h2>
            <p className="text-lg text-gray-600">
              Flexible options to fit your team size and engagement type
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pilot</h3>
              <div className="text-3xl font-bold text-accent mb-4">30 days</div>
              <p className="text-gray-600 mb-6">
                Proof-of-value engagement. Single team, up to 500 assets.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  1 FDE (part-time)
                </li>
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Platform setup & training
                </li>
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Risk reduction report
                </li>
              </ul>
              <Button href="/demo" className="w-full">
                Start Pilot
              </Button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg border-2 border-accent p-8 relative">
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Subscription
              </h3>
              <div className="text-3xl font-bold text-accent mb-4">Annual</div>
              <p className="text-gray-600 mb-6">
                Ongoing FDE support + platform license. Scale to full org.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Dedicated FDE(s)
                </li>
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Unlimited assets
                </li>
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Custom playbooks & integrations
                </li>
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Quarterly business reviews
                </li>
              </ul>
              <Button href="/contact" className="w-full">
                Contact Sales
              </Button>
            </div>

            <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Outcome-Based
              </h3>
              <div className="text-3xl font-bold text-accent mb-4">Custom</div>
              <p className="text-gray-600 mb-6">
                Pay for measurable results: risk reduction %, MTTR improvement.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  SLAs tied to metrics
                </li>
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Baseline assessment
                </li>
                <li className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Shared-risk model
                </li>
              </ul>
              <Button href="/contact" variant="secondary" className="w-full">
                Discuss Terms
              </Button>
            </div>
          </div>
        </Section>

        {/* SLA Examples */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sample SLAs</h2>
            <p className="text-lg text-gray-300">
              We hold ourselves accountable to measurable outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-4">Risk Reduction</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 30% reduction in critical exposure by day 60</li>
                <li>
                  • 50% backlog burn-down on high-priority items by day 90
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-4">Operational</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• MTTR for critical vulns below 7 days</li>
                <li>• 95% SLA adherence on ticket resolution</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-4">Deliverables</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Weekly status reports + risk dashboard</li>
                <li>• Monthly business review with exec summary</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Slack response within 4 business hours</li>
                <li>• Quarterly roadmap planning sessions</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to embed an FDE?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a scoping call to discuss your team&apos;s needs and build a
              custom plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Book an FDE
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Request Pricing
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
