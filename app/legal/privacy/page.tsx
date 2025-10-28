import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Covenda's privacy policy outlines how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-muted-foreground mb-8">Last updated: October 28, 2024</p>

            <h2>Introduction</h2>
            <p>
              Covenda, Inc. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>Contact information (name, email, phone, company)</li>
              <li>Account credentials and profile information</li>
              <li>Communications with us (emails, support tickets, contact forms)</li>
              <li>Payment and billing information</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li>Log data (IP address, browser type, pages visited)</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our security services</li>
              <li>Communicate with you about our services</li>
              <li>Process transactions and send invoices</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze usage and improve our website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who assist our operations (cloud hosting, analytics, payment processing)</li>
              <li>Professional advisors (lawyers, auditors)</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
            <p>We do not sell your personal data to third parties.</p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
            </p>

            <h2>International Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries outside your jurisdiction. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal data from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of significant changes by posting the updated policy on our website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or wish to exercise your rights, contact us at:
            </p>
            <p>
              Email: privacy@covenda.ai<br />
              Address: 123 Security Boulevard, Suite 400, San Francisco, CA 94105
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
