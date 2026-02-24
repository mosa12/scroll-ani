# Scroll-Driven Hero Section Animation

This project recreates a hero section with scroll-driven animations inspired by a reference demo. It features smooth initial load animations and scroll-based interactions using GSAP.

## Tech Stack

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **TypeScript** - Type-safe JavaScript

## Features

- Hero section occupying the first screen
- Letter-spaced headline with fade and movement animation on load
- Statistics that animate in one by one
- Scroll-driven animation for the main visual element (car image)
- Smooth, performant animations using transforms

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/page.tsx` - Main page with hero section
- `app/layout.tsx` - Root layout
- `app/globals.css` - Global styles with Tailwind

## Animations

- **Initial Load**: Headline fades in with slight movement, stats stagger in
- **Scroll**: Car image translates and rotates based on scroll progress

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
