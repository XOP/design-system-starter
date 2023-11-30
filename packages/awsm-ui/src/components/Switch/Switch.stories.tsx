import type { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';

export default {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Based on [React Aria Switch](https://react-spectrum.adobe.com/react-aria/Switch.html)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Base: Story = {
  args: {
    children: 'Awesome'
  },
};
