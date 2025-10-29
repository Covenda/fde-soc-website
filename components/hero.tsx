import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <Container>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-fade-in-up">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up [animation-delay:400ms]">
                {primaryCta && (
                  <Button size="lg" variant="black" asChild>
                    <Link
                      href={primaryCta.href}
                      className="inline-flex items-center gap-3"
                    >
                      <span>{primaryCta.text}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button size="lg" variant="orange" asChild>
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-3"
                    >
                      <span>{secondaryCta.text}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
