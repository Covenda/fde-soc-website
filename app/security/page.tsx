import { Metadata } from 'next';
import Button from '@/components/Button';
import Section from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Security | Covenda AI-SOC',
  description: 'Covenda security practices, certifications, and data protection. SOC 2 Type II, ISO 27001, encryption, access controls, and incident response.',
};

export default function Security() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Security at Covenda
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              We practice what we preach. SOC 2 Type II certified, ISO 27001 compliant, and built on zero-trust principles.
            </p>
            <Button href="mailto:security@covenda.ai">
              Contact Security Team
            </Button>
          </div>
        </Section>

        {/* Certifications */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border-2 border-accent text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-gray-600 mb-4">
                Security, availability, confidentiality. Annual audit by AICPA-approved auditor.
              </p>
              <a href="/soc2-report" className="text-accent hover:underline text-sm font-medium">
                Request Report
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-accent text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900 mb-2">ISO 27001:2022</h3>
              <p className="text-sm text-gray-600 mb-4">
                Information security management system. Certified by accredited body.
              </p>
              <a href="/iso-certificate" className="text-accent hover:underline text-sm font-medium">
                View Certificate
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-accent text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">GDPR & Privacy Shield</h3>
              <p className="text-sm text-gray-600 mb-4">
                EU data protection compliance. Data Processing Agreements available.
              </p>
              <a href="/dpa" className="text-accent hover:underline text-sm font-medium">
                Request DPA
              </a>
            </div>
          </div>
        </Section>

        {/* Infrastructure Security */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Infrastructure Security
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Hosted on AWS (SOC 2, ISO 27001, FedRAMP certified)</li>
                  <li>• Multi-region deployment with automated failover</li>
                  <li>• Infrastructure-as-Code (Terraform) with change control</li>
                  <li>• Network segmentation and VPC isolation</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Encryption</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data at rest: AES-256 encryption</li>
                  <li>• Data in transit: TLS 1.3</li>
                  <li>• Database encryption: AWS RDS encryption</li>
                  <li>• Key management: AWS KMS with rotation</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Access Controls</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-factor authentication (MFA) required for all users</li>
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Principle of least privilege</li>
                  <li>• Regular access reviews (quarterly)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Logging & Monitoring</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Centralized logging (AWS CloudWatch, Datadog)</li>
                  <li>• Real-time alerts for security events</li>
                  <li>• Audit logs retained for 7 years</li>
                  <li>• Automated intrusion detection (AWS GuardDuty)</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Data Protection */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data Protection & Privacy
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">What Data We Collect</h3>
              <p className="text-gray-600 mb-3">
                Covenda processes vulnerability scan data, asset metadata, and user authentication logs. We do not store:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Application source code</li>
                <li>• Customer business data (e.g., PII, payment info)</li>
                <li>• Credentials or secrets (use bring-your-own-key model)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Data Retention</h3>
              <p className="text-gray-600 mb-3">
                Vulnerability data and risk scores retained for:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Active customers: 13 months (for trend analysis)</li>
                <li>• Post-termination: 30 days (then deleted)</li>
                <li>• Audit logs: 7 years (compliance requirement)</li>
                <li>• Backups: encrypted, 90-day retention, then purged</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Data Residency</h3>
              <p className="text-gray-600 mb-3">
                Customer data stored in AWS regions of your choice:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• US: us-east-1 (N. Virginia), us-west-2 (Oregon)</li>
                <li>• EU: eu-west-1 (Ireland) - GDPR compliant</li>
                <li>• APAC: ap-southeast-1 (Singapore)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Customer Data Rights</h3>
              <p className="text-gray-600 mb-3">
                You retain full ownership and control. We provide:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Data export: JSON/CSV at any time</li>
                <li>• Data deletion: within 30 days of request</li>
                <li>• Data portability: move to another RBVM platform</li>
                <li>• Audit access: review what data we store about you</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Security Operations */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Operations
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Vulnerability Management</h3>
              <p className="text-gray-600">
                We scan our own infrastructure weekly using the same Lucid platform we sell. Critical vulns patched within 24 hours. High-severity within 7 days.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Penetration Testing</h3>
              <p className="text-gray-600">
                Annual penetration test by third-party firm (CREST-certified). Results shared with customers upon request. Findings remediated within 30 days.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Incident Response</h3>
              <p className="text-gray-600">
                24/7 security operations team. Incident response plan tested quarterly. Customer notification within 24 hours of confirmed breach. Root cause analysis within 7 days.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Security Training</h3>
              <p className="text-gray-600">
                All employees complete annual security awareness training. Engineers receive secure coding training. FDEs certified in security best practices.
              </p>
            </div>
          </div>
        </Section>

        {/* Subprocessors */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subprocessors & Vendors
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We carefully vet all third-party services. Full list of subprocessors available below.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="font-medium text-white mb-1">Infrastructure</div>
                <div className="text-sm text-gray-300">AWS (SOC 2, ISO 27001)</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="font-medium text-white mb-1">Authentication</div>
                <div className="text-sm text-gray-300">Auth0 (SOC 2, ISO 27001)</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="font-medium text-white mb-1">Monitoring</div>
                <div className="text-sm text-gray-300">Datadog (SOC 2, ISO 27001)</div>
              </div>
            </div>
            <div className="mt-6">
              <Button href="/subprocessors" variant="secondary">
                View Full List
              </Button>
            </div>
          </div>
        </Section>

        {/* Responsible Disclosure */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Responsible Disclosure
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                Found a security vulnerability in Covenda? We appreciate responsible disclosure. Please email:
              </p>
              <div className="text-center mb-4">
                <a href="mailto:security@covenda.ai" className="text-xl font-bold text-accent hover:underline">
                  security@covenda.ai
                </a>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Include: description of the issue, steps to reproduce, potential impact, and your contact info. We aim to respond within 24 hours.
              </p>
              <div className="bg-white p-4 rounded border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Our Commitment</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Acknowledge your report within 24 hours</li>
                  <li>• Provide status updates every 72 hours</li>
                  <li>• Remediate critical issues within 7 days</li>
                  <li>• Credit you in our security hall of fame (if desired)</li>
                  <li>• No legal action against good-faith researchers</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About Security?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our security team for SOC 2 reports, penetration test results, or security questionnaires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:security@covenda.ai" size="lg">
                Email Security Team
              </Button>
              <Button href="/privacy" variant="secondary" size="lg">
                Privacy Policy
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
