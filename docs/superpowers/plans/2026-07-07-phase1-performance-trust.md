# Phase 1: Performance and Trust Signals Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Phase 1 of high-conversion overhaul: fix build/lint errors, optimize images, and add prominent Trust Signals.

**Architecture:** We will fix the existing TypeScript/Lint errors, replace native HTML image tags with Next.js optimized `<Image>` components, and build two new React components (ConversionBar, Testimonials) for social proof and risk reversal.

**Tech Stack:** Next.js, React, TailwindCSS, TypeScript

## Global Constraints

- No external packages added unless strictly necessary (use lucide-react for icons).
- Must adhere strictly to Next.js 15+ React 19 standards.
- Use `npm` for scripts.

---

### Task 1: Fix Build and Lint Errors

**Files:**
- Modify: `src/lib/mockData.ts`
- Modify: `src/components/Cart.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/Testimonials.tsx`

**Interfaces:**
- Consumes: Existing Next.js setup.
- Produces: Error-free build and lint process.

- [ ] **Step 1: Fix TypeScript error in mockData.ts**

```typescript
// in src/lib/mockData.ts: remove duplicate 'unit' at line 9
  {
    id: "p4",
    name: "Aashirvaad Whole Wheat Atta",
    price: 495,
    mrp: 520,
    unit: "5 kg",
    // REMOVE duplicate unit
    image: "/images/products/staples_flour.jpg",
    description: "100% pure whole wheat chakki fresh atta.",
    category: "Staples",
    badge: "Most popular"
  },
```

- [ ] **Step 2: Fix Hook Error and unescaped quotes in Cart.tsx**

```tsx
// in src/components/Cart.tsx
// Replace the useEffect with:
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

// Fix unescaped quotes at line 66:
// From: Your cart is empty. It's a great time to start shopping!
// To: Your cart is empty. It&apos;s a great time to start shopping!
```

- [ ] **Step 3: Fix unescaped quotes in Footer.tsx**

```tsx
// in src/components/Footer.tsx, line 18:
// From: Nepal's Premier Retail Chain
// To: Nepal&apos;s Premier Retail Chain
```

- [ ] **Step 4: Fix unescaped quotes in Testimonials.tsx**

```tsx
// in src/components/Testimonials.tsx, line 50 and 66:
// Fix quotes using &apos; and &quot;
```

- [ ] **Step 5: Run tests to verify passing**

Run: `npm run lint` and `npm run build`
Expected: 0 errors for the modified files.

- [ ] **Step 6: Commit**

```bash
git add src/lib/mockData.ts src/components/Cart.tsx src/components/Footer.tsx src/components/Testimonials.tsx
git commit -m "fix: resolve build and linting errors"
```

---

### Task 2: Next.js Image Optimization

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/Cart.tsx`
- Modify: `src/app/stores/page.tsx`

**Interfaces:**
- Consumes: Next.js Image component
- Produces: Optimized images with LCP improvements.

- [ ] **Step 1: Replace img in page.tsx**

```tsx
// in src/app/page.tsx
import Image from "next/image";

// Find `<img src={product.image}` and replace with:
<Image 
  src={product.image} 
  alt={product.name}
  fill
  className="object-contain drop-shadow-md hover:scale-110 hover:drop-shadow-xl transition-all duration-500 ease-out p-2"
/>

// Do the same for category images:
<Image 
  src={cat.image}
  alt={cat.name}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
// Note: Requires parent div to have `relative` which it already does.
```

- [ ] **Step 2: Replace img in Cart.tsx**

```tsx
// in src/components/Cart.tsx
import Image from "next/image";

// Find `<img src={item.product.image}` and replace with:
<Image 
  src={item.product.image} 
  alt={item.product.name}
  fill
  className="object-contain p-1"
/>
// Ensure the wrapping div has `relative` class.
```

- [ ] **Step 3: Replace img in stores/page.tsx**

```tsx
// in src/app/stores/page.tsx
import Image from "next/image";

// Find `<img src={store.image}` and replace with:
<Image 
  src={store.image} 
  alt={store.name}
  fill
  className="object-cover hover:scale-105 transition-transform duration-500"
/>
// Ensure parent div has `relative`.
```

- [ ] **Step 4: Run tests to verify passing**

Run: `npm run lint`
Expected: 0 warnings about `<img>` tags.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/components/Cart.tsx src/app/stores/page.tsx
git commit -m "perf: replace native img tags with Next.js Image component"
```

---

### Task 3: Implement Conversion Bar Component

**Files:**
- Create: `src/components/ConversionBar.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `lucide-react` icons (Truck, Lock, ShieldCheck).
- Produces: `<ConversionBar />` component.

- [ ] **Step 1: Create ConversionBar.tsx**

```tsx
// src/components/ConversionBar.tsx
import { Truck, Lock, ShieldCheck } from "lucide-react";

export default function ConversionBar() {
  return (
    <div className="bg-orange-50 border-y border-orange-100 py-4 mt-8 mb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-4">
        <div className="flex items-center gap-3">
          <Truck className="h-6 w-6 text-orange-600" />
          <span className="font-bold text-sm text-gray-800">Same-Day Delivery</span>
        </div>
        <div className="flex items-center gap-3">
          <Lock className="h-6 w-6 text-orange-600" />
          <span className="font-bold text-sm text-gray-800">Secure Payments</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-orange-600" />
          <span className="font-bold text-sm text-gray-800">Quality Guaranteed</span>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add ConversionBar to page.tsx**

```tsx
// in src/app/page.tsx
import ConversionBar from "@/components/ConversionBar";

// Place <ConversionBar /> right below the "Get 20% OFF" banner section:
// ...
        </div>

        {/* Conversion Bar */}
        <ConversionBar />

        {/* Variety Loop: Categories */}
// ...
```

- [ ] **Step 3: Run to verify passing**

Run: `npm run build`
Expected: Build passes.

- [ ] **Step 4: Commit**

```bash
git add src/components/ConversionBar.tsx src/app/page.tsx
git commit -m "feat: add ConversionBar trust signals to homepage"
```

---

### Task 4: Revamp Testimonials Component

**Files:**
- Modify: `src/components/Testimonials.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: Testimonials component logic.
- Produces: Fully functional placeholder reviews section.

- [ ] **Step 1: Rewrite Testimonials.tsx to use authentic placeholders**

```tsx
// src/components/Testimonials.tsx
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { id: 1, name: "Sita R.", rating: 5, text: "The same-day delivery is a lifesaver! Got my groceries right when I needed them.", location: "Kathmandu" },
  { id: 2, name: "Bikash T.", rating: 4, text: "Great quality overall. Delivery was quick, though one item was out of stock.", location: "Pokhara" },
  { id: 3, name: "Anjali S.", rating: 5, text: "Safe, secure checkout and the produce was perfectly fresh. Highly recommend!", location: "Lalitpur" }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What our neighbors say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex text-orange-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-current" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
              <div className="font-bold text-sm text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Testimonials to page.tsx**

```tsx
// in src/app/page.tsx
import Testimonials from "@/components/Testimonials";

// Place <Testimonials /> at the very bottom of the main content before the extra padding:
// ...
        </section>
        
        <Testimonials />
        
        {/* Extra padding to scroll past the bottom nav on mobile */}
        <div className="h-24 md:h-12"></div>
      </main>
// ...
```

- [ ] **Step 3: Run to verify passing**

Run: `npm run build`
Expected: Build passes.

- [ ] **Step 4: Commit**

```bash
git add src/components/Testimonials.tsx src/app/page.tsx
git commit -m "feat: revamp Testimonials component with authentic placeholders"
```
