# Design System Starter Template

## About

Design System is the complex organizational entity, allowing for [multiple proven benefits but coming with several caveats](https://medium.com/@genedesign/design-systems-beyond-basics-unveiling-nuances-and-oversights-6c85807b1c26).  
There are a couple of things that require consideration from development perspective - architecture and growth pace, both interconnected. It is very important to **start small**, and it's also very important to outline a future Design System early, preventing scalability impediments and spontaneous growth drawbacks.

**Design System Starter** (DSS for short) Template allows for **better technology shaping** from the start. There are some foundational modules, however it's not necessary to maintain all of them from the get go. Since you already know where the product is headed, you just need to plan and execute accordingly - start with required parts and add more when needed.

## Overview

Design System Template consists of number of packages, configs and apps, having various purposes.  
All packages and apps have their dedicated README.md file containing more information about organization, scripts etc.

Primary framework for the template is [React](https://react.dev/).  
It is not opinionated nor forced recommendation, it's for demo purpose only.  
Another staple of the DS Template is [Typescript](https://www.typescriptlang.org/).

### Features at a glance:

- ⭐️ Separate packages for UI, Icons, Design Tokens and more
- ⭐️ Automated icons generation from SVG
- ⭐️ Automated CSS generation from JS values
- 🚀 Example app to see everything in action
- 🚀 Storybook development and interactive documentation
- 🚀 Documentation website, auto-documenting components
- 🛠️ Visual Regression Testing for UI library
- 🛠️ Changelog generation and automated release process
- 🛠️ Packages versions synchronization
- 🛠️ Quick and reasonable linting and formatting

### Brief technologies overview:

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/) (ver 8)
- [Turborepo](https://turbo.build/repo)
- [Syncpack](https://jamiemason.github.io/syncpack/guide/getting-started/)
- [Vite](https://vitejs.dev/)
- [Astro](https://astro.build/) (ver 4)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright](https://playwright.dev/)
- [Biome](https://biomejs.dev/)

Now let's dig deeper and explore the modules in detail.

---

## Packages

### UI Library - [dss-ui](/packages/dss-ui/README.md)

Primary module. It is hard to imagine a modern Design System without UI module.  
Template UI is based on the headless [react-aria](https://react-spectrum.adobe.com/react-aria/) library.

### Design Tokens - [dss-tokens](/packages/dss-tokens/README.md)

Design Tokens in a separate module provide more flexibility for the clients not using the UI Library. It provides styling capabilities and consistency at the same time. It is easy to notice how quickly tokens become an essential dependency to nearly all packages and apps.

### Icons - [dss-icons](/packages/dss-icons/README.md)

Secondary module, that is not usually separated from the very beginning. However it makes sense further to maintain a dedicated package. Icons offer a simple and efficient process of adding an Icon to the Design System setup.

### Fonts - [dss-fonts](/packages/dss-fonts/README.md)

Another secondary module, that is exactly what it's named after. Fonts distribution can be done very differently and it's just one of the ways to support it. Find more details in the [documentation](/packages/dss-fonts/README.md).

## Configs 

### Typescript Config - [tsconfig](/tsconfig/package.json)

There are 2 essential configurations - `lib-js` and `lib-react`.  
Easy to notice that the latter should be used when framework is utilized.

## Apps

### Storybook - [storybook](/apps/storybook/README.md)

> [Deployed Demonstration](https://ds-starter-storybook.vercel.app/)

Primary app. [Storybook](https://storybook.js.org/) is an essential tool for development, debugging and of course documenting UI.  
Apart from consolidating all stories from the packages it also offers VRT capabilities together with [Playwright](https://playwright.dev/).

### Documentation Website - [docs](/apps/docs/README.md)

> [Deployed Demonstration](https://ds-starter-docs.vercel.app/)

Dedicated documentation website gives your Design System a nice touch of customization and signifies a certain maturity stage.  
Apart from components presentation it also holds articles on patterns, typography, color system and everything else that is essential for your Design System.

### Example with Vite and Typescript - [example-vite](/apps/example-vite/README.md)

> [Deployed Demonstration](https://ds-starter-app-vite.vercel.app/)

Example app is a great way to give your Design System a spin, collect insights and discover certain issues at the early stages. If you have multiple modules, it is also an idea for creating a demonstration of how they implement and collaborate together. 

---

## Technology

First things first, the monorepo is created with [pnpm](https://pnpm.io/) and [turbo](https://turbo.build/repo). Both technologies work in synergy for maximum efficiency and developer experience.

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

The whole [documentation](/apps/docs/README.md) website is running on Astro.

- [Astro](https://astro.build/)

### Testing

UI library is tested in 2 ways - component testing and visual testing.  
Note that component testing is part of [ui package](/packages/dss-ui/tests/setup.ts), whereas VRT is the part of [Storybook app](/apps/storybook/playwright.config.ts).

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright](https://playwright.dev/)

### State management

State management is not essential, more of an effective and easy enhancement for the project.  
Explore [docs](/apps/docs/src/store/store.ts) and [example app](/apps/example-vite/src/components/Space/Space.tsx) to learn more.

- [nanostores](https://github.com/nanostores)
- [jotai](https://jotai.org/)
- [store2](https://www.npmjs.com/package/store2)

### SVG processing

SVG processing is required for producing [icons package](/packages/dss-icons/scripts/generateIcons.cts).

- [SVGR](https://react-svgr.com/)

### Linting and formatting

Biome takes care of both linting and formatting at blazing speeds.  
Main configuration is located at the [project root](/biome.json) and extended on the package level.

- [Biome](https://biomejs.dev/)

### Cool stuff

- [tsParticles](https://particles.js.org/)

### Color and Tokens

- [Unicornix Color Themes](https://www.npmjs.com/package/unicornix)
- [Design Tokens Generator](https://www.design-tokens.dev/)

## Adding Components

The most effective way to scaffold a new Design System component is via generator.  
Here we rely on [turbo generation](https://turbo.build/repo/docs/core-concepts/monorepos/code-generation#custom-generators) functionality. Configuration files are located in the [dedicated folder](/turbo/generators/config.ts).

Run generator:
```sh
pnpm gen:component
```

When all operations succeed you should see changes in `packages/dss-ui` and `apps/docs`.  
In [UI](/packages/dss-ui/src/components/) you would find a scaffolding for the new component (note, for demo purposes components are based on [react-aria](https://react-spectrum.adobe.com/react-aria/), naturally your approach may vary significantly), including styling with [vanilla-extract](https://vanilla-extract.style/) (similarly here, you styling approach can be very different) and [Storybook](https://storybook.js.org/) stories.  

In the [Docs](/apps/docs/src/content/components/) you would find new files that are sufficient for adding a component to the docs website.  

All you need to do now is to fill the new files with content!

## Scripts

Scripts can be ran either from a project/app or the root path.  
Note that root scripts mostly are global by design and would target all packages and apps.

There are a couple of exceptions. For example, to run Storybook in dev mode: 
```sh
pnpm dev
```

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

### Test

There are different kinds of tests involved, some require building first.

Run component and visual tests:
```sh
pnpm test
```

### Linting and Formatting

Both linting and formatting commands follow [Biome CLI](https://biomejs.dev/reference/cli/) without any customizations.

Lint everything:
```sh
pnpm lint
```

Format everything:
```sh
pnpm format
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

### Changelog and Release

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
pnpm release
```

### Automation

Project uses Github [actions](/.github/actions/) and [workflows](/.github/workflows/) for standard operations, such as post-merge checks, deployment of apps and release of the packages. 

Workflows use the following secrets set up in the repo:

- `NPM_TOKEN` - NPM authorization token, used for packages publishing
- `VERCEL_ORG_ID` - Vercel organization ID, used for deployment of apps
- `VERCEL_PROJECT_STORYBOOK_ID` - Vercel Project ID for Storybook application, used for deployment
- `VERCEL_PROJECT_DOCS_ID` - Vercel Project ID for Docs application, used for deployment
- `VERCEL_PROJECT_EXAMPLE_VITE_ID` - Vercel Project ID for Example Vite application, used for deployment
- `VERCEL_TOKEN` - Vercel authorization token, used for all Vercel operations

## License

This project is licensed under the [MIT License](./LICENSE)
