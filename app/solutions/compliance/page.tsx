import { Metadata } from 'next';
import Button from '@/components/Button';
import Section from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Audit & Compliance Readiness | Covenda Solutions',
  description: 'AI-RBVM for ISO 27001, SOC 2, PCI DSS, HIPAA compliance. Auto-map remediation to controls, export audit evidence, close findings faster.',
};

export default function Compliance() {
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
              Audit & Compliance Readiness
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Auto-map remediation to ISO, SOC 2, PCI DSS, HIPAA controls. Export audit-ready evidence in minutes.
            </p>
            <Button href="/demo" size="lg">
              Book a Compliance Workshop
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
                <h3 className="font-bold text-gray-900 mb-3">Manual Evidence Collection</h3>
                <p className="text-gray-600">
                  Auditors ask for proof of vulnerability remediation. You spend 2 weeks pulling logs, screenshots, and ticket histories from 5 different tools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Control Mapping Chaos</h3>
                <p className="text-gray-600">
                  Your scanners find vulns. Your spreadsheet maps them to controls. Updates fall out of sync. Auditors find gaps.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Last-Minute Scramble</h3>
                <p className="text-gray-600">
                  Audit starts in 2 weeks. You realize 20 critical findings are still open. Sprint to close them, documentation incomplete, teams stressed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Recurring Findings</h3>
                <p className="text-gray-600">
                  Same issues flagged every audit cycle. No continuous monitoring. Reactive, not proactive.
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
              AI-RBVM with built-in compliance mappings. Evidence auto-collected. Audit-ready reports in 5 minutes.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'Auto Control Mapping',
                description: 'Lucid maps every CVE to relevant controls: ISO 27001, SOC 2 Type II, PCI DSS, HIPAA, NIST CSF, CIS. Updates automatically as new vulns are discovered.',
                icon: '🗺️',
              },
              {
                title: 'Continuous Evidence Collection',
                description: 'Every remediation tracked: who fixed it, when, how. Verification scans, approval chains, and rollback events all captured in audit-ready format.',
                icon: '📸',
              },
              {
                title: 'One-Click Evidence Export',
                description: 'Generate PDF/CSV reports for auditors: all remediations mapped to controls, timestamps, owners, and proof of verification. Covers 3-, 6-, or 12-month periods.',
                icon: '📄',
              },
              {
                title: 'Pre-Audit Readiness Check',
                description: 'Run compliance scans 2 weeks before audit. Lucid flags open findings that map to in-scope controls. Prioritize, fix, verify—before auditors arrive.',
                icon: '✅',
              },
              {
                title: 'Continuous Compliance',
                description: 'Real-time dashboard shows control coverage, open findings, and trend. No surprises at audit time. Prove continuous improvement to auditors.',
                icon: '📊',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-4xl mr-6">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Supported Frameworks */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supported Compliance Frameworks
            </h2>
            <p className="text-lg text-gray-300">
              Pre-built control mappings for the most common standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                framework: 'ISO 27001 / 27701',
                controls: 'A.12.6.1, A.18.2.3',
                description: 'Information security controls, vulnerability management, privacy',
              },
              {
                framework: 'SOC 2 Type II',
                controls: 'CC6.1, CC7.1',
                description: 'Security, availability, confidentiality trust service criteria',
              },
              {
                framework: 'PCI DSS v4.0',
                controls: '6.2, 6.3.3, 11.3',
                description: 'Secure systems, vulnerability scans, penetration testing',
              },
              {
                framework: 'HIPAA',
                controls: '§164.308(a)(1)',
                description: 'Risk analysis, risk management, technical safeguards',
              },
              {
                framework: 'NIST CSF / 800-53',
                controls: 'ID.RA, PR.IP, RS.MI',
                description: 'Risk assessment, protective technology, response improvements',
              },
              {
                framework: 'CIS Controls v8',
                controls: 'Control 7',
                description: 'Continuous vulnerability management',
              },
            ].map((item) => (
              <div key={item.framework} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="font-bold text-white mb-2">{item.framework}</h3>
                <div className="text-sm text-accent font-mono mb-2">{item.controls}</div>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Sample Audit Report */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sample Audit Evidence Report
            </h2>
            <p className="text-lg text-gray-600">
              What auditors receive from Lucid
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg border-2 border-gray-200">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Vulnerability Remediation Report</h3>
                <div className="text-sm text-gray-500">Period: Q4 2024</div>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Control: ISO 27001:2022 A.12.6.1 - Management of technical vulnerabilities
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-3 font-medium text-gray-700">CVE ID</th>
                    <th className="text-left p-3 font-medium text-gray-700">Asset</th>
                    <th className="text-left p-3 font-medium text-gray-700">Severity</th>
                    <th className="text-left p-3 font-medium text-gray-700">Closed Date</th>
                    <th className="text-left p-3 font-medium text-gray-700">Owner</th>
                    <th className="text-left p-3 font-medium text-gray-700">Verified</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-mono text-xs">CVE-2024-1234</td>
                    <td className="p-3">prod-api-01</td>
                    <td className="p-3"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Critical</span></td>
                    <td className="p-3">2024-10-15</td>
                    <td className="p-3">DevOps Team</td>
                    <td className="p-3"><span className="text-green-600">✓ Yes</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">CVE-2024-5678</td>
                    <td className="p-3">web-app-03</td>
                    <td className="p-3"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">High</span></td>
                    <td className="p-3">2024-10-22</td>
                    <td className="p-3">AppSec Team</td>
                    <td className="p-3"><span className="text-green-600">✓ Yes</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">CVE-2024-9012</td>
                    <td className="p-3">db-cluster-02</td>
                    <td className="p-3"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">High</span></td>
                    <td className="p-3">2024-11-03</td>
                    <td className="p-3">DBA Team</td>
                    <td className="p-3"><span className="text-green-600">✓ Yes</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">147</div>
                  <div className="text-sm text-gray-600">Vulns Remediated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-gray-600">Verified</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">5.2 days</div>
                  <div className="text-sm text-gray-600">Avg MTTR</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button href="/demo" variant="secondary" className="w-full">
                Download Sample Report (PDF)
              </Button>
            </div>
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
                title: 'SOC 2 Type II Certification',
                description: 'First-time certification or renewal. Lucid provides continuous evidence collection for CC6.1 (security), CC7.1 (change management).',
              },
              {
                title: 'ISO 27001 Audits',
                description: 'Annual surveillance or recertification. Map remediation to A.12.6 (vulnerability management), A.18.2 (compliance review).',
              },
              {
                title: 'PCI DSS Quarterly Scans',
                description: 'ASV scans every 90 days. Lucid tracks remediation of external-facing vulns (Requirement 11.3), exports evidence for QSA.',
              },
              {
                title: 'HIPAA Risk Assessments',
                description: 'Annual risk analysis (§164.308(a)(1)(ii)). Lucid documents technical safeguards, vulnerability remediation timelines.',
              },
              {
                title: 'Customer Security Questionnaires',
                description: 'Enterprise buyers ask: "How do you manage vulnerabilities?" Send them Lucid compliance reports. Close deals faster.',
              },
              {
                title: 'Cyber Insurance Renewals',
                description: 'Insurers want proof of vulnerability management. Lucid reports show MTTR, backlog trends, and control coverage.',
              },
            ].map((useCase) => (
              <div key={useCase.title} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FDE Compliance Workshop */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 rounded-lg border-2 border-accent">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                FDE Compliance Workshop
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                2-week engagement to prep for your next audit. FDEs will:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Map your vulns to target framework controls</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Close open findings before audit start date</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Generate evidence packages for auditors</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Train your team to maintain continuous compliance</span>
                </div>
              </div>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Book Compliance Workshop
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pass Your Next Audit with Confidence
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Run a compliance readiness check. Close findings. Export evidence. All in 2 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Book Workshop
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
                See Compliance Features
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
