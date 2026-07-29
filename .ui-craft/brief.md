# 1. Product purpose

GoTruckCheck helps credentialed Clean Truck Check testers resell deadline monitoring and turn automatic compliance reminders into booked repeat tests.

# 2. Primary user

A 1–4 person California diesel-testing business, usually reading on a phone between field jobs and making buying decisions from plain money math rather than software jargon.

# 3. Principles

1. **Sell the service before the software.** Lead with the recurring line item the tester can add to invoices; product mechanics support that sale.
2. **Show the math, not adjectives.** Use real per-truck arithmetic, dates, and reminder intervals instead of unsupported claims.
3. **The tester stays the hero.** Messages come from their number and their business; GoTruckCheck is the quiet machine behind the work.
4. **One read, no translation.** Short sentences, familiar words, and an 8th-grade reading level beat SaaS language.
5. **Product proof beats decoration.** Real interface views carry the visual story; no fake testimonials, stock photos, or invented usage numbers.

# 4. Success metric for the surface

A credentialed tester understands within 30 seconds that GoTruckCheck can create monthly resale revenue and book repeat tests, then opens the early-access email with their business details prefilled.

# 5. Out of scope

- Does not imply affiliation with or approval by the California Air Resources Board.
- Does not promise CTC-VIS account management, test submission, or payment processing.
- Does not present invented customers, testimonials, or usage numbers.
- Does not sell a generic multi-plan SaaS subscription.
- Does not collect sensitive fleet or vehicle data on the marketing site.

# 6. Learned constraints

- **2026-07-28** — Keep navy `#1d4a9b` as the only marketing accent and reserve green `#2f9e57` for success/status. *Why:* this is the established product brand and green must retain operational meaning.
- **2026-07-28** — Use Inter for body copy and Montserrat 800 for display copy, with sentence case throughout. *Why:* the site must feel continuous with the supplied product.
- **2026-07-28** — No gradients, purple, decorative emoji, agency seals, or stock handshake photography. *Why:* plain visual proof builds more trust with this audience than startup decoration.
- **2026-07-29** — Keep every product screenshot inside the page container and give phone mockups visible breathing room. *Why:* oversized crops make the product feel cramped or accidentally broken instead of polished.
- **2026-07-29** — Scroll reveals must never be load-bearing: every `[data-reveal]` element is force-revealed after a timeout. *Why:* an IntersectionObserver that misses an entry left whole sections blank in fast scrolls and headless captures.
- **2026-07-29** — Keep the early-access form honest about its plumbing: with no mail provider configured it hands off to the visitor's email client rather than posting into a void. *Why:* a form that silently drops submissions costs more trust than a plain mailto link.
- **2026-07-29** — Do not use repeated eyebrow labels above marketing headlines or a standalone hero proof strip. *Why:* the headlines and product proof should stand on their own without template-like chrome.
- **2026-07-29** — Lead directly into the product demonstration instead of adding a standalone product manifesto. *Why:* repeating the value proposition before the screenshots slows the page and weakens the proof.
- **2026-07-29** — Avoid long narrative “why we built this” sections on the homepage. *Why:* this audience needs concise product proof, pricing, and trust details rather than an extended manifesto.
- **2026-07-29** — Never let flexbox stretch product screenshots away from their intrinsic aspect ratio. Crop the bottom when needed instead of compressing the image. *Why:* distortion makes otherwise sharp UI screenshots look blurred and broken.
- **2026-07-29** — Promote a deeper version of the logo green into the marketing accent at conversion and revenue moments. *Why:* navy remains the structural brand color, while a restrained green accent gives the page energy and connects action to business growth.
