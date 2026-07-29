# GoTruckCheck token decisions

## Primitive

- **Navy:** `#1d4a9b`; deep `#173e85`; tint `#edf2fb`
- **Green (status only):** `#2f9e57`; tint `#e9f6ef`
- **Red:** `#d0453f`; amber `#b54708`
- **Ink:** `#14243e`; secondary `#667085`; tertiary `#98a2b3`
- **Canvas:** `#f6f7f9`; app canvas `#f2f4f7`; white `#ffffff`
- **Display:** Montserrat 800
- **Body:** Inter 400–700
- **Spacing:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- **Radius:** 6px controls, 10px cards, 14px panels, 20px feature frames, full pills
- **Motion:** 120ms fast, 220ms interaction, 400ms one-time reveal, `cubic-bezier(.16, 1, .3, 1)`; transform and opacity only

## Semantic

- **Page:** canvas background, ink foreground
- **Raised:** white background with a cool gray hairline
- **Accent:** navy background, white foreground; deep navy hover
- **Success:** green text/tint; never decorative
- **Focus:** navy 2px outline with white offset
- **Muted:** secondary ink; tertiary only for nonessential metadata

## Component

- **Primary button:** navy, 6px radius, 48px minimum height, 18px horizontal padding
- **Secondary button:** white, navy text, gray border, 48px minimum height
- **Card:** 10–20px radius by scale, hairline border, layered ambient/direct shadow
- **Input/range:** 44px minimum target, visible navy focus ring
- **Section:** 96–128px desktop rhythm, 72–88px mobile rhythm
- **Container:** 1180px maximum with 24px mobile gutters
