# Example App (Vite TS) @ Design System Starter Template

> [https://ds-starter-app-vite.vercel.app/](https://ds-starter-app-vite.vercel.app/)

> See also: main [README](../../README.md)


## Overview

Current example app is the simple demonstration of real-life usage of Design System parts.

It implements the following dependencies:
- [@awsm/fonts](/packages/awsm-fonts/) - Fonts
- [@awsm/icons](/packages/awsm-icons/) - Iconography (tree-shakeable)
- [@awsm/ui](/packages/awsm-ui/) - Core UI library (tree-shakeable)

and the following configs:
- [@awsm/tsconfig](/config/tsconfig/)
- [eslint-config-awsm](/config/eslint-config-awsm/)


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
turbo dev
```

Build:
```sh
turbo build
```

ES Lint:
```sh
turbo lint
```

Note, that you can use `pnpm ...` command equivalents for the same operations if needed,  
but keep in mind that app dependencies have to be built in advance for successful run.

For example:
```sh
pnpm dev
```


## Extras

Buckle up, [Chewie](https://www.inverse.com/article/25768-hyperdrive-hyperspace-star-wars-science-fiction-space-travel-energy-efficient)!
