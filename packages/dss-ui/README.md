# DSS UI @ Design System Starter Template

> **@ds-starter/ui** is the part of the [Design System Starter (DSS) Template](https://github.com/XOP/design-system-starter)  
> The package is created for demo purposes and is not intended for production usage  
> See it in action:  
> - [DSS Storybook](https://ds-starter-storybook.vercel.app/)
> - [DSS Documentation](https://ds-starter-docs.vercel.app/)
> - [Example App](https://ds-starter-app-vite.vercel.app/)

## Overview

UI library is one of the essential pieces of Design System puzzle.  
Of course there are generic approaches that rather focus on patterns and CSS for web development,  
as well as there are libraries betting on web components for better cross-platform development.

In all cases, UI library is usually exported as a package and needs documentation.

### Technology

DSS UI is built on top of [react-aria](https://react-spectrum.adobe.com/react-aria/), accessibility-first React headless UI library,  
and it's compiled with [Vite](https://vitejs.dev/).  
For styling and demo purposes [vanilla-extract](https://vanilla-extract.style/) is used.

Note that your library organization can differ significantly, however **conceptually** it should not be too far away.  
You can replace [React](https://react.dev/) with [Vue](https://vuejs.org/) or [Solid](https://www.solidjs.com/), choose [styled components](https://styled-components.com/), [panda](https://panda-css.com/) or [CSS modules](https://github.com/css-modules/css-modules) for styling and bundle your library with [tsup](https://tsup.egoist.dev/) or [parcel](https://parceljs.org/) if you prefer.

Note that selected headless library ([react-aria](https://react-spectrum.adobe.com/react-aria/)) is great, but it's not a forced recommendation. It was selected to make a minimum reasonable demonstration and minimize the implementation churn.

Naturally your circumstances and tools of choice can vary quite a lot.

## Organization

Apart with some helper files and styling assets, a common component in DSS UI consists of the UI code, CSS code and `*.stories.*` file for [Storybook](https://storybook.js.org/), the essential development and documentation tool.

Storybook is set up as a [separate app](/apps/storybook/README.md), consolidating all stories across monorepo.

## Installation

```sh
npm i @ds-starter/ui
```

In the next step make sure to include CSS in your app or project to enable styling.

In JS:

```tsx
import '@ds-starter/ui/css/styles.css';
```

Or in CSS:

```css
@import '@ds-starter/ui/css/styles.css';
```

## Usage

```tsx
import { Switch } from '@ds-starter/ui';

// ...
<div>
  <Switch color="neutral">Toggle</Switch>
</div>
```

When tree-shaking is supported you can benefit from dedicated import:

```tsx
import Switch from '@ds-starter/ui/components/Switch/Switch';
```

## Development

Since development is powered by Storybook, there is no dev script in the project per se.  
The most reliable way to launch dev setup is to run it from root:

```sh
pnpm run dev
```

### Adding a Component

Adding a new component can be tedious, especially in the monorepo setup,  
as it has several files and is connected with [docs](/apps/docs/README.md) project.

The recommended way to scaffold a new component is by running a generator.  
Find full description in the main [README](/README.md).

### Other scripts

Install the project and run the following commands from the `packages/dss-ui` path.

Build:

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

- UI library is based on [react-aria](https://react-spectrum.adobe.com/react-aria/)
- Styling is done with [vanilla extract](https://vanilla-extract.style/)
- Documentation is made with [Storybook](https://storybook.js.org/)
- Build is powered by [Vite](https://vitejs.dev/)
