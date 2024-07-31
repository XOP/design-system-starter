import type React from 'react';

import dedent from 'dedent';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
  Stories,
} from '@storybook/blocks';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

import type { Preview, ReactRenderer } from '@storybook/react';

import { StoryDecorator } from './helpers/StoryDecorator';

// parameters
import { a11y } from './params/a11y';
import { backgrounds } from './params/backgrounds';
import { viewport } from './params/viewport';

// configuration
import { excludedControls } from './config/excludedControls';

// fonts as base64
import '@ds-starter/fonts/css/fonts.css';

// ui core styles
import '../../../packages/dss-ui/src/assets/styles/index.css';

const preview: Preview = {
  parameters: {
    a11y,
    backgrounds,
    viewport,

    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Form', 'Navigation'],
      },
    },

    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      expanded: false,
      sort: 'requiredFirst',
      exclude: excludedControls,
      matchers: {
        date: /Date$/,
      },
    },

    docs: {
      canvas: {
        sourceState: 'shown',
      },
      source: {
        transform: (_: string) => {
          // emphasizing helper components in code
          const code = _.replace(/Demo\w+/g, (match) => `__${match}__`);

          // cleaning up helper renders
          if (!code.includes('render: (')) {
            return code;
          }

          let _code = code;

          // extracting from render:
          const _parsed = code.match(/(?<=render: \(\) => )<+(.|\n)+>+(?=,)?/);

          if (_parsed?.[0]) {
            _code = _parsed[0];
          }

          return dedent(_code);
        },
      },

      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgTypes />
          <Stories />
        </>
      ),
    },
  },

  decorators: [
    (Story) => (
      <StoryDecorator>
        <Story />
      </StoryDecorator>
    ),

    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
