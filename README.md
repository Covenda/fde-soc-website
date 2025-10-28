# Covenda Website

Production-ready Next.js website for Covenda - Build & Run Your AI-SOC with Forward-Deployed Security Engineers.

**Live Site**: https://covenda.ai
**Framework**: Next.js 16 (App Router) + TypeScript + Tailwind CSS
**Deployment**: Vercel

---

## Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Contact Form Integration](#contact-form-integration)
- [Deployment](#deployment)
- [SEO & Analytics](#seo--analytics)
- [Development](#development)

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fde-soc-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
fde-soc-site/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── services/
│   │   ├── page.tsx         # Services hub
│   │   ├── fde/             # Forward-Deployed Engineering
│   │   └── ai-soc/          # AI-SOC service
│   ├── pricing/
│   │   └── services/        # Pricing page
│   ├── customers/
│   │   ├── case-studies/    # Case studies index
│   │   └── [slug]/          # Dynamic case study pages
│   ├── blog/
│   │   ├── page.tsx         # Blog index
│   │   └── [slug]/          # Dynamic blog post pages
│   ├── legal/
│   │   ├── privacy/         # Privacy policy
│   │   └── terms/           # Terms of service
│   ├── api/
│   │   └── contact/         # Contact form API
│   ├── layout.tsx           # Root layout
│   ├── sitemap.ts           # Sitemap generator
│   └── robots.ts            # Robots.txt generator
│
├── components/              # Reusable components
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   └── badge.tsx
│   ├── navigation.tsx       # Top navigation
│   ├── footer.tsx           # Footer
│   ├── hero.tsx             # Hero section
│   ├── service-card.tsx     # Service cards
│   ├── case-study-card.tsx  # Case study cards
│   ├── contact-form.tsx     # Contact form
│   ├── logo-wall.tsx        # Integration logos
│   ├── stat.tsx             # Statistics display
│   ├── testimonial.tsx      # Testimonials
│   ├── container.tsx        # Layout container
│   ├── section.tsx          # Section wrapper
│   ├── sticky-cta.tsx       # Sticky CTA bar
│   └── runbooks-accordion.tsx # Runbooks accordion
│
├── content/                 # Content files
│   ├── blog/               # MDX blog posts
│   │   ├── detection-engineering-best-practices.mdx
│   │   ├── mitre-attack-detection-coverage.mdx
│   │   └── soc-automation-runbook-guide.mdx
│   ├── cases/              # JSON case studies
│   │   ├── fintech-soc-modernization.json
│   │   ├── healthcare-compliance.json
│   │   └── saas-supply-chain.json
│   └── research.md         # Competitive research
│
├── lib/                     # Utility functions
│   ├── utils.ts            # General utilities
│   ├── mdx.ts              # MDX/blog utilities
│   └── case-studies.ts     # Case study utilities
│
├── public/                  # Static assets
│   ├── diagrams/           # SVG diagrams
│   │   ├── platform-diagram.svg
│   │   └── engagement-timeline.svg
│   ├── sellsheets/         # PDF sell sheets
│   │   └── covenda-services.pdf
│   └── og-image.png        # OpenGraph image (1200x630px)
│
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── vercel.json             # Deployment configuration
└── redirects.json          # URL redirects mapping
```

---

## Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Blog Post Title"
description: "Brief description for SEO and previews"
publishedAt: "2024-01-15"
author: "Author Name"
tags: ["detection", "automation", "soc"]
---

# Your Blog Post Title

Your content here with full markdown support...

## Subheading

- Bullet points
- Code blocks
- Images

\`\`\`typescript
// Code examples
const example = "hello";
\`\`\`
```

2. The blog post will automatically appear on `/blog` and be accessible at `/blog/your-blog-post-title`

3. Rebuild the site: `npm run build`

### Adding Case Studies

1. Create a new `.json` file in `content/cases/`:

```json
{
  "slug": "your-case-study-slug",
  "title": "Case Study Title",
  "industry": "Financial Services",
  "challenge": "Brief description of the security challenge the client faced.",
  "approach": "How Covenda addressed the challenge with FDE and AI-SOC services.",
  "outcome": "Results achieved and improvements made.",
  "metrics": [
    { "label": "Detection Coverage", "value": "95%", "description": "MITRE ATT&CK coverage increased" },
    { "label": "MTTD", "value": "8 min", "description": "Mean time to detect reduced" },
    { "label": "Alert Reduction", "value": "70%", "description": "False positives eliminated" }
  ],
  "testimonial": {
    "quote": "Optional client testimonial quote",
    "author": "Name",
    "role": "Title, Company"
  },
  "tags": ["SOC", "Detection Engineering", "Financial Services"]
}
```

2. The case study will automatically appear on `/customers/case-studies` and be accessible at `/customers/your-case-study-slug`

3. Rebuild: `npm run build`

### Updating Service Content

Service pages are in `app/services/`:
- **Services hub**: `app/services/page.tsx`
- **FDE page**: `app/services/fde/page.tsx`
- **AI-SOC page**: `app/services/ai-soc/page.tsx`

Edit the TypeScript files directly to update content.

### Updating Pricing

Pricing tiers are in `app/pricing/services/page.tsx`. Update the `pricingTiers` array to modify pricing, features, or tier names.

---

## Contact Form Integration

The contact form (`app/api/contact/route.ts`) currently logs submissions to console. Integrate with your email/CRM provider:

### Option 1: Email (SendGrid)

```bash
npm install @sendgrid/mail
```

Update `app/api/contact/route.ts`:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const body = await request.json();

  await sgMail.send({
    to: 'sales@covenda.ai',
    from: 'noreply@covenda.ai',
    subject: `New Contact Form Submission from ${body.name}`,
    text: `Name: ${body.name}\nEmail: ${body.email}\nCompany: ${body.company}\n\nMessage:\n${body.message}`,
    html: `<strong>Name:</strong> ${body.name}<br>...`
  });

  return Response.json({ success: true });
}
```

Add to `.env.local`:
```
SENDGRID_API_KEY=your_api_key_here
```

### Option 2: CRM (HubSpot)

```bash
npm install @hubspot/api-client
```

```typescript
import { Client } from "@hubspot/api-client";

const hubspot = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });

