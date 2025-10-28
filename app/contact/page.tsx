import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Covenda to discuss your security engineering and operations needs. We typically respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Let's talk about your security needs"
        description="Whether you're ready to start an engagement or just exploring options, we're here to help. Fill out the form below or reach out directly."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Other ways to reach us</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Email</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        General inquiries:{" "}
                        <a href="mailto:hello@covenda.ai" className="text-primary hover:underline">
                          hello@covenda.ai
                        </a>
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Sales:{" "}
                        <a href="mailto:sales@covenda.ai" className="text-primary hover:underline">
                          sales@covenda.ai
                        </a>
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Phone</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Sales: <span className="text-foreground font-medium">+1 (555) 123-4567</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Business hours: Monday-Friday, 9 AM - 6 PM ET
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Office</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Covenda, Inc.
                        <br />
                        123 Security Boulevard, Suite 400
                        <br />
                        San Francisco, CA 94105
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Remote-first company. Office by appointment only.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Response time</h3>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all inquiries within 24 hours during business days. For urgent security matters, please call our sales line directly.
                </p>
              </div>

              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2">Not sure where to start?</h3>
                <p className="text-sm text-muted-foreground">
                  Most engagements begin with a 2-4 week assessment to understand your current security posture and build a prioritized roadmap. Contact us to discuss your specific needs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
