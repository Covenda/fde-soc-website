import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Processing Agreement | Covenda",
  description:
    "Covenda Data Processing Agreement (DPA) for GDPR compliance. Standard Contractual Clauses available.",
};

export default function DPA() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Data Processing Agreement
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              GDPR-compliant DPA for EU customers. Standard Contractual Clauses
              (SCCs) included.
            </p>
            <Button
              href="mailto:legal@covenda.ai?subject=DPA Request"
              size="lg"
            >
              Request Signed DPA
            </Button>
          </div>
        </Section>

        <Section background="gray">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-600 mb-6">
                Our Data Processing Agreement (DPA) governs how Covenda
                processes personal data on behalf of customers. It aligns with
                GDPR Article 28 requirements and includes Standard Contractual
                Clauses (SCCs) for cross-border data transfers.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Key Provisions
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    1. Roles & Responsibilities
                  </h4>
                  <p className="text-sm text-gray-600">
                    <strong>You (Data Controller):</strong> Determine purposes
                    and means of processing. Responsible for lawful basis under
                    GDPR.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Covenda (Data Processor):</strong> Process data
                    solely per your instructions. Do not use data for own
                    purposes (except aggregated, anonymized analytics).
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    2. Scope of Processing
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Data Categories:</strong> Vulnerability scan data,
                    asset metadata, user authentication logs, risk scores.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Data Subjects:</strong> Your employees, contractors,
                    and system administrators.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Processing Activities:</strong> Ingestion, threat
                    modeling, risk scoring, dashboarding, evidence export.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    3. Security Measures
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Encryption: AES-256 at rest, TLS 1.3 in transit</li>
                    <li>• Access controls: MFA, RBAC, least privilege</li>
                    <li>
                      • Monitoring: 24/7 SOC, intrusion detection, audit logging
                    </li>
                    <li>• Certifications: SOC 2 Type II, ISO 27001</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    4. Sub-Processors
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    We use the following sub-processors (all GDPR-compliant):
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• AWS (infrastructure hosting)</li>
                    <li>• Auth0 (authentication)</li>
                    <li>• Datadog (monitoring)</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">
                    <a
                      href="/subprocessors"
                      className="text-accent hover:underline"
                    >
                      View full list →
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    5. Data Subject Rights
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    We assist you in fulfilling data subject requests:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                      • <strong>Access:</strong> Export data within 5 business
                      days
                    </li>
                    <li>
                      • <strong>Rectification:</strong> Update inaccurate data
                      within 2 business days
                    </li>
                    <li>
                      • <strong>Erasure:</strong> Delete data within 30 days
                      (except audit logs)
                    </li>
                    <li>
                      • <strong>Portability:</strong> Provide data in JSON/CSV
                      format
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    6. Data Breach Notification
                  </h4>
                  <p className="text-sm text-gray-600">
                    If we discover a breach affecting your data, we will notify
                    you within 24 hours via email and provide: (1) nature of
                    breach, (2) affected data categories, (3) likely
                    consequences, (4) mitigation steps, and (5) contact info for
                    questions.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    7. Audits & Certifications
                  </h4>
                  <p className="text-sm text-gray-600">
                    You may audit our processing activities once per year with
                    30 days&apos; notice. We will provide SOC 2 Type II reports
                    and ISO 27001 certificates upon request.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    8. Data Transfers
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>EU Customers:</strong> Data stored in EU-west-1
                    (Ireland). Standard Contractual Clauses (SCCs) apply if data
                    leaves the EU.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Adequacy Decisions:</strong> We rely on EU
                    Commission adequacy decisions where applicable (e.g., UK,
                    Switzerland).
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    9. Data Retention & Deletion
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                      • <strong>Active:</strong> 13 months for trend analysis
                    </li>
                    <li>
                      • <strong>Post-Termination:</strong> 30 days, then deleted
                    </li>
                    <li>
                      • <strong>Audit Logs:</strong> 7 years (legal requirement)
                    </li>
                    <li>
                      • <strong>Backups:</strong> 90 days, encrypted, then
                      purged
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">
                    10. Term & Termination
                  </h4>
                  <p className="text-sm text-gray-600">
                    This DPA is effective upon your acceptance and remains in
                    force for the duration of your subscription. Upon
                    termination, we will delete or return your data per Section
                    9.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request a Signed DPA
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Email our legal team to receive a countersigned DPA, including
              Standard Contractual Clauses if required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="mailto:legal@covenda.ai?subject=DPA Request"
                size="lg"
              >
                Email Legal Team
              </Button>
              <Button href="/subprocessors" variant="secondary" size="lg">
                View Subprocessors
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
