# DSS Fonts @ Design System Starter Template

## Overview

Fonts package is optional and created for convenient fonts management.  
In most cases it makes sense to setup custom loading, you will need to take care of fonts delivery.  
However for [quick hacking or dev-oriented projects](https://www.zachleat.com/web/web-font-data-uris/) base64-encoded files can work just fine.


## Installation

> Note, installation instructions are for presentation purpose only.  
> The packages are not published and only used locally for now.

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
turbo build
```

For ES lint:
```sh
turbo lint
```

Equally, `pnpm ...` command would yield the same results, i.e.:   

```sh
pnpm build
```


## References

- Fonts by [Google Fonts](https://fonts.google.com/specimen/Play)
- Build is powered by [Vite](https://vitejs.dev/)
- Fonts Loading Strategies by [Zach Leatherman](https://www.zachleat.com/web/comprehensive-webfonts/)