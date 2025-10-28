import type { Metadata } from "next";
import { Shield, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Covenda Services Sell Sheet",
  description: "Professional services overview for Covenda AI-SOC and Forward-Deployed Engineering",
  robots: { index: false, follow: false },
};

export default function SellSheetPage() {
  return (
    <div className="min-h-screen bg-white print:p-0">
      {/* Print Instructions */}
      <div className="no-print bg-blue-50 border-b border-blue-200 py-3 px-4 text-center text-sm">
        <p className="text-blue-900">
          <strong>Print to PDF:</strong> Use your browser's print function (Cmd/Ctrl + P) and select "Save as PDF"
        </p>
      </div>

      {/* Sell Sheet Content - 8.5x11 optimized */}
      <div className="max-w-[8.5in] mx-auto bg-white print:shadow-none shadow-lg print:my-0 my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Covenda</h1>
              <p className="text-blue-100 text-lg">
                Build & Run Your AI-SOC with Forward-Deployed Security Engineers
              </p>
            </div>
            <Shield className="h-16 w-16 opacity-20" />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-2">
              Security Engineering as a Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Covenda provides end-to-end security operations through embedded Forward-Deployed Engineers (FDEs) and
              co-managed AI-SOC services. We integrate with your existing security stack (Sentinel, Splunk, Jira,
              ServiceNow) to deliver measurable improvements in detection coverage, response times, and operational efficiency.
            </p>
          </section>

          {/* Services Grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Offerings</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Assess */}
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-lg">Assess</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  2-4 week security posture evaluation
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Current state documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Gap analysis (NIST, MITRE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prioritized roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Resource estimates</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-lg font-bold text-blue-600">Starting at $25K</p>
                </div>
              </div>

              {/* Build */}
              <div className="border-2 border-blue-600 rounded-lg p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-lg">Build</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  6-12 weeks with embedded FDE pod
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>1-3+ embedded engineers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Detection engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Automation & runbooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Knowledge transfer</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-300">
                  <p className="text-lg font-bold text-blue-600">Starting at $120K</p>
                </div>
              </div>

              {/* Operate */}
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-lg">Operate</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Ongoing co-managed operations
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 monitoring & response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Defined SLOs (Critical: 15m)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Continuous tuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Monthly reviews</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-lg font-bold text-blue-600">Starting at $15K/mo</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="bg-gray-50 -mx-8 px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Covenda?</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                  Embedded Expertise
                </h3>
                <p className="text-sm text-gray-700">
                  FDEs join your team, participate in standups, and deliver through sprint cycles—not remote
                  consulting engagements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                  Outcome-Driven
                </h3>
                <p className="text-sm text-gray-700">
                  Measurable SLOs and exit criteria tied to MTTD, MTTR, coverage %, and false positive reduction—not billable hours.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                  Stack-Agnostic
                </h3>
                <p className="text-sm text-gray-700">
                  Works with your existing tools: Sentinel, Splunk, Chronicle, Jira, ServiceNow, PagerDuty, GitHub.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                  Knowledge Transfer
                </h3>
                <p className="text-sm text-gray-700">
                  Runbooks, documentation, and training ensure your team can maintain and evolve solutions post-engagement.
                </p>
              </div>
            </div>
          </section>

          {/* Typical Results */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Results</h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-3xl font-bold text-blue-600 mb-1">95%</p>
                <p className="text-sm text-gray-700">MITRE ATT&CK Coverage</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-3xl font-bold text-blue-600 mb-1">8 min</p>
                <p className="text-sm text-gray-700">Mean Time to Detect</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-3xl font-bold text-blue-600 mb-1">70%</p>
                <p className="text-sm text-gray-700">False Positive Reduction</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-3xl font-bold text-blue-600 mb-1">24/7</p>
                <p className="text-sm text-gray-700">SOC Coverage</p>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Common Use Cases</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>SOC modernization & detection engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Incident response readiness & playbook development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Compliance automation (SOC 2, PCI-DSS, HIPAA)</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Cloud security posture management (Azure, AWS, GCP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Supply chain risk & SCA/SBOM implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Threat hunting & purple team exercises</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 border-t-2 border-blue-600">
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-semibold text-gray-900">Contact Us</p>
              <p className="text-gray-700">sales@covenda.ai</p>
              <p className="text-gray-700">www.covenda.ai</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">© 2024 Covenda</p>
              <p className="text-gray-600">Security Engineering as a Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print-specific styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            .no-print {
              display: none !important;
            }
            body {
              margin: 0;
              padding: 0;
            }
            @page {
              size: letter;
              margin: 0;
            }
          }
        `
      }} />
    </div>
  );
}
