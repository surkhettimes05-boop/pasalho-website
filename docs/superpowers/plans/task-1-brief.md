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
