"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface StickyCTAProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  showAfterScroll?: number;
}

export function StickyCTA({
  primaryText = "Request Demo",
  primaryHref = "/contact",
  secondaryText = "Contact Us",
  secondaryHref = "/contact",
  showAfterScroll = 800,
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > showAfterScroll;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    trackEvent("sticky_cta_dismissed", {
      location: window.location.pathname,
    });
  };

  const handlePrimaryClick = () => {
    trackEvent("sticky_cta_click", {
      button: "primary",
      text: primaryText,
      href: primaryHref,
      location: window.location.pathname,
    });
  };

  const handleSecondaryClick = () => {
    trackEvent("sticky_cta_click", {
      button: "secondary",
      text: secondaryText,
      href: secondaryHref,
      location: window.location.pathname,
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
      role="complementary"
      aria-label="Call to action banner"
    >
      <div className="bg-primary text-primary-foreground shadow-lg border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <p className="text-sm font-medium">
                Ready to modernize your security operations?
              </p>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <Button
                asChild
                variant="black"
                size="sm"
                onClick={handleSecondaryClick}
                className="hidden sm:inline-flex"
              >
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-3"
                >
                  <span>{secondaryText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="orange"
                size="sm"
                onClick={handlePrimaryClick}
              >
                <Link
                  href={primaryHref}
                  className="inline-flex items-center gap-3"
                >
                  <span>{primaryText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <button
                onClick={handleDismiss}
                className="p-1 rounded hover:bg-primary-foreground/10 transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
