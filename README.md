# Covenda AI-SOC Website

AI-First Security Operations platform built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Overview

This is a conversion-focused website for Covenda AI-SOC, featuring:
- **Forward-Deployed Engineers (FDEs)** who operate on the **Lucid ML platform**
- **AI-RBVM** (Risk-Based Vulnerability Management) that fuses threat modeling, contextual asset data, and ML-driven prioritization
- Clean, modern design inspired by Palantir (FDE narrative) and Balbix (RBVM clarity)

## Live Development

The dev server is running at:
- **Local**: http://localhost:3001
- **Network**: http://172.20.10.2:3001

Run `npm run dev` to start the development server.

## Site Structure

### Core Pages (Completed)
- ✅ **Home** (`/`) - Hero, social proof, value props, Lucid pipeline, FDE model, outcomes
- ✅ **Platform** (`/platform`) - Lucid ML details, integrations, 5-step pipeline, dashboards
- ✅ **Services (FDE)** (`/services`) - 90-day engagement plan, RBVM runbook, pricing models
- ✅ **Demo** (`/demo`) - Conversion-optimized demo booking form
- ✅ **Contact** (`/contact`) - Contact form with sales, support, partnership options
- ✅ **Customers** (`/customers`) - Case studies with before/after metrics
- ✅ **Resources** (`/resources`) - RBVM playbook, docs, blog, webinars
- ✅ **Company** (`/company`) - Mission, values, team, FDE culture, careers

### Solutions Pages
- ✅ **Cloud Risk & AppSec** (`/solutions/cloud-risk`) - Example solution page
- ⏳ **Vuln Ops** (`/solutions/vuln-ops`) - Template created, needs content
- ⏳ **Compliance** (`/solutions/compliance`) - Template created, needs content
- ⏳ **Board Reporting** (`/solutions/board-reporting`) - Template created, needs content

### Components
- `Button` - Primary, secondary, ghost variants with link support
- `Navigation` - Responsive nav with dropdowns
- `Footer` - Multi-column footer with trust links
- `Section` - Consistent spacing wrapper with background options

## Design System

### Colors
- **Background**: White (`#ffffff`)
- **Foreground**: Dark gray (`#1a1a1a`)
- **Accent**: Orange (`#f97316`) - Used sparingly for CTAs only
- **Accent Hover**: Darker orange (`#ea580c`)
- **Grays**: 50, 100, 200, 300, 600, 700, 900

### Typography
- **Font**: Geist Sans (primary), Geist Mono (code)
- **Headings**: Bold, 3xl–6xl sizes
- **Body**: Base size, gray-600 for secondary text

### Accessibility
- WCAG 2.2 AA contrast ratios
- Keyboard navigation support
- Alt text for all images (placeholders need real images)
- Skip links (to be added)

## Next Steps

### 1. Content & Assets
- [ ] Replace logo placeholders with actual Covenda logo
- [ ] Add customer logos in social proof section (home page)
- [ ] Replace diagram/screenshot placeholders with real images
- [ ] Add team member photos and bios (company page)
- [ ] Create actual case study PDFs and downloadable resources

### 2. Complete Solution Pages
Using the Cloud Risk template as reference, create:
- [ ] Vulnerability Ops at Scale (`/solutions/vuln-ops`)
- [ ] Audit & Compliance (`/solutions/compliance`)
- [ ] Board & Executive Reporting (`/solutions/board-reporting`)

### 3. Functionality
- [ ] Connect forms to CRM (e.g., HubSpot, Salesforce)
- [ ] Add calendar integration for demo bookings (Calendly/Cal.com)
- [ ] Set up email automation for form submissions
- [ ] Implement analytics (Google Analytics, Mixpanel, etc.)
- [ ] Add conversion tracking for CTA clicks

### 4. SEO Optimization
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Implement Schema.org markup (Product, Organization, FAQ)
- [ ] Add Open Graph images for social sharing
- [ ] Set up 301 redirects if migrating from old site
- [ ] Optimize images (use Next.js Image component)
- [ ] Add meta descriptions to all pages

### 5. Performance
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Optimize images (convert to WebP, use srcset)
- [ ] Add edge caching (Vercel/Cloudflare)
- [ ] Minimize JavaScript bundle size
- [ ] Implement code splitting for large pages

### 6. Additional Pages
- [ ] `/security` - Security practices, certifications
- [ ] `/privacy` - Privacy policy
- [ ] `/responsible-ai` - AI ethics and practices
- [ ] `/dpa` - Data Processing Agreement
- [ ] `/subprocessors` - List of subprocessors
- [ ] `/terms` - Terms of service
- [ ] `/docs/*` - API documentation and guides
- [ ] `/company/careers` - Job listings

### 7. Trust & Legal
- [ ] Add cookie consent banner (GDPR compliance)
- [ ] Create privacy policy (consult legal)
- [ ] Create terms of service (consult legal)
- [ ] Set up status page (e.g., status.covenda.ai)
- [ ] Document data processing agreements

### 8. Integrations
- [ ] Set up CMS (Sanity, Contentful) for blog and case studies
- [ ] Connect to customer support (Intercom, Zendesk)
- [ ] Add live chat widget (optional)
- [ ] Set up A/B testing (Optimizely, VWO)

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## Deployment

### Vercel (Recommended)
1. Connect GitHub repo to Vercel
2. Set environment variables (if any)
3. Deploy automatically on push to `main`

### Manual Deployment
```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# CRM Integration
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
HUBSPOT_API_KEY=your_api_key

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# Email
SENDGRID_API_KEY=your_sendgrid_key
```

## Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari/Chrome

## Performance Targets
- Lighthouse Performance: 90+
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.0s

## Content Strategy

### Copy Tone
- Direct, operator-friendly language
- Benefits over features
- No buzzword salad or hype
- Show numbers and metrics
- British or neutral English

### CTAs
Every page has clear conversion paths:
- Primary: "Book a Demo"
- Secondary: "See the Platform", "Contact Sales"
- Tertiary: "View Docs", "Read More"

## Support

For questions or issues:
- Email: hello@covenda.ai
- Documentation: /docs
- Status: status.covenda.ai

## License

Proprietary - © 2025 Covenda AI. All rights reserved.
