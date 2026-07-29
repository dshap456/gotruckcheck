# GoTruckCheck marketing site

Marketing and early-access site for GoTruckCheck, built with Next.js and deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

The canonical production domain is `https://www.gotruckcheck.com`.

The early-access CTA opens a prefilled email to the project owner. No visitor data is stored by this site.

## Compliance note

GoTruckCheck is not affiliated with the California Air Resources Board. Product copy must not imply CARB approval, affiliation, or test-submission functionality.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Marketing page: hero, money math, how it works, product, pricing, why, data handling, FAQ, early-access form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/api/early-access` | Early-access intake (POST) |

`lib/site.ts` holds the contact address, nav items, FAQ entries, and the pricing
inclusion list. The FAQ JSON-LD is generated from the same array the page
renders, so the two cannot drift.

## Early-access form

The form in the `#early-access` section has two modes, chosen at render time:

- **`RESEND_API_KEY` set** — the form POSTs to `/api/early-access`, which sends
  the submission by email and shows an in-page confirmation.
- **No key** — the form composes a prefilled message and hands it to the
  visitor's email client, so a submission is never silently dropped.

Optional overrides: `EARLY_ACCESS_FROM` (verified sender, defaults to the Resend
sandbox address) and `EARLY_ACCESS_TO` (recipient, defaults to the contact
address in `lib/site.ts`).
