# Storybook @ Design System Starter Template

> [https://ds-starter-storybook.vercel.app/](https://ds-starter-storybook.vercel.app/)

> See also: main [README](../../README.md)

## Overview

[Storybook](https://storybook.js.org/) offers several capabilities for Design System development,  
most of all it's famous for UI components presentation in various variants, states and colors.

In early stages of Design System establishment Storybook plays another vital role - documentation portal,  
consolidating UI library components exposition along with installation and usage instructions.

> Current Storybook app is based on [Storybook 8](https://storybook.js.org/blog/storybook-8/).  
> However if you need or intend to use Storybook 7 (not 6 or earlier!) most of the settings will be the same.  
> The biggest difference will be in the [VRT configuration](#visual-regression-testing) due to `index.json` (`stories.json`) schema difference.

## Organization

There are several approaches to Storybook organization and usage, also within monorepo.  
Here, Storybook functions as facilitator and compiler of the documentation, that lives in the respective packages.

Practically, Storybook project does not contain a single story, but imports and organizes them.  
Configuration fetches stories from everything that needs visual documentation -  
`dss-fonts`, `dss-icons`, `dss-tokens` and `dss-ui`.
This of course can be modified and extended as needed - see [configuration](./.storybook/main.ts).  

## Configuration

Apart from packages, there are a lot of options that can be tweaked if needed.  
Most of the config is located in [main.ts](./.storybook/main.ts) and [preview.tsx](./.storybook/preview.tsx).  

### Plugins 

Amount of plugins is minimal on purpose and only focuses on the most important development features.  
Respective configuration for `a11y`, `backgrounds` and `viewport` can be found in [params](./.storybook/params) folder.

Themes configuration is located in the [preview.tsx](./.storybook/preview.tsx) in `decorators` array.  
Make sure to update that when changing themes settings.

### Customization

There are two similar configurations, responsible for component props table output and story controls.  
As current example library (`@ds-starter/ui`) depends on `react-aria` as the basis for custom UI library,  
there are some properties that are superfluous or redundant for the documentation purposes and can be safely hidden.

Extra controls ([excludedControls](./.storybook/config/excludedControls.ts)) can be tuned and hidden in the story controls panel,  
they are imported in the [preview.tsx](./.storybook/preview.tsx).

Extra properties ([excludedProps](./.storybook/config//excludedProps.ts)) can be tuned and hidden on the Overview page,  
those are used by the [main.ts](./.storybook/main.ts) in the `propFilter` function.

## Visual regression testing

Visual regression testing (VRT) is one of the most important testing layers for UI library.  
It gains importance with time, especially when it comes to some common tokens and design updates.

VRT is implemented with [Playwright](https://playwright.dev/).  
In the current setup there are no component-specific tests (though they can be easily added),  
but rather an overall multi-browser (or/and multi-breakpoint) testing.

### VRT Configuration

Take a look at the [components.spec.ts](./tests/components.spec.ts).  
There is only one, but powerful test. It's directly linked to the number of UI components and their stories.
For only 3 components against 2 browsers (desktop Chrome and iPhone Safari) test generates around ~60 screenshots (**!**).  
Naturally this would scale respectively, as traditional amount of components in mature Design System is around 40-50 items.  
It takes time, so for quicker but **shallow** testing you can limit VRT [configuration](./playwright.config.ts) to 1 browser.  

In addition, some stories might be redundant or not suitable for testing.  
To bypass VRT for specific stories you can add a `novrt` tag like so:

```tsx
export const VrtBypass: Story = {
  args: {
    ...Base.args,
  },
  tags: ['novrt']
};
```

Finally, you can completely replace the overall testing with atomic tests configuration and use [utils](./utils/) to only load particular stories from particular components.

`loadStory` would load a specific story for a specific component. The id-s of that stories can be found in the `storybook-static/index.json` (`stories.json` in Storybook 7) file after Storybook build.

> Note that `storybook-static` is replaced with `dist` output folder for more convenient work with Vercel CLI.

`loadDocs` on the contrary takes a screenshot of the Overview page. It saves a lot of time and bandwidth,  
however it's prone to false positives related to micro layout shifts. Imagine there are 20 component variants and something goes wrong with the first one so all other 19 are affected as well.

## Usage

Development and build operations are standard and straightforward.  
Install the project and run the following commands from the `apps/storybook` path.

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

Preview:
```sh
pnpm serve
```

Run VRT:
```sh
pnpm test
```

Update VRT snapshots:
```sh
pnpm test:update
```

> Note that local commands don't consider workspace dependencies - make sure to build everything in advance.  
> Alternatively, run project from the root (`pnpm dev`) or use **global** `turbo` commands (i.e. `turbo dev`).  
> Explore [turbo docs](https://turbo.build/repo/docs/crafting-your-repository/running-tasks#using-global-turbo) for more information.

## References

- [Storybook](https://storybook.js.org/)
- [Playwright](https://playwright.dev/)
