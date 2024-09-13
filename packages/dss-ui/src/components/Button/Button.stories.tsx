import type { Meta, StoryObj } from '@storybook/react';

import { DemoFlow } from '../../helpers/docs';

import Button from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Based on [React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: 'Awesome',
  },
};

export const VariantSolid: Story = {
  args: {
    ...Base.args,
    variant: 'solid',
  },
};

export const VariantGhost: Story = {
  args: {
    ...Base.args,
    variant: 'ghost',
  },
};

export const VariantText: Story = {
  args: {
    ...Base.args,
    variant: 'text',
  },
};

export const ColorAccent: Story = {
  args: {
    ...Base.args,
    color: 'accent',
  },
};

export const ColorNeutral: Story = {
  args: {
    ...Base.args,
    color: 'neutral',
  },
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true,
  },
};

export const SizeSmall: Story = {
  args: {
    ...Base.args,
    size: 'small',
  },
};

export const SizeRegular: Story = {
  args: {
    ...Base.args,
    size: 'regular',
  },
};

export const SizeLarge: Story = {
  args: {
    ...Base.args,
    size: 'large',
  },
};

export const AllVariantsAccent: Story = {
  render: () => (
    <DemoFlow>
      <Button
        color="accent"
        variant="solid"
      >
        Solid
      </Button>
      <Button
        color="accent"
        variant="ghost"
      >
        Ghost
      </Button>
      <Button
        color="accent"
        variant="text"
      >
        Text
      </Button>
    </DemoFlow>
  ),
};

export const AllVariantsNeutral: Story = {
  render: () => (
    <DemoFlow>
      <Button
        color="neutral"
        variant="solid"
      >
        Solid
      </Button>
      <Button
        color="neutral"
        variant="ghost"
      >
        Ghost
      </Button>
      <Button
        color="neutral"
        variant="text"
      >
        Text
      </Button>
    </DemoFlow>
  ),
};
