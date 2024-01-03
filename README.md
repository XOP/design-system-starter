# Design System Starter Template

## About

Design System is the complex organizational entity, allowing for multiple proven benefits but coming with several caveats.  
There are a couple of things that require consideration from development perspective - architecture and growth pace, both interconnected. It is very important to **start small**, and it's also very important to outline a future Design System early, preventing scalability and growth chaos.

Current Template allows for **better technology shaping** from the start. There are some foundational modules, however it's not necessary to maintain all of them early. Since you know where this is going, you just need to plan and execute accordingly - start with required parts and add more when needed.


## Overview

Design System Template consists of number of packages, as well apps, having various purposes.  
All packages (expect configs) and apps have their dedicated README.md file containing more information about organization, scripts etc.

Primary framework for the template is [React](https://react.dev/).  
It is not opinionated nor forced recommendation, it's for demo purpose only.  
Another staple of the DS Template is [Typescript](https://www.typescriptlang.org/).

Now let's see what project consists of and what technologies are under the hood.


## Packages

### UI Library - [awsm-ui](/packages/awsm-ui/README.md)

Primary module. It is hard to imagine a modern Design System without UI module.  
Template UI is based on the headless [react-aria](https://react-spectrum.adobe.com/react-aria/) library.

### Design Tokens - [awsm-tokens](/packages/awsm-tokens/README.md)

Design Tokens in a separate module provide more flexibility for the clients not using the UI Library. It provides styling capabilities and consistency at the same time. It is easy to notice how quickly tokens become an essential dependency to nearly all packages and apps.

### Icons - [awsm-icons](/packages/awsm-icons/README.md)

Secondary module, that is not usually separated from the very beginning. However it makes sense further to maintain a dedicated package. Icons offer a simple and efficient process of adding an Icon to the Design System setup.

### Fonts - [awsm-fonts](/packages/awsm-fonts/README.md)

Another secondary module, that is exactly what it's named after. Fonts distribution can be done very differently and it's just one of the ways to support it. Find more details in the [documentation](/packages/awsm-fonts/README.md).

### Typescript Config - [awsm-tsconfig](/packages/awsm-tsconfig/package.json)

There are 2 essential configurations - `lib-js` and `lib-react`.  
Easy to notice that the latter should be used when framework is utilized.

### ESLint Config - [eslint-config-awsm](/packages/eslint-config-awsm/package.json)

ESLint config is composed with minimum amount of opinionated customizations, providing a solid template for further modifications.


## Apps

### Storybook - [storybook](/apps/storybook/README.md)

> [Deployed Demonstration](https://ds-starter-storybook.vercel.app/)

Primary app. [Storybook](https://storybook.js.org/) is an essential tool for development, debugging and of course documenting UI.  
Apart from consolidating all stories from the packages it also offers VRT capabilities together with [Playwright](https://playwright.dev/).

### Documentation Website - [docs](/apps/docs/README.md)

> [Deployed Demonstration](https://ds-starter-docs.vercel.app/)

Dedicated documentation website gives your Design System a nice touch of customization and signifies a certain maturity stage.  
Apart from components presentation it also holds articles on patterns, typography, color system and everything else that is essential for your Design System.

### Example with Vite and Typescript - [example-vite-ts](/apps/example-vite-ts/README.md)

> [Deployed Demonstration](https://ds-starter-app-vite.vercel.app/)

Example app is a great way to give your Design System a spin, collect insights and discover certain issues at the early stages. If you have multiple modules, it is also an idea for creating a demonstration of how they implement and collaborate together. 


## Technology

First things first, the monorepo is created with [pnpm](https://pnpm.io/) and [Nx](https://nx.dev/). Don't get confused by the `turbo.json` file, it's there as [turborepo](https://turbo.build/repo) is used alongside for generation functionality (see below).

At this point it's worth mentioning that nearly **all technologies can be substituted** in one way or another with matching analogues according to your preferences or project requirements. Nothing extraordinary is used in any package or app, in the end it's all HTML, JS and CSS, however there is a _certain bias_ towards certain technologies.

### Development

- [Storybook](https://storybook.js.org/)

### Libraries

- [react-aria](https://react-spectrum.adobe.com/react-aria/)

### CSS

- [vanilla-extract](https://vanilla-extract.style/)
- [CSS modules](https://github.com/css-modules/css-modules)
- [clsx](https://www.npmjs.com/package/clsx)
- [normalize.css](https://www.npmjs.com/package/@csstools/normalize.css)

### Building

- [Vite](https://vitejs.dev/)
- [tsup](https://tsup.egoist.dev/)

### Documentation

- [Astro](https://astro.build/)

### Testing

- [Playwright](https://playwright.dev/)

### State management

- [nanostores](https://github.com/nanostores)
- [jotai](https://jotai.org/)
- [store2](https://www.npmjs.com/package/store2)

### SVG processing

- [SVGR](https://react-svgr.com/)

### Cool stuff

- [polished](https://polished.js.org/)
- [tsParticles](https://particles.js.org/)

### Notable mentions

- [Design Tokens Generator](https://www.design-tokens.dev/)
- [Tailwind Color Generator](https://uicolors.app/create)


## Adding Components

The most effective way to scaffold a new Design System component is via generator.  
Here we rely on [turbo generation](https://turbo.build/repo/docs/core-concepts/monorepos/code-generation#custom-generators) functionality. Configuration files are located in the [dedicated folder](/turbo/generators/config.ts).

Run generator:
```sh
pnpm gen:component
```

When all operations succeed you should see changes in `packages/awsm-ui` and `apps/docs`.  
In UI you would find a scaffolding for the new component (note, for demo purposes components are based on [react-aria](https://react-spectrum.adobe.com/react-aria/), naturally your approach may vary significantly), including styling with [vanilla-extract](https://vanilla-extract.style/) (similarly here, you styling approach can be very different) and [Storybook](https://storybook.js.org/) stories.  
In the Docs you would find new files that are sufficient for adding a component to the docs website.  
All you need to do now is to fill the new files with content!


## Scripts

All scripts are ran from the **root path**.

### Build

Build scripts are separated due to assumed different release process.

Packages build:
```sh
pnpm build:pck
```

Apps build:
```sh
pnpm build:app
```

### Linting

Linting is implemented with [ESLint](https://eslint.org/) and using a custom config, separated in one of the [packages](/packages/eslint-config-awsm/).

Both packages and apps:
```sh
pnpm lint
```

Only packages:
```sh
pnpm lint:pck
```

Only apps:
```sh
pnpm lint:app
```

### Formatting

Formatting is implemented with [Prettier](https://prettier.io/) and is very minimal by default.  
Essential config can be located in [.prettierrc.cjs](/.prettierrc.cjs) and [.prettierignore](/.prettierignore).

Check and log formatting:
```sh
pnpm lint:format-log
```

Check and fix formatting:
```sh
pnpm lint:format-fix
```

### Dependencies sync

[Syncpack](https://jamiemason.github.io/syncpack/) provides granular control over dependencies, which can get out of control quite soon in a big monorepo setup. Configuration can be located in [.syncpackrc.cjs](/.syncpackrc.cjs).

Fix mismatches:
```sh
pnpm syncpack
```

List mismatches for inspection:
```sh
pnpm syncpack:list
```

### Changelog

Changelog automation can be implemented in a number of ways, here we rely on [Changesets](https://github.com/changesets/changesets/tree/main). Configuration can be found in the [dedicated folder](/.changeset/config.json). Examples of the changelog generation are in the CHANGELOG.md files. Note that real-world logs will also contain commit data and links.

Generate changesets (changeset files can be committed if needed):
```sh
pnpm change:gen
```

Bump the version(s):
```sh
pnpm change:version
```

Publish modules:
```sh
pnpm change:publish
```


## [LICENSE](./LICENSE)
