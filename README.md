# Postly — AI-Powered Social Media SaaS Landing Page

A modern, production-ready landing page built for a fictional AI social media scheduling SaaS.

![Postly Hero](/public/dashboard-preview.png)

## Overview

Postly is a concept SaaS product that helps creators and teams grow on social media through AI-powered scheduling, multi-platform publishing, and deep analytics. 

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Components** — shadcn/ui
- **Animations** — Framer Motion
- **Icons** — Lucide React, React Icons
- **Fonts** — Sora (Google Fonts via next/font)

## Features

- **Hero** with 3D tilt effect on dashboard preview and aurora background
- **Logo Cloud** with infinite slider showing supported social platforms
- **Sticky Scroll Feature Section** — sidebar and preview stay fixed while content scrolls, with active topic tracking via IntersectionObserver
- **Features Bento Grid** — 6 animated cards with SVG illustrations from the shadcn UI kit
- **Stats Section** with animated count-up numbers
- **Product Overview** with tabbed interface showing platform features
- **Testimonials** with draggable cards using Framer Motion drag
- **Pricing** with monthly/yearly toggle and highlighted Pro plan
- **CTA Section** with dot grid background and brand glow
- **Footer** with social links and navigation columns
- Fully **responsive** — mobile-first approach throughout
- **Scroll-linked animations** across all sections via Framer Motion `whileInView`

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
git clone https://github.com/luchersou/postly.git
cd postly
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── navbar/
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── features/
│   │   ├── features-bento/
│   │   ├── pricing/
│   │   └── ...
│   ├── shared/
│   │   ├── logo.tsx
│   │   └── icons/
│   └── ui/
└── hooks/
```