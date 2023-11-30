import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Based on [React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: 'Awesome',
  }
};
