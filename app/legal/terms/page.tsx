import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Covenda's terms of service governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-muted-foreground mb-8">Last updated: October 28, 2024</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Covenda's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Covenda provides security engineering and operations services, including but not limited to:
            </p>
            <ul>
              <li>Security posture assessments</li>
              <li>Forward-Deployed Security Engineering (FDE)</li>
              <li>Co-managed AI-SOC operations</li>
              <li>Detection engineering and automation</li>
            </ul>

            <h2>3. Service Agreements</h2>
            <p>
              Specific service engagements are governed by separate Statements of Work (SOW) or Master Services Agreements (MSA). In case of conflict, the SOW/MSA takes precedence over these general terms.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate information when engaging our services</li>
              <li>Maintain the confidentiality of account credentials</li>
              <li>Comply with applicable laws and regulations</li>
              <li>Not misuse our services or attempt unauthorized access</li>
              <li>Provide necessary access and cooperation for service delivery</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <h3>Covenda IP</h3>
            <p>
              All Covenda platform technology, methodologies, and pre-existing intellectual property remain our property.
            </p>

            <h3>Customer IP</h3>
            <p>
              You retain ownership of your data and systems. Custom detection rules and runbooks developed specifically for your environment may be owned by you, as specified in your SOW.
            </p>

            <h3>Deliverables</h3>
            <p>
              Ownership of specific deliverables (code, documentation, detections) will be defined in your service agreement.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of proprietary information shared during the engagement, as detailed in separate Non-Disclosure Agreements (NDA) or confidentiality provisions in service agreements.
            </p>

            <h2>7. Service Level Agreements (SLAs)</h2>
            <p>
              SLAs for response times, availability, and performance are defined in individual service agreements. General website availability is provided on a best-effort basis.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Covenda shall not be liable for indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.
            </p>

            <h2>9. Warranties and Disclaimers</h2>
            <p>
              We warrant that services will be performed with reasonable skill and care. However, we do not guarantee that our services will prevent all security incidents. Services are provided "as is" except as specifically warranted in service agreements.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              Each party agrees to indemnify the other against claims arising from their negligence, willful misconduct, or breach of these terms.
            </p>

            <h2>11. Term and Termination</h2>
            <p>
              These terms remain in effect while you use our services. Service engagements have specific terms outlined in SOWs. Either party may terminate for material breach with appropriate notice.
            </p>

            <h2>12. Modification of Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms. Active service engagements are governed by the terms in effect at the time of agreement.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of California, without regard to conflict of law principles.
            </p>

            <h2>14. Dispute Resolution</h2>
            <p>
              Disputes shall first be addressed through good-faith negotiation. If unresolved, disputes may be submitted to binding arbitration in San Francisco, California.
            </p>

            <h2>15. Entire Agreement</h2>
            <p>
              These terms, together with your service agreement and privacy policy, constitute the entire agreement between you and Covenda regarding our services.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about these terms? Contact us at:
            </p>
            <p>
              Email: legal@covenda.ai<br />
              Address: 123 Security Boulevard, Suite 400, San Francisco, CA 94105
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
