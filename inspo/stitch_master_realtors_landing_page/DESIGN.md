# Design System Document: Editorial Authority

## 1. Overview & Creative North Star: "The Heritage Curator"
This design system rejects the "commodity" look of modern real estate platforms in favor of a **High-End Editorial** experience. The Creative North Star is **"The Heritage Curator."** We are not just listing houses; we are curating a local legacy. 

The aesthetic moves away from rigid, boxy grids and instead embraces **intentional asymmetry**, wide-margin "breathing room," and layered tonal depth. By utilizing sophisticated typography scales and overlapping elements, we create a sense of established reliability that feels bespoke, not templated. The goal is to make every property feel like a feature story in a premium architectural magazine.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
This system uses color to define structure, moving away from primitive borders to create a more organic, integrated feel.

### Color Strategy
- **Primary (`#001e40`):** Our "Navy Trust." Use this for high-impact brand moments and deep-contrast backgrounds.
- **Tertiary (`#2a1c00` to `#e9c176`):** The "Warm Gold." Use sparingly for accents, high-level CTAs, or "Sold" badges to signify prestige.
- **Surface Tiers:** Use `surface-container-low` (`#f4f3f8`) for main page sections and `surface-container-lowest` (`#ffffff`) for floating cards to create a natural, "paper-on-desk" lift.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are prohibited for sectioning or containment. 
Boundaries must be defined solely through background color shifts. For example, a property grid in `surface-container-lowest` should sit atop a `surface-container-low` background. 

### Signature Textures & Gradients
- **The Depth Gradient:** For Hero sections, use a subtle linear gradient from `primary` (`#001e40`) to `primary-container` (`#003366`). This adds a "soul" to the navy that flat hex codes cannot achieve.
- **Glassmorphism:** For navigation bars or floating property filters, use `surface` colors at 80% opacity with a `20px` backdrop-blur. This ensures the UI feels like a premium layer of glass resting over high-quality photography.

---

## 3. Typography: Editorial Scale
We use a dual-font strategy to balance authority with modern readability.

*   **Display & Headlines (Manrope):** Chosen for its geometric stability and "established" feel.
    *   **Display-LG (3.5rem):** Use for hero statements. Tighten letter-spacing (-0.02em) for an authoritative look.
    *   **Headline-MD (1.75rem):** Use for property addresses.
*   **Body & Titles (Inter):** A high-legibility sans-serif that ensures clarity in data-heavy real estate listings.
    *   **Body-LG (1rem):** Standard for property descriptions. Use a generous line-height (1.6) to improve reading flow.
    *   **Label-MD (0.75rem):** Used for "Square Footage" or "Price per SqFt" metrics. Use all-caps with +0.05em tracking for a professional "blueprint" feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often too "digital." We use **Tonal Layering** to mimic physical presence.

- **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card placed on a `surface-container-low` section creates a soft, natural lift without the need for visual noise.
- **Ambient Shadows:** If a card must float (e.g., a "Contact Agent" sticky widget), use an extra-diffused shadow: 
    *   `box-shadow: 0 20px 40px rgba(26, 28, 31, 0.06);` 
    *   The shadow color is derived from `on-surface` (`#1a1c1f`) at a very low opacity, mimicking natural light.
- **The "Ghost Border" Fallback:** In high-density data tables where separation is critical, use the `outline-variant` (`#c3c6d1`) at **15% opacity**. This provides a "hint" of a boundary without breaking the editorial flow.

---

## 5. Components

### Cards & Property Listings
- **Rule:** No dividers. Use `2rem` of vertical white space to separate content blocks.
- **Visuals:** Images should use the `lg` (0.5rem) roundedness scale. Overlap a small `tertiary-container` price tag across the corner of the image for an intentional, layered look.

### Buttons
- **Primary:** `primary` background with `on-primary` text. Use `md` (0.375rem) corner radius. 
- **Secondary (The Editorial Button):** A "Ghost" style using a subtle `surface-container-high` background and `primary` text. No border.
- **States:** On hover, primary buttons should transition to `primary-container`.

### Input Fields
- **Style:** Understated. Use `surface-container-highest` as the background with no border. 
- **Focus State:** Transition the background to `surface-container-lowest` and add a 1px "Ghost Border" using the `primary` color at 30% opacity.

### Navigation (The Signature Bar)
- Use a "Floating" style. Instead of a full-width bar, use a centered container with `9999px` (full) roundedness, a `surface` background at 85% opacity, and a subtle `backdrop-blur`. This makes the brand feel modern and agile.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts (e.g., a large image on the left with text offset slightly higher on the right).
*   **Do** prioritize high-quality architectural photography; the UI is a frame for the property.
*   **Do** use `tertiary-fixed` (Gold) for "Trust Signals" like "Local Expert Since 1990" or "Verified Listing."

### Don’t:
*   **Don't** use 100% black. Always use `on-background` (`#1a1c1f`) for text to maintain a premium, ink-on-paper feel.
*   **Don't** use standard "drop shadows" on every card. Rely on background color shifts first.
*   **Don't** cram information. If a page feels full, increase the white space by 20%. Reliability is conveyed through the luxury of space.