# DSS Tokens @ Design System Starter Template

## Overview

Design tokens package is the core dependency for `@ds-starter/ui`  
and very important for consistent design in the apps.

Design tokens are available in 2 formats - CSS custom properties (variables) and JS objects.

### Palette

JS export allows using color tokens as **plain** color values for respective themes, i.e. `rgb(91, 96, 98)`,  
and **references** to CSS variables, which is a more flexible approach to theming, i.e. `var(--awsm-color-neutral-base)`.

Naturally, in the latter case project should also import the corresponding CSS files.

### Configuration

Palette is generated with [Unicornix](https://www.npmjs.com/package/unicornix), a one-stop solution for the themeable accessible palettes.  
`unicornix.config.ts` contains a reasonable config that allows to easily modify base and supporting colors in multiple formats.

## Installation

> Note, installation instructions are for presentation purpose only.  
> The packages are not published and only used locally for now.

```sh
npm i @ds-starter/tokens
```

## Usage

As mentioned, there are different scenarios of how tokens can be utilized.

### CSS

```css
@import '@ds-starter/tokens/css/tokens.css';

/* ... */

body {
  font-size: var(--awsm-font-size-n);
  line-height: var(--awsm-line-height-normal);
  color: var(--awsm-color-content-regular);
}
```

### JS with CSS references

> Note that CSS references only apply to colors.

```tsx
import { tokens } from '@ds-starter/tokens';

// note, this import can be alternatively done via CSS
import '@ds-starter/tokens/css/tokens.css';

// ...

const AccentDiv = () => (
  <div style={{ background: tokens.color.accent.strong }}></div> // background: var(--awsm-color-accent-strong)
);
```

## JS with plain values

There is almost no changes in implementation,  
the only difference is named import.

There are 2 themes exported - **light** and **dark**.

```tsx
import { tokensLight as tokens } from '@ds-starter/tokens';

// ...

const AccentDiv = () => (
  <div style={{ background: tokens.color.accent.strong }}></div> // background: rgb(18, 103, 228)
);
```

## Development

After any tokens changes simply run build command:

```sh
pnpm build
```

If you want to preview changes without compilation, run generation script:

```sh
pnpm gen
```

## References

- Palette is generated with [Unicornix](https://www.npmjs.com/package/unicornix)
- Design tokens schema is inspired by [Design Tokens Generator](https://www.design-tokens.dev/)
- Build is powered by [Vite](https://vitejs.dev/)
