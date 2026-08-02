/**
 * Cassian AI — site configuration
 * Edit this file to update pricing, embeds, images, and integrations.
 */
window.CASSIAN_CONFIG = {
  /** Calendly scheduling URL for the Book a call section and CTA links */
  calendlyUrl:
    "https://calendly.com/jahleeljackson-cassianconsultingai/30-minute-discovery-call",

  /**
   * About portrait path. Drop a file in /images then set this, e.g. "images/about.jpg".
   * Leave empty to show the placeholder.
   */
  aboutImage: "",

  /** Netlify Forms form name (must match the form name attribute) */
  formName: "contact",

  /**
   * Optional webhook (Zapier, Make, Apps Script, etc.).
   * If set, successful form submits also POST JSON to this URL.
   */
  formWebhookUrl: "",

  pricing: {
    /** Paid workflow diagnostic (USD) */
    diagnostic: 2500,
    /** Implementation setup starting price (USD) */
    implementationFrom: 5000,
    /** Monthly retainer starting price (USD) */
    retainerFrom: 1500,
    diagnosticCreditPolicy:
      "100% of the diagnostic fee is credited toward implementation if you begin within 30 days of delivery.",
  },

  roi: {
    reductions: {
      pessimistic: 0.15,
      expected: 0.25,
      optimistic: 0.5,
    },
  },
};
