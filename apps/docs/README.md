# Documentation Website @ Design System Starter Template

> [https://ds-starter-docs.vercel.app/](https://ds-starter-docs.vercel.app/)

> See also: main [README](../../README.md)

## Mission

Documentation is essential to solid Design System architecture.  
In the early stages of development a dedicated website might be an overkill due to lack of time and resources.  
However further Storybook and Figma start to lack presentation, whereas it's important for Design System adoption.

Documentation website can help solve this and other problems.  
For one - it becomes a gateway to more specific documentation (design, development).  
What's more - user-friendly markdown format allows to easily add, format and organize new documents.

## Overview

DSS Docs is powered by [Astro](https://astro.build/) enhanced with [nanostores](https://github.com/nanostores/nanostores) and [store2](https://github.com/nbubna/store#readme) for extra convenience. Structure and design are minimalistic on purpose and provide a great start for further development.

There are 2 kinds of documentation featured in the app: Articles and Components.  

### Articles 

Articles are standalone items organized in collections with corresponding navigation.  
To add an article in existing collection just drop a new markdown file `icons.md` into `src/content/core`, i.e.:

```txt
---
title: 'Iconography'
---

## Icons

Icons are a crucial part of any design system or product experience.
```

File will be discovered by Astro during development or build stage and appear in the sidebar navigation.

### Components

Components documentation consists of interactive examples and static articles.  
Take a look at the Button example in `src/content/components/Button`.

There is a mandatory `index.mdx` file and and optional `usage.mdx` file.  
The names are self-explanatory. Index represents the first page with the examples, whereas Usage is the article explaining component usage nuances, do-s and don't-s and so on.

What you won't find in these MDX files is the coded examples themselves.  
Examples in the form of storybook stories are conveniently loaded from the `dss-ui` package.  

Have a look at the [useStoryLoad](/apps/docs/src/shared/hooks/useStoryLoad.ts) hook.  
Along with the path to the package it's relying on the following properties, both defined in frontmatter data in `index.mdx`:
```txt
---
...
component: 'Button'
dir: 'Button'
---
```

Here, `component` prop is the file name and `dir` is the folder name in case it's different.  
Other frontmatter attributes are specific to the DSS Docs and allow to display and organize component better:
```txt
---
title: 'Button'
page: 'Examples'
group: 'Form'
...
---
```

In this case `title` is the component's page heading, `page` is the organization attribute for component sub-navigation and `group` refers to the component's categorization. Both pages names and components categories are defined in the [globals](/apps/docs/src/shared/globals.ts) file.

### Adding Documentation

Adding a component manually to the docs can be tedious.  
One option is to copy-paste an example and modify as needed.  

However there's a better way involving code generation.  
Find full description in the main [README](../../README.md).

## Usage

Development and build operations are standard and straightforward.  
Install the project and run the following commands from the `apps/docs` path.

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
> Alternatively, add a command to the project root (i.e. `turbo run dev --filter=./apps/docs`) or use **global** `turbo` commands (i.e. `turbo dev`).  
> Explore [turbo docs](https://turbo.build/repo/docs/crafting-your-repository/running-tasks#using-global-turbo) for more information.

## Extras

A standalone [awsm-docs](https://github.com/XOP/awsm-docs) project focuses on the documentation website within monorepo.  
It is slightly lean and might be the better option to start with, if docs are the primary goal for you.
