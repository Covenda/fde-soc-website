import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Responsible AI | Covenda",
  description: `Covenda's approach to ethical AI, model transparency, bias mitigation, and human oversight in Lucid ML threat modeling and risk scoring.`,
};

export default function ResponsibleAI() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Responsible AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Transparent, explainable, and human-supervised ML for security
              decisions
            </p>
          </div>
        </Section>

        {/* Principles */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Principles
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Explainability First",
                description:
                  "Every risk score comes with a breakdown: which factors drove it, what weights were applied, and why. No black boxes.",
                icon: "📖",
              },
              {
                title: "Human in the Loop",
                description:
                  "Lucid scores are recommendations, not commands. Security teams review, override, and refine. Humans make final decisions.",
                icon: "👥",
              },
              {
                title: "Bias Mitigation",
                description:
                  "Regular audits of training data and model outputs. Check for bias against asset types, teams, or regions. Adjust as needed.",
                icon: "⚖️",
              },
              {
                title: "Data Privacy",
                description:
                  "Lucid trains on aggregated, anonymized data. Customer-specific data never leaves your tenant. No cross-customer data leakage.",
                icon: "🔒",
              },
              {
                title: "Continuous Validation",
                description:
                  "Model performance tracked daily. If accuracy drops, we retrain or roll back. Customers notified of significant changes.",
                icon: "✓",
              },
              {
                title: "Opt-Out & Override",
                description: `Don't trust the model? Override any score, disable ML for specific assets, or revert to manual prioritization. Your choice.`,
                icon: "🛡️",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="text-4xl mb-3">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* How Lucid Works */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Lucid ML Works
            </h2>
            <p className="text-lg text-gray-600">
              Transparent architecture, documented training data, and validated
              outputs
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Model Architecture
              </h3>
              <p className="text-gray-600 mb-3">
                Lucid uses gradient-boosted decision trees (XGBoost) for risk
                scoring. Chosen for explainability: we can trace every
                prediction back to specific features.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Why not deep learning?</strong> Neural networks are
                harder to explain. For security decisions, transparency trumps
                marginal accuracy gains.
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Training Data</h3>
              <p className="text-gray-600 mb-3">Lucid trains on:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  • Public vulnerability databases (NVD, CISA KEV, ExploitDB)
                </li>
                <li>• Threat intelligence feeds (anonymized, aggregated)</li>
                <li>
                  • Historical remediation outcomes (opt-in from customers)
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Customer data:</strong> Used only within your tenant for
                fine-tuning. Never shared across customers. Deleted 30 days
                post-termination.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Model Validation</h3>
              <p className="text-gray-600 mb-3">
                Before deployment, we validate on held-out test data:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  • Precision: 92% (high-risk predictions are actually
                  high-risk)
                </li>
                <li>• Recall: 88% (catches most high-risk vulns)</li>
                <li>• F1 score: 90% (balance of precision and recall)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Ongoing monitoring:</strong> Track model performance
                weekly. Alert if metrics degrade &gt;5%.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Explainability Reports
              </h3>
              <p className="text-gray-600 mb-3">
                Every risk score includes a breakdown:
              </p>
              <pre className="bg-white p-4 rounded border border-gray-300 text-xs font-mono overflow-x-auto">
                {`Risk Score: 8.7 / 10 (Critical)

Contributing Factors:
• CVSS Base Score (9.8):         +3.2
• Public Exploit Available:      +2.1
• Asset Internet-Facing:         +1.8
• Asset Criticality (Payment):   +1.6
• No Compensating Controls:      +0.5
• Patch Available (30 days):     -0.5

Confidence: 94%
Recommended Action: Patch within 24h`}
              </pre>
            </div>
          </div>
        </Section>

        {/* Bias Mitigation */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bias Mitigation
            </h2>
            <p className="text-lg text-gray-300">
              We actively monitor and correct for bias in Lucid's outputs
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-3">Asset Type Bias</h3>
              <p className="text-sm text-gray-300">
                Check if Lucid over-penalizes certain asset types (e.g., legacy
                systems). Adjust weights if unfair.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-3">Team Bias</h3>
              <p className="text-sm text-gray-300">
                Ensure no team is systematically assigned more/less work than
                warranted. Audit assignments quarterly.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-3">Geographic Bias</h3>
              <p className="text-sm text-gray-300">
                Verify that assets in different regions (e.g., EMEA vs. APAC)
                aren't scored differently without cause.
              </p>
            </div>
          </div>
        </Section>

        {/* Human Oversight */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Human Oversight & Control
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Override Any Score
              </h3>
              <p className="text-gray-600">
                Security teams can override Lucid's risk score for any
                vulnerability. Reason logged for audit trail. Override is
                respected in all downstream workflows.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Custom Weight Adjustments
              </h3>
              <p className="text-gray-600">
                Don't agree with how Lucid weighs factors? Tune the model:
                increase/decrease weight for exploit availability, asset
                criticality, etc. Changes take effect immediately.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Disable ML Entirely
              </h3>
              <p className="text-gray-600">
                Prefer manual prioritization? Disable Lucid ML and fall back to
                CVSS scores or custom logic. Re-enable anytime. No lock-in.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Audit Model Decisions
              </h3>
              <p className="text-gray-600">
                Every score decision logged: input features, model version,
                output, and timestamp. Export for compliance or internal review.
              </p>
            </div>
          </div>
        </Section>

        {/* Governance */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Governance
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Internal Review Board
              </h3>
              <p className="text-gray-600">
                Covenda has an AI Ethics Committee: CTO, CISO, legal, and
                external advisor. Meets quarterly to review model performance,
                bias audits, and customer feedback.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">External Audits</h3>
              <p className="text-gray-600">
                Annual third-party audit of Lucid ML: training data, model
                architecture, bias checks, and explainability. Report shared
                with customers upon request.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Customer Feedback Loop
              </h3>
              <p className="text-gray-600">
                If Lucid scores feel wrong, tell us. We review flagged cases
                monthly. If systematic issue found, we retrain and deploy fix
                within 30 days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                We track emerging AI regulations (EU AI Act, NIST AI Risk
                Framework). Lucid is designed to comply with "high-risk AI
                system" requirements: transparency, human oversight, and bias
                monitoring.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About Our AI?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team for model documentation, audit reports, or bias
              assessments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:ai@covenda.ai" size="lg">
                Email AI Team
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
                See Lucid in Action
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
