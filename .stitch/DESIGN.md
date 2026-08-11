---
name: NØIR
colors:
  primary: "hsl(0, 0%, 98%)"
  secondary: "hsl(215, 10%, 40%)"
  accent: "hsl(0, 0%, 98%)"
  background-base: "hsl(0, 0%, 3%)"
  background-surface: "hsl(0, 0%, 7%)"
  text-primary: "hsl(0, 0%, 98%)"
  text-secondary: "hsl(0, 0%, 60%)"
  border-subtle: "hsl(0, 0%, 12%)"
  border-strong: "hsl(0, 0%, 22%)"
  success: "hsl(142, 71%, 45%)"
  warning: "hsl(38, 92%, 50%)"
  error: "hsl(354, 84%, 57%)"
  info: "hsl(199, 89%, 48%)"
typography:
  font-family-body: "Inter, sans-serif"
  font-family-heading: "Outfit, sans-serif"
  font-family-mono: "JetBrains Mono, monospace"
  body-md:
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  heading-lg:
    fontSize: "32px"
    fontWeight: 300
    lineHeight: "1.2"
  heading-display:
    fontSize: "64px"
    fontWeight: 200
    letterSpacing: "-0.02em"
shapes:
  rounded-sm: "2px"
  rounded-md: "4px"
  rounded-lg: "8px"
  rounded-full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background-base}"
    rounded: "{shapes.rounded-sm}"
  card:
    backgroundColor: "{colors.background-surface}"
    borderColor: "{colors.border-subtle}"
    rounded: "{shapes.rounded-sm}"
---

## Overview
NØIR is a high-end luxury sneaker house. The visual design system relies on a void-like deep dark mode, high-contrast typography, and architectural geometry to evoke a sense of futuristic precision, luxury fashion, and exclusive craft.

## Colors
- **Primary (`{colors.primary}`):** Frost White. Used for core typography, primary buttons, and structural elements.
- **Secondary (`{colors.secondary}`):** Titanium Grey. Used for secondary text, metadata, and technical annotations.
- **Accent (`{colors.accent}`):** Pure White. Used sparingly for interactive hover states and focus rings to maintain a strictly monochrome, luxury feel.
- **Background Base (`{colors.background-base}`):** Void Black. The deep canvas for all cinematic presentations.
- **Background Surface (`{colors.background-surface}`):** Matte Carbon. Used for slightly elevated cards and UI containers.

## Typography
- **Headings:** `Outfit`. Used in thin/light weights (200-300) for a premium, editorial, futuristic feel.
- **Body:** `Inter`. Used for all paragraph text to ensure maximum legibility and precision.
- **Monospace:** `JetBrains Mono`. Used for sneaker specs, material codes (e.g., `NR-V1-CRB`), and UI metadata.

## Layout
- 8pt spatial grid system (8px, 16px, 24px, 32px, 48px, 64px, 128px).
- Generous use of negative space. UI elements should never feel crowded; the product is the hero.
- Maximum container content width: `1440px` to support cinematic wide-screen layouts.

## Elevation & Depth
- Cinematic, harsh lighting effects rather than soft drop shadows. 
- Subtle glassmorphism (`backdrop-filter: blur(24px)`) for fixed navigation overlays to keep focus on the product imagery beneath.

## Shapes
- Minimal corner radii. `2px` or `4px` maximum to retain an architectural, engineered precision. Never use pill-shaped elements for containers or primary CTAs.

## Components
- **Primary Buttons:** Stark white background with void black text. Hover state inverses or adds a metallic sheen. Sharp corners (`2px` radius).
- **Cards:** Matte carbon surface with barely visible subtle borders.

## Do's and Don'ts
- ✅ **DO** rely on extreme whitespace and large, thin typography to convey luxury.
- ✅ **DO** use exact HSL tokens for consistent color contrast.
- ❌ **DON'T** use saturated colors for UI elements; color should only come from the product photography or 3D renders.
- ❌ **DON'T** use soft, rounded UI elements (pill shapes) which contradict the architectural precision of the brand.
