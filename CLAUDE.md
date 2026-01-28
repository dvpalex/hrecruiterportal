# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HRecruiter Portal is a multi-language institutional website for a Talent Acquisition company. Built with Nuxt 4, Nuxt Content 3, @nuxtjs/i18n, and Tailwind CSS.

## Requirements

- Node.js >= 20.19.0

## Commands

```bash
npm install     # Install dependencies (run in Windows terminal due to WSL permission issues)
npm run dev     # Start development server at http://localhost:3000
npm run build   # Production build
npm run generate  # Generate static site
npm run preview   # Preview production build locally
```

## Architecture

### Multi-language Routing
- **Portuguese (default)**: `/`, `/sobre`, `/servicos/recrutamento`
- **English**: `/en/`, `/en/about`, `/en/services/recruiting`
- **Spanish**: `/es/`, `/es/nosotros`, `/es/servicios/reclutamiento`
- Strategy: `prefix_except_default` (PT has no prefix)
- UI translations in `i18n/locales/` (pt.json, en.json, es.json)

### Content-to-Route Mapping

The catch-all route `app/pages/[...slug].vue` queries content collections based on locale:
1. Determines collection name from current locale (`content_pt`, `content_en`, `content_es`)
2. Strips locale prefix from URL path (`/en/about` → `/about`)
3. Queries that path in the locale's collection
4. Renders content with `<ContentRenderer>`

### Content Collections (content.config.ts)
Each locale has its own collection with shared schema (title, description, image):
- `content_pt` - source: `content/pt/**`
- `content_en` - source: `content/en/**`
- `content_es` - source: `content/es/**`

### MDC Components (Markdown Component syntax)
Components in `app/components/content/` can be embedded in markdown:
```md
::hero
---
title: Page Title
subtitle: Description text
cta: Button text
ctaLink: /link
---
::
```
Available: Hero, ServicesPreview, Differentials, CtaContact, ContactForm, AboutSection, ServiceDetail

### SEO
- hreflang tags auto-generated via `useLocaleHead()` in `app/layouts/default.vue`
- Page meta from frontmatter (title, description)

### Styling
- Tailwind with custom `primary` and `secondary` color scales in `tailwind.config.ts`
- Global styles in `app/assets/css/main.css`
