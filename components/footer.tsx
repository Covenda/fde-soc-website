import Link from "next/link";
import { Container } from "@/components/container";
import { Linkedin } from "lucide-react";

const navigation = {
  services: [
    { name: "Security Engineering", href: "/services" },
    { name: "Forward-Deployed Engineering", href: "/services/fde" },
    { name: "AI-SOC Co-Management", href: "/services/ai-soc" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/customers/case-studies" },
    { name: "Pricing", href: "/pricing/services" },
    { name: "Threat Engineering Insights", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/covenda-ai",
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Services
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Company
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Connect
              </h3>
              <div className="mt-6 flex gap-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8">
            <p className="text-sm leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Covenda. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
