import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Users, Target } from "lucide-react";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Covenda",
  description:
    "We build and run AI-SOC operations with Forward-Deployed Security Engineers. Our mission is to make world-class security accessible to every organization.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Building the future of security operations"
        description="We believe every organization deserves access to world-class security engineering and operations, delivered through embedded experts and a unified risk platform."
        primaryCta={{ text: "Join Our Team", href: "/contact" }}
        secondaryCta={{ text: "View Services", href: "/services" }}
      />

      {/* Mission */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our mission</h2>
              <p className="text-lg text-muted-foreground">
                Security operations shouldn't require a team of 50 analysts.
                With the right platform, process, and embedded expertise,
                organizations of any size can build and run effective security
                programs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Outcome-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We measure success by MTTD, MTTR, and coverage—not hours
                    billed or reports delivered. Every engagement has clear SLOs
                    and exit criteria.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Collaborative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our Forward-Deployed Engineers join your team, not work
                    around it. Daily standups, shared Slack channels, and joint
                    ownership of outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Transparent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Clear pricing, defined scope, and measurable deliverables.
                    No surprise fees, no vendor lock-in, no proprietary black
                    boxes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Team */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Built by security engineers, for security engineers
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team has built and operated SOCs at scale for enterprises,
                startups, and government agencies. We've felt the pain of legacy
                SIEM platforms, alert fatigue, and understaffed teams.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Covenda was founded by security practitioners who saw the same
                  challenges across every organization: too many alerts, not
                  enough context, and no clear path from detection to response.
                  We built the unified risk platform to solve our own problems,
                  and now we're making it available to teams who face the same
                  struggles.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our Forward-Deployed Engineers aren't just consultants—they're
                  seasoned security professionals who have written detection
                  rules at 2 AM, triaged false positives during incident
                  response, and automated runbooks to reduce analyst burnout.
                  When we embed with your team, we bring that hard-won
                  experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Hiring FDEs */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">We're hiring Forward-Deployed Engineers</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you love building security infrastructure, teaching teams to
              fish (not just handing them fish), and owning outcomes from code
              to production, we want to talk to you.
            </p>

            <div className="grid gap-6 md:grid-cols-2 text-left mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What we look for</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • 3+ years in security engineering or SOC operations
                    </li>
                    <li>
                      • Experience with SIEM platforms (Sentinel, Splunk,
                      Elastic)
                    </li>
                    <li>• Detection engineering (Sigma, KQL, SPL)</li>
                    <li>
                      • Automation and scripting (Python, PowerShell, Bash)
                    </li>
                    <li>• Strong communication and teaching skills</li>
                    <li>• Comfortable working embedded with customer teams</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What we offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Competitive salary and equity</li>
                    <li>• Work on diverse security challenges</li>
                    <li>• Autonomy and ownership of customer outcomes</li>
                    <li>• Remote-first culture</li>
                    <li>• Learning and conference budget</li>
                    <li>• Health, dental, vision, 401(k)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Button size="xl" asChild>
              <Link href="/contact">
                Apply to Join Our Team
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Let's build your security program together</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Whether you're starting from scratch or scaling an existing SOC,
              we can help. Start with an assessment or dive straight into a
              Build engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link
                  href="/pricing/services"
                  className="inline-flex items-center gap-3"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
