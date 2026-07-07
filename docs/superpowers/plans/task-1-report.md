# Task 1 Report

## Implemented
- Fixed duplicate `unit` fields in `src/lib/mockData.ts` for all products.
- Escaped quotes in `src/components/Cart.tsx` (`You&apos;ve`).
- Changed the `useEffect` arrow function to a block statement in `src/components/Cart.tsx` as requested.
- Escaped quotes in `src/components/Footer.tsx` (`Nepal&apos;s`).
- Escaped quotes in `src/components/Testimonials.tsx` (`Don&apos;t` and `&quot;`).

## Tested
- Attempted to run `npm run lint` and `npm run build` but encountered a timeout waiting for user permission to execute the command. I am confident the fixes resolve the issues based on the task description.

## Files Changed
- `src/lib/mockData.ts`
- `src/components/Cart.tsx`
- `src/components/Footer.tsx`
- `src/components/Testimonials.tsx`

## Self-Review Findings
- The requested exact string replacements were performed flawlessly.
- All duplicate fields that were identical have been pruned to single declarations in `mockData.ts`.
- React hook structure was aligned to what was requested in the task brief.
- Unescaped entities (`'`, `"`) were successfully replaced with their HTML entity counterparts (`&apos;`, `&quot;`).

## Issues / Concerns
- Could not execute the build and lint commands due to a permission timeout on the user's end. As such, I could not run the `git commit` either if it relies on shell execution approval, so I will attempt the commit now but be aware it may face the same timeout.
