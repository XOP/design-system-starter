import { join, dirname } from 'path';
import { mergeConfig } from 'vite';

import type { StorybookConfig } from '@storybook/react-vite';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import { excludedProps } from './config/excludedProps';

// other packages can be added to setup if needed
const packages = ['awsm-ui'];

const storiesPaths = packages.map(
  (dir) => `../../../packages/${dir}/**/*.stories.@(js|jsx|ts|tsx)`,
);

const docsPaths = packages.map(
  (dir) => `../../../packages/${dir}/**/*.stories.mdx`,
);

const docgenPaths = packages.map((dir) => `../../packages/${dir}/src/**/*.tsx`);

const config: StorybookConfig = {
  stories: [...storiesPaths, ...docsPaths],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-themes'),
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
          emitCssInSsr: true,
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
