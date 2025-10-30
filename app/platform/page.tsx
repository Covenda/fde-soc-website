import { Metadata } from 'next';
import Button from '@/components/Button';
import Section from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Platform | Covenda AI-SOC',
  description: 'Lucid ML threat modeling, AI-RBVM prioritization, and automated vulnerability remediation. Ingest, model, score, assign, and verify with full explainability.',
};

export default function Platform() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <Section className="pt-20 md:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Lucid ML Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              AI-RBVM that fuses threat modeling, contextual asset data, and ML-driven prioritization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Book a Demo
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </Section>

        {/* Lucid Threat Modeling */}
        <Section background="gray">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lucid Threat Modeling
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Lucid generates TTP-aware threat intelligence by analyzing your systems, assets, and attack surfaces. It understands tactics, techniques, and procedures to model real-world threat scenarios.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Context-Aware Analysis</h3>
                  <p className="text-gray-600">Ingests CMDB, cloud metadata, app topology, and network maps to build a complete picture</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">TTP Mapping</h3>
                  <p className="text-gray-600">Maps vulnerabilities to MITRE ATT&CK tactics and techniques for realistic threat assessment</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Likelihood Scoring</h3>
                  <p className="text-gray-600">Combines exploitability, exposure, and active threat intelligence to estimate attack probability</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                [Threat Model Diagram Placeholder]
              </div>
            </div>
          </div>
        </Section>

        {/* Data Sources & Integrations */}
        <Section id="integrations">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data Sources & Integrations
            </h2>
            <p className="text-lg text-gray-600">
              Connect your existing security stack. Lucid ingests from all major sources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Cloud Platforms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AWS (Inspector, GuardDuty, Config)</li>
                <li>• Azure (Defender, Security Center)</li>
                <li>• GCP (Security Command Center)</li>
                <li>• Kubernetes & container registries</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Scanners & Agents</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tenable (Nessus, IO)</li>
                <li>• Qualys (VMDR)</li>
                <li>• Rapid7 (InsightVM)</li>
                <li>• CrowdStrike (Spotlight)</li>
                <li>• Wiz, Orca, Prisma Cloud</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Workflow & CMDB</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Jira (Cloud & Data Center)</li>
                <li>• ServiceNow (ITSM, SecOps)</li>
                <li>• Slack & Microsoft Teams</li>
                <li>• Okta, Azure AD</li>
                <li>• Custom APIs & webhooks</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button href="/docs/integrations" variant="secondary">
              View All Integrations
            </Button>
          </div>
        </Section>

        {/* How It Works */}
        <Section id="how-it-works" background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works: 5-Step Pipeline
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                step: 1,
                title: 'Ingest',
                description: 'Lucid pulls vulnerability data, asset metadata, and threat intel from all connected sources. Normalized schemas ensure consistency across scanners.',
                features: ['Multi-source aggregation', 'Real-time sync', 'Deduplication & enrichment'],
              },
              {
                step: 2,
                title: 'Threat-Model',
                description: 'Lucid ML analyzes your environment to generate threat models. It maps assets, identifies attack paths, and evaluates exposure based on your unique topology.',
                features: ['TTP-aware modeling', 'Attack surface analysis', 'Contextual asset tagging'],
              },
              {
                step: 3,
                title: 'Score',
                description: 'Each vulnerability receives a risk score based on impact × likelihood. Lucid weighs exploitability, asset criticality, compensating controls, and active threats.',
                features: ['ML-driven scoring', 'Explainability reports', 'Custom weight overrides'],
              },
              {
                step: 4,
                title: 'Assign',
                description: 'Lucid auto-creates tickets in Jira or ServiceNow, assigns owners based on RACI, sets SLAs, and triggers playbooks for common remediation patterns.',
                features: ['Auto-assignment', 'SLA tracking', 'Playbook automation'],
              },
              {
                step: 5,
                title: 'Verify',
                description: 'Post-remediation, Lucid verifies fixes via rescans, tracks evidence for audits, and flags any regressions. Rollback guardrails protect production.',
                features: ['Automated verification', 'Audit-ready evidence', 'Rollback protection'],
              },
            ].map((item) => (
              <div key={item.step} className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-accent text-white font-bold w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="aspect-video bg-gray-100 rounded flex items-center justify-center text-gray-400">
                    [Step {item.step} Screenshot]
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Prioritization Logic */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prioritization Logic & Explainability
            </h2>
            <p className="text-lg text-gray-600">
              Every risk score comes with full transparency. No black boxes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg border-2 border-accent max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Score Formula</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
              <code className="text-sm">
                Risk Score = (Impact × Likelihood × Exploitability) − Compensating Controls + Threat Intelligence Modifier
              </code>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Inputs & Signals</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Asset criticality (business context)</li>
                  <li>• CVSS base score & vector</li>
                  <li>• Public exploit availability (PoC, ExploitDB)</li>
                  <li>• Active campaigns (threat intel feeds)</li>
                  <li>• Exposure (internet-facing, segmentation)</li>
                  <li>• Patch availability & age</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Explainability</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Each score includes a breakdown showing:
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Weight per factor</li>
                  <li>• Override rules applied</li>
                  <li>• Confidence interval</li>
                  <li>• Human review notes</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Playbooks & Automation */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Playbooks & Automation
            </h2>
            <p className="text-lg text-gray-600">
              Pre-built workflows for common remediation patterns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Critical Patch',
                description: 'Auto-assign to owner, set 24h SLA, notify on Slack, create change ticket',
              },
              {
                title: 'Config Drift',
                description: 'Compare current vs baseline, flag delta, suggest IaC fix, verify post-apply',
              },
              {
                title: 'Audit Prep',
                description: 'Gather evidence for all remediated CVEs in scope, export to PDF/CSV',
              },
              {
                title: 'False Positive',
                description: 'Mark as FP, require approval, document rationale, exclude from scoring',
              },
              {
                title: 'Escalation',
                description: 'SLA breach → escalate to manager, page on-call, create incident ticket',
              },
              {
                title: 'Custom',
                description: 'Define your own with YAML or visual builder, trigger on conditions',
              },
            ].map((playbook) => (
              <div key={playbook.title} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{playbook.title}</h3>
                <p className="text-sm text-gray-600">{playbook.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Dashboards */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dashboards & Reporting
            </h2>
            <p className="text-lg text-gray-600">
              Real-time visibility for operators and executives alike
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Operator View</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Risk backlog (sorted by priority)</li>
                <li>• Asset criticality map</li>
                <li>• SLA tracker & burn-down</li>
                <li>• Recent remediations & trend</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Executive View</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Risk trend over time</li>
                <li>• Mean time to remediate (MTTR)</li>
                <li>• Compliance posture (ISO, SOC 2, PCI)</li>
                <li>• Top 10 critical exposures</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <div className="aspect-video bg-gray-100 rounded flex items-center justify-center text-gray-400">
              [Dashboard Screenshot Placeholder]
            </div>
          </div>
        </Section>

        {/* API Docs */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Developer-Friendly API
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              REST API, GraphQL, and webhooks for custom integrations
            </p>
            <Button href="/docs/api" variant="secondary" size="lg">
              View API Documentation
            </Button>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See the Platform in Action
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a 30-min demo or run a 30-day pilot with your data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Book a Demo
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Request Pilot
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
