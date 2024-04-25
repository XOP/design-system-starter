import React from 'react';

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
        order: ['Foundations'],
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
        transform: (code: string) => {
          // emphasizing helper components in code
          code = code.replace(/Demo\w+/g, (match) => `__${match}__`);

          // cleaning up helper renders
          if (!code.includes('render: (')) {
            return code;
          } else {
            let _code = code;

            // extracting from render:
            const _parsed = code.match(
              /(?<=render: \(\) => )<+(.|\n)+>+(?=,)?/,
            );

            if (_parsed && _parsed[0]) {
              _code = _parsed[0];
            }

            return dedent(_code);
          }
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
        nebula: 'nebula',
        prism: 'prism',
      },
      defaultTheme: 'nebula',
      attributeName: 'data-awsm',
    }),
  ],
};

export default preview;
