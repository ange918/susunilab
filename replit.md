# Susuni - Next.js Application

## Overview
A Next.js 16 application bootstrapped with React 19, Tailwind CSS 4, and TypeScript.

## Project Architecture
- **Framework**: Next.js 16.1.6 (App Router)
- **UI**: React 19.2.3 with Tailwind CSS 4
- **Language**: TypeScript 5
- **Build Tool**: Turbopack (Next.js built-in)

## Project Structure
```
app/           - Next.js App Router pages and layouts
  layout.tsx   - Root layout
  page.tsx     - Home page
  globals.css  - Global styles (Tailwind)
public/        - Static assets (SVGs, images)
```

## Development
- **Dev server**: `npm run dev` (runs on port 5000, host 0.0.0.0)
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`

## Configuration
- `next.config.ts` - Next.js config with `allowedDevOrigins` for Replit proxy compatibility
- `postcss.config.mjs` - PostCSS with Tailwind plugin
- `tsconfig.json` - TypeScript configuration

## Recent Changes
- 2026-02-10: Configured for Replit environment (port 5000, allowed all dev origins)
