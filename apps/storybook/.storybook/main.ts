import { join, dirname } from 'node:path';
import { mergeConfig } from 'vite';

import type { StorybookConfig } from '@storybook/react-vite';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import { excludedProps } from './config/excludedProps';

const packages = ['dss-tokens', 'dss-fonts', 'dss-icons', 'dss-ui'];

const introPath = '../stories/**/*.mdx';

const storiesPaths = packages.map(
  (dir) => `../../../packages/${dir}/src/**/*.stories.@(js|jsx|ts|tsx)`,
);

const docsPaths = packages.map((dir) => `../../../packages/${dir}/**/*.mdx`);

const docgenPaths = packages.map((dir) => `../../packages/${dir}/src/**/*.tsx`);

const config: StorybookConfig = {
  stories: [introPath, ...storiesPaths, ...docsPaths],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  docs: {
    autodocs: 'tag',
    defaultName: 'Overview',
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        vanillaExtractPlugin({
          identifiers: ({ hash }) => `dss_${hash}`,
        }),
      ],
    });
  },

  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    // this is required for correct argTypes processing
    reactDocgenTypescriptOptions: {
      include: docgenPaths,
      shouldExtractValuesFromUnion: true,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return (
            // when NOT using pnpm or/and react-aria make sure to adjust the regEx
            !/node_modules\/.pnpm\/(?!react-aria)/.test(prop.parent.fileName) &&
            !excludedProps.includes(prop.name)
          );
        }

        return false;
      },
    },
  },
};

// biome-ignore lint: *
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default config;
