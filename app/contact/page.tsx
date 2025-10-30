import { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Covenda AI-SOC",
  description:
    "Get in touch with Covenda. Sales, support, partnerships, or general inquiries—we respond within 24 hours.",
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Section className="pt-20 md:pt-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                We respond to all inquiries within 24 hours
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <svg
                  className="w-8 h-8 text-accent mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:hello@covenda.ai"
                  className="text-accent hover:underline"
                >
                  hello@covenda.ai
                </a>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <svg
                  className="w-8 h-8 text-accent mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="font-bold text-gray-900 mb-2">Book a Demo</h3>
                <a href="/demo" className="text-accent hover:underline">
                  Schedule time
                </a>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <svg
                  className="w-8 h-8 text-accent mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Remote-first, global</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiry-type"
                      name="inquiry-type"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    >
                      <option value="">Select type</option>
                      <option value="sales">Sales & Product Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="press">Press & Media</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our{" "}
                    <a href="/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Sales & Partnerships
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Interested in a demo, pilot, or partnership? Reach out to
                    our team.
                  </p>
                  <a
                    href="mailto:sales@covenda.ai"
                    className="text-accent hover:underline font-medium"
                  >
                    sales@covenda.ai
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Support
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Existing customers: access support docs and submit tickets
                    via the platform, or email:
                  </p>
                  <a
                    href="mailto:support@covenda.ai"
                    className="text-accent hover:underline font-medium"
                  >
                    support@covenda.ai
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Security & Privacy
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Report a vulnerability or request our security
                    documentation:
                  </p>
                  <a
                    href="mailto:security@covenda.ai"
                    className="text-accent hover:underline font-medium"
                  >
                    security@covenda.ai
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Careers
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Join the Covenda team. We&apos;re hiring FDEs, engineers,
                    and go-to-market roles.
                  </p>
                  <Button href="/company/careers" variant="secondary">
                    View Open Roles
                  </Button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Office Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday–Friday: 9am–6pm (your local timezone)
                    <br />
                    We operate globally with FDEs in Americas, EMEA, and APAC.
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
