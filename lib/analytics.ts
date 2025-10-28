/**
 * Analytics Event Tracking
 *
 * Central location for tracking user interactions and conversions.
 * Supports Google Analytics, Plausible, and custom analytics providers.
 */

export type AnalyticsEvent =
  // CTA Events
  | "cta_click"
  | "sticky_cta_click"
  | "sticky_cta_dismissed"
  | "request_demo_click"
  | "talk_to_engineer_click"
  | "get_started_click"

  // Form Events
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error"

  // Navigation Events
  | "nav_link_click"
  | "footer_link_click"
  | "logo_click"

  // Content Events
  | "case_study_view"
  | "case_study_click"
  | "blog_post_view"
  | "blog_post_read_complete"

  // Service Events
  | "service_card_click"
  | "pricing_tier_click"
  | "fde_page_view"
  | "ai_soc_page_view"

  // Engagement Events
  | "video_play"
  | "pdf_download"
  | "diagram_view"
  | "accordion_open"

  // Conversion Events
  | "qualified_lead"
  | "demo_scheduled"
  | "contract_signed";

export interface AnalyticsEventProperties {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track an analytics event
 * @param event - Event name from AnalyticsEvent type
 * @param properties - Additional event properties
 */
export function trackEvent(
  event: AnalyticsEvent,
  properties?: AnalyticsEventProperties
): void {
  // Only track in browser environment
  if (typeof window === "undefined") return;

  const eventData = {
    event,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    path: window.location.pathname,
    ...properties,
  };

  // Google Analytics (gtag.js)
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", event, properties);
  }

  // Plausible Analytics
  if (typeof window.plausible !== "undefined") {
    window.plausible(event, { props: properties });
  }

  // Custom Analytics (e.g., Segment, Mixpanel)
  if (typeof window.analytics !== "undefined") {
    window.analytics.track(event, properties);
  }

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", eventData);
  }

  // Send to custom endpoint if configured
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }).catch((error) => {
      console.error("Analytics tracking failed:", error);
    });
  }
}

/**
 * Track page view
 * @param url - Page URL (optional, defaults to current URL)
 * @param title - Page title (optional, defaults to document title)
 */
export function trackPageView(url?: string, title?: string): void {
  if (typeof window === "undefined") return;

  const pageUrl = url || window.location.href;
  const pageTitle = title || document.title;

  // Google Analytics
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: pageUrl,
      page_title: pageTitle,
    });
  }

  // Plausible
  if (typeof window.plausible !== "undefined") {
    window.plausible("pageview", { u: pageUrl });
  }

  // Custom Analytics
  if (typeof window.analytics !== "undefined") {
    window.analytics.page(pageTitle, {
      url: pageUrl,
      path: window.location.pathname,
    });
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] Page view:", { url: pageUrl, title: pageTitle });
  }
}

/**
 * Track conversion event (high-value action)
 * @param conversionType - Type of conversion
 * @param value - Optional monetary value
 * @param properties - Additional properties
 */
export function trackConversion(
  conversionType: "demo" | "contact" | "qualified_lead" | "signup",
  value?: number,
  properties?: AnalyticsEventProperties
): void {
  trackEvent("qualified_lead", {
    conversion_type: conversionType,
    value,
    ...properties,
  });

  // Send conversion to Google Analytics
  if (typeof window.gtag !== "undefined" && value) {
    window.gtag("event", "conversion", {
      send_to: process.env.NEXT_PUBLIC_GA_CONVERSION_ID,
      value,
      currency: "USD",
      transaction_id: Date.now().toString(),
    });
  }
}

/**
 * Track time spent on page
 * Call this function when component unmounts or user leaves page
 * @param pageId - Unique identifier for the page
 * @param duration - Time spent in seconds
 */
export function trackTimeOnPage(pageId: string, duration: number): void {
  trackEvent("blog_post_read_complete", {
    page_id: pageId,
    duration_seconds: duration,
    engaged: duration > 30, // Consider 30+ seconds as engaged
  });
}

/**
 * Initialize analytics on app load
 * Call this in your root layout or _app component
 */
export function initAnalytics(): void {
  if (typeof window === "undefined") return;

  // Track initial page view
  trackPageView();

  // Set up automatic page view tracking for SPAs
  if (typeof window.history !== "undefined") {
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      trackPageView();
    };
  }
}

// TypeScript declarations for global analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, any>; u?: string }) => void;
    analytics?: {
      track: (event: string, properties?: Record<string, any>) => void;
      page: (name: string, properties?: Record<string, any>) => void;
    };
  }
}

// Analytics Event Map (for reference and documentation)
export const ANALYTICS_EVENT_MAP = {
  // Call-to-Action Events
  CTA_EVENTS: {
    "cta_click": "Any CTA button click",
    "sticky_cta_click": "Sticky bottom bar CTA click",
    "sticky_cta_dismissed": "User dismisses sticky CTA bar",
    "request_demo_click": "Request Demo button click",
    "talk_to_engineer_click": "Talk to an Engineer button click",
    "get_started_click": "Get Started button click",
  },

  // Form Events
  FORM_EVENTS: {
    "contact_form_submit": "Contact form submission attempt",
    "contact_form_success": "Contact form successfully submitted",
    "contact_form_error": "Contact form submission failed",
  },

  // Navigation Events
  NAVIGATION_EVENTS: {
    "nav_link_click": "Top navigation link click",
    "footer_link_click": "Footer link click",
    "logo_click": "Logo click (usually returns to home)",
  },

  // Content Engagement Events
  CONTENT_EVENTS: {
    "case_study_view": "User views a case study page",
    "case_study_click": "User clicks on case study card",
    "blog_post_view": "User views a blog post",
    "blog_post_read_complete": "User spends 30+ seconds on blog post",
  },

  // Service Pages Events
  SERVICE_EVENTS: {
    "service_card_click": "Click on service card (Assess/Build/Operate)",
    "pricing_tier_click": "Click on pricing tier for more info",
    "fde_page_view": "View Forward-Deployed Engineering page",
    "ai_soc_page_view": "View AI-SOC page",
  },

  // Engagement Events
  ENGAGEMENT_EVENTS: {
    "video_play": "User plays embedded video",
    "pdf_download": "User downloads PDF (case study, sell sheet, etc.)",
    "diagram_view": "User views platform/engagement diagrams",
    "accordion_open": "User expands accordion item (FAQs, runbooks)",
  },

  // Conversion Events (High Value)
  CONVERSION_EVENTS: {
    "qualified_lead": "User performs high-intent action",
    "demo_scheduled": "User schedules product demo",
    "contract_signed": "Customer signs contract (external integration)",
  },
} as const;

/**
 * Example usage:
 *
 * // Track button click
 * <Button onClick={() => trackEvent("request_demo_click", { location: "hero" })}>
 *   Request Demo
 * </Button>
 *
 * // Track page view
 * useEffect(() => {
 *   trackPageView();
 * }, []);
 *
 * // Track form submission
 * const handleSubmit = async (data) => {
 *   trackEvent("contact_form_submit");
 *   try {
 *     await submitForm(data);
 *     trackEvent("contact_form_success");
 *     trackConversion("contact", 1000);
 *   } catch (error) {
 *     trackEvent("contact_form_error", { error: error.message });
 *   }
 * };
 */
