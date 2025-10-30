import { Metadata } from 'next';
import Section from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Subprocessors | Covenda',
  description: 'List of Covenda subprocessors and third-party service providers. All vendors vetted for security and GDPR compliance.',
};

export default function Subprocessors() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Subprocessors
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              List of third-party service providers that process customer data on behalf of Covenda. All subprocessors are vetted for security and GDPR compliance.
            </p>
            <p className="text-sm text-gray-600 mb-8">
              Last updated: October 30, 2024
            </p>
          </div>
        </Section>

        <Section background="gray">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left p-4 font-bold text-gray-900">Subprocessor</th>
                      <th className="text-left p-4 font-bold text-gray-900">Service</th>
                      <th className="text-left p-4 font-bold text-gray-900">Data Location</th>
                      <th className="text-left p-4 font-bold text-gray-900">Certifications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">Amazon Web Services (AWS)</div>
                        <div className="text-sm text-gray-600">aws.amazon.com</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        Cloud infrastructure hosting, database, storage
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        US (us-east-1, us-west-2)<br />
                        EU (eu-west-1)<br />
                        APAC (ap-southeast-1)
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        SOC 2, ISO 27001, FedRAMP, GDPR-compliant
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">Auth0 (Okta)</div>
                        <div className="text-sm text-gray-600">auth0.com</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        Authentication, identity management, MFA
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        US, EU (customer choice)
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        SOC 2 Type II, ISO 27001, ISO 27018, GDPR-compliant
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">Datadog</div>
                        <div className="text-sm text-gray-600">datadoghq.com</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        Application monitoring, logging, security observability
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        US, EU (depending on tenant)
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        SOC 2 Type II, ISO 27001, GDPR-compliant
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">SendGrid (Twilio)</div>
                        <div className="text-sm text-gray-600">sendgrid.com</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        Transactional email (alerts, notifications)
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        US
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        SOC 2 Type II, ISO 27001, GDPR-compliant
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">Stripe</div>
                        <div className="text-sm text-gray-600">stripe.com</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        Payment processing (credit card billing)
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        US, EU
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        PCI DSS Level 1, SOC 2, ISO 27001, GDPR-compliant
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">Intercom</div>
                        <div className="text-sm text-gray-600">intercom.com</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        Customer support chat, help desk
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        US, EU
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        SOC 2 Type II, ISO 27001, GDPR-compliant
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">Google Analytics</div>
                        <div className="text-sm text-gray-600">analytics.google.com</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        Website analytics (anonymized)
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        US
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        ISO 27001, GDPR-compliant (with anonymization)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">🔔 Notification of Changes</h3>
              <p className="text-sm text-gray-600">
                We will notify customers via email at least 30 days before adding or replacing a subprocessor. If you object to a new subprocessor, you may terminate your subscription without penalty within the notice period.
              </p>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Subprocessor Vetting Process</h3>
              <p className="text-sm text-gray-600 mb-3">
                Before engaging a subprocessor, we verify:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Security certifications (SOC 2, ISO 27001, or equivalent)</li>
                <li>• GDPR compliance and DPA in place</li>
                <li>• Encryption at rest and in transit</li>
                <li>• Incident response and breach notification procedures</li>
                <li>• Data residency options (especially for EU customers)</li>
              </ul>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Data Processed by Subprocessors</h3>
              <p className="text-sm text-gray-600 mb-3">
                Subprocessors may process the following categories of data:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <strong>Account Data:</strong> Email, name, company name (Auth0, Intercom, Stripe)</li>
                <li>• <strong>Technical Data:</strong> IP addresses, user agent, session logs (AWS, Datadog, Google Analytics)</li>
                <li>• <strong>Vulnerability Data:</strong> Scan results, asset metadata, risk scores (AWS only - stored in your tenant)</li>
                <li>• <strong>Communication:</strong> Support tickets, chat transcripts (Intercom)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Note:</strong> Customer vulnerability data is stored exclusively in AWS within your chosen region. No other subprocessor has access to your vulnerability or risk scoring data.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About Subprocessors?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our legal team for subprocessor agreements or to discuss data residency options
            </p>
            <a href="mailto:legal@covenda.ai" className="inline-block bg-accent text-white font-medium px-8 py-4 rounded-md hover:bg-accent-hover transition-colors text-lg">
              Email Legal Team
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
