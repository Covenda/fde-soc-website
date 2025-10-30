import { Metadata } from 'next';
import Section from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Covenda',
  description: 'Covenda Terms of Service. Platform usage terms, acceptable use policy, and service-level agreements.',
};

export default function Terms() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: October 30, 2024
            </p>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using Covenda's AI-RBVM platform and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use our Services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                Covenda provides an AI-driven risk-based vulnerability management platform ("Lucid ML") and Forward-Deployed Engineer ("FDE") services to help organizations prioritize and remediate security vulnerabilities.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Account Registration</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>You must provide accurate, complete registration information</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must be at least 18 years old and authorized to bind your organization</li>
                <li>One account per organization; sharing accounts prohibited</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-600 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Use the Services for any illegal purpose or in violation of regulations</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Reverse engineer, decompile, or extract source code from Lucid ML</li>
                <li>Upload malware, viruses, or malicious code</li>
                <li>Use the Services to attack, scan, or test third-party systems without authorization</li>
                <li>Interfere with or disrupt the Services' operation</li>
                <li>Resell or sublicense the Services without written permission</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Customer Data</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5.1 Ownership</h3>
              <p className="text-gray-600 mb-4">
                You retain all ownership rights to your data. Covenda processes data solely to provide the Services. We claim no ownership over your vulnerability data, asset metadata, or risk assessments.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5.2 License to Process</h3>
              <p className="text-gray-600 mb-4">
                You grant Covenda a limited license to process your data to: (1) operate Lucid ML, (2) generate risk scores, (3) provide FDE services, and (4) improve our ML models using aggregated, anonymized data.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5.3 Data Deletion</h3>
              <p className="text-gray-600 mb-4">
                Upon account termination, we will delete your data within 30 days, except where retention is required by law or audit obligations (7 years for audit logs).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Service Level Agreement (SLA)</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">6.1 Uptime Commitment</h3>
              <p className="text-gray-600 mb-4">
                We target 99.9% uptime (excluding scheduled maintenance). If we fail to meet this, you may be eligible for service credits as outlined in your subscription agreement.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">6.2 Support Response Times</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><strong>Critical Issues:</strong> 1-hour response (24/7)</li>
                <li><strong>High Priority:</strong> 4-hour response (business hours)</li>
                <li><strong>Normal Priority:</strong> 24-hour response (business hours)</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">6.3 Scheduled Maintenance</h3>
              <p className="text-gray-600 mb-4">
                We will provide 7 days' notice for scheduled maintenance. Emergency maintenance may be performed with reduced notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Fees and Payment</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Fees are specified in your subscription agreement</li>
                <li>Payment due net 30 days from invoice date</li>
                <li>Late payments subject to 1.5% monthly interest</li>
                <li>We may suspend Services for non-payment after 15 days' notice</li>
                <li>Refunds for annual subscriptions prorated if cancelled mid-term</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                Covenda retains all rights to the Lucid ML platform, including algorithms, models, and documentation. Our trademarks, logos, and branding are our property. You may not use them without written permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">9.1 Limited Warranty</h3>
              <p className="text-gray-600 mb-4">
                We warrant that the Services will perform substantially as described in our documentation. If not, we will use commercially reasonable efforts to correct the issue.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">9.2 Disclaimer</h3>
              <p className="text-gray-600 mb-4">
                EXCEPT AS EXPRESSLY STATED, THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE ERROR-FREE OR UNINTERRUPTED. LUCID ML RISK SCORES ARE RECOMMENDATIONS, NOT GUARANTEES. YOU REMAIN RESPONSIBLE FOR SECURITY DECISIONS.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COVENDA'S TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE FEES YOU PAID IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
              <p className="text-gray-600 mb-4">
                WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR SECURITY BREACHES CAUSED BY YOUR FAILURE TO ACT ON LUCID'S RECOMMENDATIONS.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold harmless Covenda from any claims arising from: (1) your use of the Services, (2) your violation of these Terms, (3) your violation of third-party rights, or (4) security incidents caused by your negligence.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Termination</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">12.1 By You</h3>
              <p className="text-gray-600 mb-4">
                You may terminate your subscription with 30 days' written notice. Annual subscriptions are non-refundable except as prorated for remaining term.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">12.2 By Us</h3>
              <p className="text-gray-600 mb-4">
                We may terminate immediately if you: (1) breach these Terms, (2) fail to pay after 30 days' notice, (3) engage in fraudulent or illegal activity, or (4) pose a security risk to our platform.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">12.3 Effect of Termination</h3>
              <p className="text-gray-600 mb-4">
                Upon termination, your access to the Services ceases immediately. We will provide a 30-day window to export your data. After 30 days, data is permanently deleted.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Confidentiality</h2>
              <p className="text-gray-600 mb-4">
                Both parties agree to keep confidential information (including pricing, technical details, and business strategies) confidential for 3 years post-termination, except as required by law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Governing Law and Disputes</h2>
              <p className="text-gray-600 mb-4">
                These Terms are governed by the laws of Delaware, USA, without regard to conflict-of-law principles. Any disputes shall be resolved through binding arbitration under AAA rules, except either party may seek injunctive relief in court.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We may modify these Terms with 30 days' notice. Material changes affecting pricing or data processing require explicit consent. Continued use after notice period constitutes acceptance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Miscellaneous</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><strong>Severability:</strong> If any provision is unenforceable, the rest remains in effect</li>
                <li><strong>Waiver:</strong> Failure to enforce a right does not waive it</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our consent</li>
                <li><strong>Entire Agreement:</strong> These Terms, plus your subscription agreement and DPA, constitute the complete agreement</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-2"><strong>Legal:</strong> <a href="mailto:legal@covenda.ai" className="text-accent hover:underline">legal@covenda.ai</a></p>
                <p className="text-gray-700 mb-2"><strong>Support:</strong> <a href="mailto:support@covenda.ai" className="text-accent hover:underline">support@covenda.ai</a></p>
                <p className="text-gray-700"><strong>Address:</strong> Covenda AI, Inc. (address on file)</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