export async function POST(request: Request) {
  const body = await request.json();

  await hubspot.crm.contacts.basicApi.create({
    properties: {
      email: body.email,
      firstname: body.name.split(' ')[0],
      lastname: body.name.split(' ').slice(1).join(' '),
      company: body.company,
      message: body.message
    }
  });

  return Response.json({ success: true });
}
```

### Option 3: Database (Prisma + PostgreSQL)

```bash
npm install @prisma/client
npx prisma init
```

Define schema, run migrations, then:

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();

  await prisma.contactSubmission.create({
    data: {
      name: body.name,
      email: body.email,
      company: body.company,
      message: body.message
    }
  });

  return Response.json({ success: true });
}
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel deploy
```

4. **Production deployment**:
```bash
vercel --prod
```

### Environment Variables

Add in Vercel dashboard or `.env.local` for local development:

```
SENDGRID_API_KEY=your_key
HUBSPOT_ACCESS_TOKEN=your_token
# Add any other API keys
```

### Custom Domain

1. Go to Vercel dashboard → Project → Settings → Domains
2. Add `covenda.ai` and `www.covenda.ai`
3. Configure DNS records as instructed by Vercel
4. SSL certificates are automatically provisioned

---

## SEO & Analytics

### OpenGraph Image

Create `public/og-image.png` (1200x630px) with:
- Covenda logo
- Tagline: "Build & Run Your AI-SOC with Forward-Deployed Security Engineers"
- Professional background

Image is referenced in `app/layout.tsx` metadata.

### Sitemap

Automatically generated at `/sitemap.xml` from `app/sitemap.ts`. Updates automatically when you add blog posts or case studies.

### Robots.txt

Configured in `app/robots.ts`. Currently allows all crawlers.

### Google Analytics

Add to `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR-ID');
          `}
        </Script>
      </head>
      <body>...</body>
    </html>
  );
}
```

### Analytics Event Tracking

Events are tracked in `lib/analytics.ts`. Key events:
- CTA clicks (Request Demo, Talk to an Engineer)
- Contact form submissions
- Case study views
- Blog post reads
- Pricing tier clicks

See "Analytics Event Map" section in BUILD-SUMMARY.md for complete list.

---

## Development

### Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint with Next.js config
- Prettier recommended for formatting

### Adding Components

shadcn/ui components can be added:

```bash
npx shadcn-ui@latest add [component-name]
```

### Design System

**Colors** (in `app/globals.css`):
- Primary: `hsl(221 83% 53%)` - Professional blue
- Background: `hsl(0 0% 100%)` - White
- Foreground: `hsl(222 47% 11%)` - Dark text
- Muted: `hsl(215 16% 47%)` - Secondary text

**Typography**:
- Font: Inter (loaded from Google Fonts)
- H1: 2.25rem → 3.75rem (responsive)
- H2: 1.875rem → 3rem (responsive)
- Body: 1rem with 1.75rem line-height

**Spacing**:
- Sections: `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl` with responsive padding
- Gaps: `gap-8 md:gap-12 lg:gap-16`

---

## Accessibility

All components meet WCAG 2.1 AA standards:
- ✅ Proper heading hierarchy
- ✅ Focus states on interactive elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation
- ✅ Color contrast ratios > 4.5:1
- ✅ Semantic HTML

Run accessibility audit:
```bash
npm run build
# Use browser DevTools Lighthouse or axe DevTools extension
```

---

## Troubleshooting

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

### Contact Form Not Working
- Check API route: `app/api/contact/route.ts`
- Verify environment variables are set
- Check browser console for errors
- Test with: `curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","company":"Test Co","message":"Test message"}'`

### Images Not Loading
- Verify images are in `public/` directory
- Check Next.js Image domains in `next.config.ts`
- Use browser DevTools Network tab to debug

### Styles Not Applying
- Ensure Tailwind classes are not purged (must be full string, not concatenated)
- Check `tailwind.config.ts` content paths
- Verify `app/globals.css` is imported in layout

---

## Support

**Documentation**: See `BUILD-SUMMARY.md` for complete build details

**Issues**: Report bugs or request features via your issue tracking system

**Contact**: engineering@covenda.ai

---

## License

Proprietary - Covenda © 2024

---

## Changelog

### v1.0.0 (2024-10-28)
- Initial production release
- 14 pages with full content
- 18 reusable components
- 3 blog posts and 3 case studies
- SEO optimization
- Mobile responsive design
