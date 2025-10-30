import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Customers | Covenda AI-SOC",
  description:
    "Case studies from fintech, SaaS, and finance teams using Covenda AI-RBVM. See before/after metrics and real risk reduction outcomes.",
};

export default function Customers() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Customer Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Real teams, real metrics, real risk reduction
            </p>
          </div>
        </Section>

        {/* Quote Carousel */}
        <Section background="gray">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg border-2 border-gray-200">
              <svg
                className="w-12 h-12 text-accent mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-gray-900 mb-6 font-medium">
                &quot;Covenda cut our critical backlog by 62% in 60 days. The
                FDE embedded with our team, tuned Lucid to our environment, and
                we finally have a risk-ranked remediation plan that makes
                sense.&quot;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Chen</div>
                  <div className="text-gray-600">
                    CISO, Fintech Startup (Series B)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Case Studies */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Case Studies
            </h2>

            <div className="space-y-12">
              {/* Case Study 1 */}
              <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-100 p-8">
                    <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                      [Logo Placeholder]
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                      Fintech
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      How a Series B Fintech Reduced Critical Exposure by 73% in
                      90 Days
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Context
                        </h4>
                        <p className="text-gray-600">
                          Payment processor with 2,000 cloud assets across AWS
                          and GCP. Security team of 4. Overwhelmed by scanner
                          noise from Wiz and AWS Inspector.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Approach
                        </h4>
                        <p className="text-gray-600">
                          FDE deployed Lucid, integrated scanners, calibrated
                          scoring for payment infrastructure. Ran 6-week sprint
                          focused on internet-facing APIs and data stores.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Results
                        </h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• 73% reduction in critical cloud vulns</li>
                          <li>• MTTR down from 21 days to 6 days</li>
                          <li>
                            • Passed PCI DSS audit with Lucid evidence exports
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button href="/demo" variant="secondary">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-100 p-8">
                    <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                      [Logo Placeholder]
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-3">
                      SaaS
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      SaaS Platform Cuts Container Remediation Time by 68%
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Context
                        </h4>
                        <p className="text-gray-600">
                          300-microservice architecture on Kubernetes. Snyk,
                          Aqua, and Trivy generating 5,000+ container findings
                          monthly. DevSecOps team of 8.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Lucid View
                        </h4>
                        <p className="text-gray-600">
                          Lucid mapped container-to-service dependencies, tagged
                          production vs. staging, and scored based on data
                          sensitivity and network exposure.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Results
                        </h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• MTTR: 18 days → 4.2 days (68% improvement)</li>
                          <li>
                            • 85% of backlog auto-closed (false positives,
                            dev-only assets)
                          </li>
                          <li>
                            • SOC 2 Type II audit: zero findings on container
                            security
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button href="/demo" variant="secondary">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-100 p-8">
                    <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                      [Logo Placeholder]
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-3">
                      Finance
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Regional Bank Achieves Board-Ready Risk Reporting in 30
                      Days
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Context
                        </h4>
                        <p className="text-gray-600">
                          Hybrid infrastructure (on-prem + AWS). Tenable,
                          Qualys, and manual spreadsheets. CISO needed
                          executive-level risk metrics for quarterly board
                          reviews.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Approach
                        </h4>
                        <p className="text-gray-600">
                          FDE integrated Tenable and Qualys into Lucid, mapped
                          assets to business units, and built custom dashboards
                          for CISO and board.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Results
                        </h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>
                            • First board report delivered in 30 days
                            (previously 6+ months of manual work)
                          </li>
                          <li>
                            • 47% reduction in critical exposure across all
                            assets
                          </li>
                          <li>
                            • ISO 27001 certification accelerated by 2 quarters
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button href="/demo" variant="secondary">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Industries */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl mb-3">🏦</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Finance & Fintech
              </h3>
              <p className="text-sm text-gray-600">
                Banks, payment processors, lending platforms. PCI DSS, SOC 2,
                ISO 27001 compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-bold text-gray-900 mb-2">
                SaaS & Technology
              </h3>
              <p className="text-sm text-gray-600">
                B2B SaaS, cloud-native startups, dev tools. Fast-moving,
                container-heavy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Healthcare & Life Sciences
              </h3>
              <p className="text-sm text-gray-600">
                Healthtech, pharma, medical devices. HIPAA, FDA compliance, PHI
                protection.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to join them?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start a 30-day pilot and see measurable risk reduction
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
