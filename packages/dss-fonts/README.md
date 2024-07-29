# DSS Fonts @ Design System Starter Template

> **@ds-starter/fonts** is the part of the [Design System Starter (DSS) Template](https://github.com/XOP/design-system-starter)  
> The package is created for demo purposes and is not intended for production usage  
> See it in action:  
> - [DSS Storybook](https://ds-starter-storybook.vercel.app/)
> - [DSS Documentation](https://ds-starter-docs.vercel.app/)
> - [Example App](https://ds-starter-app-vite.vercel.app/)

## Overview

Fonts package is optional and created for convenient fonts management.  
In most cases it makes sense to setup custom loading, you will need to take care of fonts delivery.  
However for [quick hacking or dev-oriented projects](https://www.zachleat.com/web/web-font-data-uris/) base64-encoded files can work just fine.

## Installation

```sh
npm i @ds-starter/fonts
```

## Usage

### Base64 fonts

```tsx
import '@ds-starter/fonts/css/fonts.css';
```

### Google Fonts helper

> Note, this component is supposed to be used on server side.

```tsx
import { GoogleFonts } from '@ds-starter/fonts';

// ...

<html>
  <head>
    <GoogleFonts weights={[400, 700]} />
  </head>
</html>
```

**Interface**

```ts
interface FontsProps {
  // font-weights
  weights: number[] | string[];
  // font-display method, 'swap' by default
  display?: 'swap' | 'auto' | 'block' | 'fallback' | 'optional';
  // use of preconnect, true by default
  preconnect?: boolean;
}
```

## Development

To build the package run the standard command:

```sh
pnpm build
```

Lint:

```sh
pnpm lint
```

Format:

```sh
pnpm format
```

> Note that local commands don't consider workspace dependencies - make sure to build everything in advance.  
> Alternatively, use **global** `turbo` commands (i.e. `turbo dev`).  
> Explore [turbo docs](https://turbo.build/repo/docs/crafting-your-repository/running-tasks#using-global-turbo) for more information.

## References

- Fonts by [Google Fonts](https://fonts.google.com/specimen/Play)
- Build is powered by [Vite](https://vitejs.dev/)
- Fonts Loading Strategies by [Zach Leatherman](https://www.zachleat.com/web/comprehensive-webfonts/)
