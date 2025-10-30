import { Metadata } from "next";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Covenda",
  description:
    "Covenda privacy policy. How we collect, use, and protect your data. GDPR compliant.",
};

export default function Privacy() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">Last updated: October 30, 2024</p>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                Covenda AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our AI-RBVM platform and services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                2.1 Account Information
              </h3>
              <p className="text-gray-600 mb-4">
                When you create an account, we collect: name, email address,
                company name, job title, and password.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                2.2 Vulnerability Data
              </h3>
              <p className="text-gray-600 mb-4">
                We process vulnerability scan data, asset metadata, and risk
                scores from your connected scanners and cloud platforms. We do
                not collect or store application source code, customer business
                data (e.g., PII, payment information), or credentials.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                2.3 Usage Data
              </h3>
              <p className="text-gray-600 mb-4">
                We collect information about how you interact with our platform:
                login times, features used, pages viewed, and actions taken.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                2.4 Technical Data
              </h3>
              <p className="text-gray-600 mb-4">
                IP address, browser type, device information, and operating
                system for security and troubleshooting purposes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Provide and maintain the Lucid ML platform</li>
                <li>Process vulnerability data and generate risk scores</li>
                <li>Authenticate and manage your account</li>
                <li>Send service notifications and security alerts</li>
                <li>
                  Improve our ML models (using aggregated, anonymized data only)
                </li>
                <li>Comply with legal obligations</li>
                <li>Detect and prevent fraud or security incidents</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-600 mb-4">
                We do not sell your data. We share data only in these limited
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>
                  <strong>Service Providers:</strong> AWS (infrastructure),
                  Auth0 (authentication), Datadog (monitoring) - all under data
                  processing agreements
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If required by law, court
                  order, or regulatory authority
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale (with notice to customers)
                </li>
                <li>
                  <strong>With Your Consent:</strong> Any other sharing requires
                  explicit opt-in
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. Data Retention
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>
                  <strong>Active Accounts:</strong> Vulnerability data retained
                  for 13 months (for trend analysis)
                </li>
                <li>
                  <strong>Closed Accounts:</strong> Data deleted within 30 days
                  of account termination
                </li>
                <li>
                  <strong>Audit Logs:</strong> Retained for 7 years to comply
                  with SOC 2 requirements
                </li>
                <li>
                  <strong>Backups:</strong> Encrypted, 90-day retention, then
                  automatically purged
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Data Security
              </h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>AES-256 encryption at rest</li>
                <li>TLS 1.3 encryption in transit</li>
                <li>Multi-factor authentication (MFA) for all accounts</li>
                <li>Regular security audits and penetration testing</li>
                <li>SOC 2 Type II and ISO 27001 certified infrastructure</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Your Rights (GDPR/CCPA)
              </h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>
                  <strong>Access:</strong> Request a copy of your data
                </li>
                <li>
                  <strong>Correction:</strong> Update inaccurate or incomplete
                  data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your data
                  (right to be forgotten)
                </li>
                <li>
                  <strong>Portability:</strong> Export your data in a
                  machine-readable format
                </li>
                <li>
                  <strong>Opt-Out:</strong> Withdraw consent for data processing
                </li>
                <li>
                  <strong>Restrict Processing:</strong> Limit how we use your
                  data
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                To exercise these rights, email:{" "}
                <a
                  href="mailto:privacy@covenda.ai"
                  className="text-accent hover:underline"
                >
                  privacy@covenda.ai
                </a>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-gray-600 mb-4">
                We store data in AWS regions based on your preference (US, EU,
                or APAC). EU customers&apos; data stays in EU-west-1 (Ireland)
                and is subject to GDPR. Cross-border transfers use Standard
                Contractual Clauses (SCCs).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Cookies and Tracking
              </h2>
              <p className="text-gray-600 mb-4">
                We use essential cookies for authentication and session
                management. Optional analytics cookies (Google Analytics) can be
                disabled via your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                10. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 mb-4">
                Our services are not directed to individuals under 16. We do not
                knowingly collect data from children. If you believe we have
                inadvertently collected such data, contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy periodically. Material changes
                will be notified via email 30 days before taking effect.
                Continued use of our services after changes constitutes
                acceptance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                For privacy-related questions or to exercise your rights:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@covenda.ai"
                    className="text-accent hover:underline"
                  >
                    privacy@covenda.ai
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Data Protection Officer:</strong> dpo@covenda.ai
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> Within 30 days of request
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
