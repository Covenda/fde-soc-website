import { Metadata } from 'next';
import Section from '@/components/Section';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Book a Demo | Covenda AI-SOC',
  description: 'See AI-RBVM in action. 30-minute demo with your data. Book time with a Covenda FDE to explore the Lucid platform.',
};

export default function Demo() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Section className="pt-20 md:pt-32">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Book a Demo
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  See AI-RBVM in action with your data. Our Forward-Deployed Engineers will walk you through:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">The Lucid Pipeline</h3>
                      <p className="text-gray-600">Ingest, threat-model, score, assign, and verify—live walkthrough with sample data</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Your Integrations</h3>
                      <p className="text-gray-600">Discuss how Covenda connects to your scanners, cloud platforms, and ticketing systems</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Pilot Scoping</h3>
                      <p className="text-gray-600">Plan a 30-day pilot: team size, asset count, success metrics, and timeline</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Q&A</h3>
                      <p className="text-gray-600">Bring your technical and procurement questions—our FDEs can answer on the spot</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Duration: 30 minutes</li>
                    <li>• Format: Video call (Zoom/Google Meet)</li>
                    <li>• Who should attend: CISO, SecOps Lead, AppSec, or Compliance</li>
                    <li>• Pre-work: None required (but we can ingest sample data if provided)</li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Demo</h2>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    >
                      <option value="">Select your role</option>
                      <option value="ciso">CISO / VP Security</option>
                      <option value="secops">Head of SecOps / SOC Manager</option>
                      <option value="appsec">Cloud / AppSec Lead</option>
                      <option value="compliance">Compliance & Risk</option>
                      <option value="eng">Engineering / DevOps</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="team-size" className="block text-sm font-medium text-gray-700 mb-1">
                      Security Team Size
                    </label>
                    <select
                      id="team-size"
                      name="team-size"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    >
                      <option value="">Select size</option>
                      <option value="1-5">1-5</option>
                      <option value="6-20">6-20</option>
                      <option value="21-50">21-50</option>
                      <option value="51+">51+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="use-case" className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Use Case
                    </label>
                    <select
                      id="use-case"
                      name="use-case"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    >
                      <option value="">Select use case</option>
                      <option value="cloud-risk">Cloud Risk & AppSec</option>
                      <option value="vuln-ops">Vulnerability Ops at Scale</option>
                      <option value="compliance">Audit & Compliance</option>
                      <option value="board">Board / Executive Reporting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Questions or Comments
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      placeholder="Tell us about your current VM setup or any specific questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Submit & View Calendar
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Prefer email?{' '}
                    <a href="mailto:demo@covenda.ai" className="text-accent hover:underline font-medium">
                      demo@covenda.ai
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
