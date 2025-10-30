import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Board & Executive Reporting | Covenda Solutions",
  description:
    "AI-RBVM delivers board-ready risk metrics in 30 days. Trend analysis, ROI proof, and non-technical executive summaries from Lucid ML.",
};

export default function BoardReporting() {
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
              Board & Executive Reporting
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Board-ready risk metrics in 30 days. Non-technical summaries,
              trend analysis, and ROI proof.
            </p>
            <Button href="/demo" size="lg">
              Book Executive Briefing
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
                  No Executive-Level View
                </h3>
                <p className="text-gray-600">
                  Your scanners generate technical reports. Your CISO needs
                  business metrics. Manual translation takes weeks. Board
                  meeting is tomorrow.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Static Snapshots
                </h3>
                <p className="text-gray-600">
                  Board gets a PowerPoint once per quarter showing vuln counts.
                  No trend. No context. No proof of improvement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Can't Prove ROI
                </h3>
                <p className="text-gray-600">
                  Board asks: "What are we getting for our security budget?" You
                  can't show MTTR improvement, backlog reduction, or risk trend.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Apples vs. Oranges
                </h3>
                <p className="text-gray-600">
                  Board compares your metrics to other companies. But every CISO
                  measures differently. No industry benchmarks.
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
              AI-RBVM generates board-ready metrics automatically. Non-technical
              language. Trend analysis. Industry benchmarks.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Executive Dashboard",
                description:
                  "Real-time view of risk posture: critical exposure trend, MTTR, backlog size, and remediation velocity. Updated daily. Exportable to PDF for board decks.",
                icon: "📊",
              },
              {
                title: "Non-Technical Language",
                description:
                  'Lucid translates CVEs into business risk: "Payment API exposed to remote code execution" not "CVE-2024-1234 CVSS 9.8". Execs understand impact.',
                icon: "💬",
              },
              {
                title: "Trend Analysis",
                description:
                  "90-day, 180-day, and 12-month trends. Show board: risk is decreasing, MTTR improving, backlog shrinking. Prove your program works.",
                icon: "📈",
              },
              {
                title: "ROI Metrics",
                description:
                  "Lucid calculates: time saved (vs. manual triage), risk reduction (critical vulns closed), and cost avoidance (breaches prevented via RBVM).",
                icon: "💰",
              },
              {
                title: "Industry Benchmarks",
                description:
                  "Compare your MTTR, backlog size, and remediation rate to peer companies (anonymized, aggregated). Show board where you stand.",
                icon: "🏆",
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

        {/* Sample Board Report */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sample Board Report
            </h2>
            <p className="text-lg text-gray-600">
              2-page executive summary from Lucid
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Page 1 - Overview */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <div className="mb-6 pb-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Q4 2024 Cyber Risk Report
                    </h3>
                    <p className="text-sm text-gray-600">
                      Executive Summary for Board of Directors
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      Prepared by: CISO
                    </div>
                    <div className="text-sm text-gray-600">
                      Date: November 15, 2024
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  Overall Risk Posture
                </h4>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      ↓ 47%
                    </div>
                    <div className="text-sm text-gray-700">
                      Critical Exposure
                    </div>
                    <div className="text-xs text-gray-500">vs. Q3 2024</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      5.2 days
                    </div>
                    <div className="text-sm text-gray-700">
                      Mean Time to Remediate
                    </div>
                    <div className="text-xs text-gray-500">Critical vulns</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      2,347
                    </div>
                    <div className="text-sm text-gray-700">
                      Vulns Remediated
                    </div>
                    <div className="text-xs text-gray-500">This quarter</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      $1.2M
                    </div>
                    <div className="text-sm text-gray-700">
                      Estimated Cost Avoidance
                    </div>
                    <div className="text-xs text-gray-500">
                      Breaches prevented
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Key Highlights</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>Payment infrastructure secured:</strong> All
                      critical vulnerabilities in payment APIs remediated within
                      24 hours of discovery.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>Audit readiness:</strong> SOC 2 Type II audit
                      completed with zero findings related to vulnerability
                      management.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>Backlog reduction:</strong> Critical vulnerability
                      backlog reduced by 73% through AI-driven prioritization.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">
                  Industry Comparison
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">
                        Mean Time to Remediate
                      </div>
                      <div className="font-bold">
                        5.2 days{" "}
                        <span className="text-green-600">(Top 15%)</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Industry avg: 14.3 days
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Backlog Size</div>
                      <div className="font-bold">
                        1,023 items{" "}
                        <span className="text-green-600">(Top 20%)</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Industry avg: 3,200 items
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">
                        Critical Exposure
                      </div>
                      <div className="font-bold">
                        47 vulns{" "}
                        <span className="text-green-600">(Top 10%)</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Industry avg: 187 vulns
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Page 2 - Trend & Roadmap */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">
                12-Month Risk Trend
              </h4>
              <div className="mb-6 p-6 bg-gray-50 rounded-lg">
                <div className="h-48 flex items-end justify-between gap-2">
                  {[85, 78, 71, 65, 58, 52, 47, 44, 42, 39, 37, 35].map(
                    (value, i) => (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center"
                      >
                        <div
                          className="w-full bg-accent rounded-t"
                          style={{ height: `${(value / 85) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2">
                          {
                            [
                              "J",
                              "F",
                              "M",
                              "A",
                              "M",
                              "J",
                              "J",
                              "A",
                              "S",
                              "O",
                              "N",
                              "D",
                            ][i]
                          }
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="text-center text-sm text-gray-600 mt-4">
                  Critical vulnerabilities per 1,000 assets (monthly average)
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  Investment & ROI
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">
                      Security Program Investment (Annual)
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      $2.4M
                    </div>
                    <div className="text-xs text-gray-500">
                      Tools, staffing, FDE services
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-sm text-gray-600 mb-2">
                      Estimated Cost Avoidance
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      $4.8M
                    </div>
                    <div className="text-xs text-gray-500">
                      Breaches prevented, downtime avoided
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">
                  Next Quarter Roadmap
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">→</span>
                    <span>
                      Expand AI-RBVM to container and serverless workloads
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">→</span>
                    <span>
                      Complete ISO 27001 certification (expected Q1 2025)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">→</span>
                    <span>
                      Reduce MTTR for high-severity vulns to &lt;3 days
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button href="/demo" variant="secondary" size="lg">
              Download Sample Board Report (PDF)
            </Button>
          </div>
        </Section>

        {/* What Boards Care About */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Boards Care About
            </h2>
            <p className="text-lg text-gray-600">
              Lucid answers the questions your board actually asks
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: '"Are we more or less secure than last quarter?"',
                answer:
                  "Critical exposure down 47%. MTTR improved 30%. Backlog reduced 73%. Clear trend: improving.",
              },
              {
                question: '"How do we compare to peers?"',
                answer:
                  "Top 15% for MTTR. Top 20% for backlog management. Benchmarks from 500+ companies in fintech sector.",
              },
              {
                question: '"What are we getting for our security budget?"',
                answer:
                  "$2.4M invested, $4.8M in cost avoidance (breaches prevented). 2:1 ROI. Plus: zero security incidents this quarter.",
              },
              {
                question: '"Are we compliant?"',
                answer:
                  "SOC 2 Type II: passed. ISO 27001: in progress (Q1 2025). PCI DSS: fully compliant. All evidence auto-generated.",
              },
              {
                question: '"What keeps you up at night?"',
                answer:
                  "Top 3 risks: (1) legacy payment system EOL in 6 months, (2) third-party vendor with weak security, (3) IoT devices in facilities. Mitigation plans attached.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FDE Board Prep */}
        <Section background="dark">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                FDE Board Prep Service
              </h2>
              <p className="text-lg text-gray-300">
                1-week sprint before your board meeting. FDEs will:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-white mb-3">
                  Day 1-2: Data Collection
                </h3>
                <p className="text-gray-300 text-sm">
                  Pull metrics from Lucid. Calculate ROI, cost avoidance, and
                  industry benchmarks. Draft initial report.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-white mb-3">
                  Day 3: Review with CISO
                </h3>
                <p className="text-gray-300 text-sm">
                  Walk through draft. Refine language for your board's
                  priorities. Add context on top risks.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-white mb-3">
                  Day 4: Finalize Report
                </h3>
                <p className="text-gray-300 text-sm">
                  Polish 2-page executive summary. Export charts, trend graphs,
                  and appendix with detailed metrics.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-white mb-3">
                  Day 5: Presentation Prep
                </h3>
                <p className="text-gray-300 text-sm">
                  Rehearse board presentation with CISO. Anticipate questions.
                  Prep backup slides.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button href="/contact" size="lg">
                Book Board Prep Sprint
              </Button>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deliver Your Best Board Report Ever
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a demo. We'll show you Lucid's executive dashboard and sample
              board reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Book Executive Briefing
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
                See Executive Dashboard
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
