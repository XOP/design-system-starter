# Example App (Vite TS) @ Design System Starter Template

> [https://ds-starter-app-vite.vercel.app/](https://ds-starter-app-vite.vercel.app/)

> See also: main [README](../../README.md)

## Overview

Current example app is the simple demonstration of real-life usage of Design System parts.

It implements the following dependencies:
- [@ds-starter/fonts](/packages/dss-fonts/) - Fonts
- [@ds-starter/icons](/packages/dss-icons/) - Iconography (tree-shakeable)
- [@ds-starter/ui](/packages/dss-ui/) - Core UI library (tree-shakeable)

and the following configs:
- [@ds-starter/tsconfig](/config/tsconfig/)
- [eslint-config-ds-starter](/config/eslint-config-ds-starter/)

## Technology 

Conceptually this app is a [Vite](https://vitejs.dev/)-powered SPA.  
To spice things up there are [tsParticles](https://github.com/tsparticles) and [jotai](https://jotai.org/) for quick state management.

Among other things app demonstrates a very simple theme switch.  
It's based on the html data-attribute toggle and works great for this use case.


## Usage

Development and build operations are standard and straightforward.  
Install the project and run the following commands from the `apps/example-vite-ts` path.

Development:
```sh
pnpm dev
```

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
> Alternatively, add a command to the project root (i.e. `turbo run dev --filter=./apps/example-vite`) or use **global** `turbo` commands (i.e. `turbo dev`).  
> Explore [turbo docs](https://turbo.build/repo/docs/crafting-your-repository/running-tasks#using-global-turbo) for more information.

## Extras

Buckle up, [Chewie](https://www.inverse.com/article/25768-hyperdrive-hyperspace-star-wars-science-fiction-space-travel-energy-efficient)!
