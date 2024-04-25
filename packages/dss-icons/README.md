# AWSM Icons @ Design System Starter Template


## Overview

Icons is an optional package and naturally is the dependency for `@awsm/ui`.


## Installation

> Note, installation instructions are for presentation purpose only.  
> The packages are not published and only used locally for now.

```sh
npm i @awsm/icons
```


## Usage

### Icon components

```tsx
import { IconArrowLeft } from '@awsm/icons';

// ...
<div>
  <IconArrowLeft />
</div>
```

When tree-shaking is supported you can benefit from dedicated import:

```tsx
import IconArrowLeft from '@awsm/icons/lib/IconArrowLeft';
```

### SVG import

Depending on the project settings SVG import can work differently.  
In basic cases result of import would be the image src:

```tsx
import arrowRightSrc from '@awsm/icons/svg/arrow-right.svg';

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

or 
```sh
turbo build
```

That's it!

Two processes happen during this process.  
First - generation script is processing SVG files and generates new Icon components.  
Then - build process takes care of bundling and typings.

Generation is based on [SVGR](https://react-svgr.com/), that you can refer to further documentation and examples.


## References

- Icons package is using [Tabler Icons](https://tabler.io/icons) for demo purposes
- Components are generated with [React SVGR](https://react-svgr.com/)
- Build is powered by [tsup](https://tsup.egoist.dev/)
