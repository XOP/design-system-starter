# DSS Icons @ Design System Starter Template

> **@ds-starter/icons** is the part of the [Design System Starter (DSS) Template](https://github.com/XOP/design-system-starter)  
> The package is created for demo purposes and is not intended for production usage  
> See it in action:  
> - [DSS Storybook](https://ds-starter-storybook.vercel.app/)
> - [DSS Documentation](https://ds-starter-docs.vercel.app/)
> - [Example App](https://ds-starter-app-vite.vercel.app/)

## Overview

Icons is an optional package and naturally is the dependency for `@ds-starter/ui`.

## Installation

```sh
npm i @ds-starter/icons
```

## Usage

### Icon components

```tsx
import { IconArrowLeft } from '@ds-starter/icons';

// ...
<div>
  <IconArrowLeft />
</div>
```

When tree-shaking is supported you can benefit from dedicated import:

```tsx
import IconArrowLeft from '@ds-starter/icons/lib/IconArrowLeft';
```

### SVG import

Depending on the project settings SVG import can work differently.  
In basic cases result of import would be the image src:

```tsx
import arrowRightSrc from '@ds-starter/icons/svg/arrow-right.svg';

// ...

<figure>
  <img src={arrowRightSrc} alt="" />
</figure>
```

## Managing icons

It's all set up for maximum DX (Developer Experience). The process of adding an icon is straightforward.  
Place an SVG file in `/svg` folder and build the project.

```sh
pnpm build
```

That's it!

Two processes happen during this process.  
First - generation script is processing SVG files and generates new Icon components.  
Then - build process takes care of bundling and typings.

Generation is based on [SVGR](https://react-svgr.com/), that you can refer to further documentation and examples.

> Note that local commands don't consider workspace dependencies - make sure to build everything in advance.  
> Alternatively, use **global** `turbo` commands (i.e. `turbo dev`).  
> Explore [turbo docs](https://turbo.build/repo/docs/crafting-your-repository/running-tasks#using-global-turbo) for more information.

## References

- Icons package is using [Tabler Icons](https://tabler.io/icons) for demo purposes
- Components are generated with [React SVGR](https://react-svgr.com/)
- Build is powered by [tsup](https://tsup.egoist.dev/)
