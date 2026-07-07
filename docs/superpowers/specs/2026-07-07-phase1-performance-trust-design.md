# Phase 1: Performance and Trust Signals Design Spec

## 1. Goal
To implement the first phase of the high-conversion overhaul for the Pasalho website. This phase focuses on resolving critical build/linting errors, optimizing image loading for better page speed (LCP), and introducing strong trust signals to increase user confidence and conversions.

## 2. Architecture & Components

### 2.1 Performance Fixes
- **Build Stabilization**: Remove the duplicate `unit` key in `src/lib/mockData.ts` to allow production builds to compile successfully.
- **Hook Optimization**: Refactor `src/components/Cart.tsx` to prevent synchronous `setState` calls inside `useEffect`, preventing cascading renders. Escaped quotes will be corrected across all components (`Cart.tsx`, `Footer.tsx`, `Testimonials.tsx`).
- **Image Optimization**: Replace native `<img>` tags with the Next.js `<Image />` component in:
  - `src/app/page.tsx`
  - `src/components/Cart.tsx`
  - Any other components using `<img>`

### 2.2 New UI Components (Trust Signals)
- **Conversion Bar Component (`src/components/ConversionBar.tsx`)**:
  - A horizontal banner placed directly below the hero section on the homepage (`page.tsx`).
  - Features three distinct Trust Badges with SVG icons: 
    1. Same-Day Delivery
    2. Secure Payments
    3. Quality Guaranteed
  - Designed for high contrast and immediate visibility.

- **Testimonials Component (`src/components/Testimonials.tsx`)**:
  - A dedicated social proof section placed near the bottom of `page.tsx`.
  - Will feature 3 placeholder reviews.
  - To increase authenticity, reviews will reflect a realistic mix of 5-star and 4-star ratings.

## 3. Data Flow
- Trust signals and testimonials will be statically rendered components for now, utilizing placeholder text/content as the backend API is not yet integrated.
- Image components will leverage Next.js built-in image optimization API to serve appropriately sized WebP formats.

## 4. Scope & Ambiguity Check
- **Scope**: Focused exclusively on performance stability and Trust Signals (Approach A). Checkout improvements, advanced analytics, and overall navigation restructure are deferred to subsequent phases.
- **Ambiguity**: "Same-Day delivery" is confirmed as the primary guarantee. Customer testimonials are explicitly placeholders until real data is supplied. No ambiguity remains.

## 5. Testing
- Run `npm run build` to verify the TypeScript error is resolved.
- Run `npm run lint` to confirm React Hook violations and unescaped entities are fixed.
- Manually test homepage on responsive views (mobile/desktop) to verify the Conversion Bar displays correctly.
