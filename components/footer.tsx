import Link from 'next/link';

const footerLinks = {
  platform: [
    { name: 'How it Works', href: '/platform#how-it-works' },
    { name: 'Integrations', href: '/platform#integrations' },
    { name: 'API Docs', href: '/docs/api' },
  ],
  solutions: [
    { name: 'Cloud Risk & AppSec', href: '/solutions/cloud-risk' },
    { name: 'Vulnerability Ops', href: '/solutions/vuln-ops' },
    { name: 'Compliance', href: '/solutions/compliance' },
    { name: 'Board Reporting', href: '/solutions/board-reporting' },
  ],
  resources: [
    { name: 'RBVM Playbook', href: '/resources/rbvm-playbook' },
    { name: 'Threat Modeling Primer', href: '/resources/threat-modeling' },
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Documentation', href: '/docs' },
  ],
  company: [
    { name: 'About', href: '/company' },
    { name: 'Careers', href: '/company/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  trust: [
    { name: 'Security', href: '/security' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Responsible AI', href: '/responsible-ai' },
    { name: 'DPA', href: '/dpa' },
    { name: 'Subprocessors', href: '/subprocessors' },
    { name: 'System Status', href: 'https://status.covenda.ai', external: true },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Security */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Trust & Security</h3>
            <ul className="space-y-3">
              {footerLinks.trust.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white transition-colors inline-flex items-center"
                    >
                      {link.name}
                      <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-xl font-bold text-white">Covenda</span>
              <span className="ml-2 text-sm font-medium text-gray-400">AI-SOC</span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Covenda AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
