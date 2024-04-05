import { join, dirname } from 'path';
import { mergeConfig } from 'vite';

import type { StorybookConfig } from '@storybook/react-vite';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import { excludedProps } from './config/excludedProps';

const packages = ['awsm-tokens', 'awsm-fonts', 'awsm-icons', 'awsm-ui'];

const storiesPaths = packages.map(
  (dir) => `../../../packages/${dir}/src/**/*.stories.@(js|jsx|ts|tsx)`,
);

const docsPaths = packages.map((dir) => `../../../packages/${dir}/**/*.mdx`);

const docgenPaths = packages.map((dir) => `../../packages/${dir}/src/**/*.tsx`);

const config: StorybookConfig = {
  stories: [...storiesPaths, ...docsPaths],

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
          identifiers: ({ hash }) => `awsm_${hash}`,
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
        } else {
          return false;
        }
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default config;
