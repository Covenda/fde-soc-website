import Button from '@/components/Button';
import Section from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <Section className="pt-20 md:pt-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              AI-First Security Operations
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 text-balance">
              FDEs + Lucid ML prioritize what matters, prove it with numbers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Book a Demo
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
                See the Platform
              </Button>
            </div>
          </div>
        </Section>

        {/* Social Proof */}
        <Section background="gray">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600 mb-6">Trusted by forward-thinking security teams</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* Placeholder for customer logos */}
              <div className="h-12 bg-gray-300 rounded"></div>
              <div className="h-12 bg-gray-300 rounded"></div>
              <div className="h-12 bg-gray-300 rounded"></div>
              <div className="h-12 bg-gray-300 rounded"></div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">60-80%</div>
                <p className="text-gray-600">Backlog reduction on critical paths</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">30-50%</div>
                <p className="text-gray-600">MTTR reduction for exploitable vulns</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">30 days</div>
                <p className="text-gray-600">Board-ready risk trends</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Why AI-RBVM */}
        <Section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why AI-RBVM vs Legacy VM
            </h2>
            <p className="text-lg text-gray-600">
              Legacy VM finds everything and fixes nothing. AI-RBVM fuses asset context, live threat intel, and exploitability to rank the 10% of work that removes 90% of risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Legacy VM */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legacy VM</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Endless backlog, no prioritization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">CVSS scores ignore business context</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Manual triage, slow remediation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No audit trail or explainability</span>
                </li>
              </ul>
            </div>

            {/* AI-RBVM */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg border-2 border-accent">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-RBVM (Covenda)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">TTP-aware threat modeling via Lucid ML</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Contextual scoring: impact × likelihood</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Auto-assign, SLA tracking, playbooks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Audit-ready evidence & explainability</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Lucid Pipeline */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Lucid Pipeline
            </h2>
            <p className="text-lg text-gray-600">
              Five-stage ML-driven process that converts noise into prioritized action
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                title: 'Ingest',
                description: 'Cloud, app, agent, scanner, CMDB, ticketing',
              },
              {
                title: 'Threat-model',
                description: 'Lucid generates TTP-aware intel from models of your systems',
              },
              {
                title: 'Score',
                description: 'ML + risk factors (impact × likelihood) with explainability',
              },
              {
                title: 'Assign',
                description: 'Owners, SLAs, automation into Jira/ServiceNow',
              },
              {
                title: 'Verify',
                description: 'Evidence, rollback guardrails, audit-ready',
              },
            ].map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-white p-6 rounded-lg border border-gray-200 h-full">
                  <div className="text-accent font-bold mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* FDE Model */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Forward-Deployed Engineers
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                FDEs embed with your team to stand up RBVM, run playbooks, and land outcomes in weeks—not quarters.
              </p>
              <div className="space-y-4">
                {[
                  { week: 'Week 1', task: 'Assess: map assets, data sources, workflow' },
                  { week: 'Week 2', task: 'Stand-up: integrate Lucid, configure scoring' },
                  { week: 'Week 3-4', task: 'Operate: run playbooks, assign work, train team' },
                  { week: 'Ongoing', task: 'Refine: tune weights, add automation, prove ROI' },
                ].map((item) => (
                  <div key={item.week} className="flex items-start">
                    <div className="bg-accent text-white font-bold px-3 py-1 rounded mr-4 flex-shrink-0 text-sm">
                      {item.week}
                    </div>
                    <p className="text-gray-700 pt-1">{item.task}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/services" size="lg">
                  Learn About FDE Services
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 border border-gray-200">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                [FDE Engagement Diagram Placeholder]
              </div>
            </div>
          </div>
        </Section>

        {/* Outcomes */}
        <Section background="dark">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Outcomes That Matter
            </h2>
            <p className="text-lg text-gray-300">
              Real metrics, proven with customers in production
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '↓ 47%',
                label: 'Critical exposure in 60 days',
                description: 'Measured across cloud & app surfaces',
              },
              {
                metric: '3-5x',
                label: 'Faster triage',
                description: 'Lucid scores replace manual review',
              },
              {
                metric: '100%',
                label: 'Audit evidence',
                description: 'SOC 2, ISO, PCI compliance mappings',
              },
            ].map((outcome) => (
              <div key={outcome.label} className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">{outcome.metric}</div>
                <h3 className="text-xl font-bold mb-2">{outcome.label}</h3>
                <p className="text-gray-300">{outcome.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/customers" variant="secondary" size="lg">
              Read Customer Stories
            </Button>
          </div>
        </Section>

        {/* Trust Section */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Built on Trust & Transparency
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'SOC 2 Type II', href: '/security' },
                { label: 'ISO 27001', href: '/security' },
                { label: 'Responsible AI', href: '/responsible-ai' },
                { label: 'DPA Available', href: '/dpa' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-accent transition-colors text-center text-sm font-medium text-gray-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section background="gray">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to ship value fast?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a 30-min demo or start a pilot. See results in weeks, not quarters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" size="lg">
                Book a Demo
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
