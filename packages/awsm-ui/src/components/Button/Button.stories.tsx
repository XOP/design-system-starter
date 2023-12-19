import type { Meta, StoryObj } from '@storybook/react';

import { __DemoFlow__ } from '../../helpers/docs';

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

export const ColorPrimary: Story = {
  args: {
    ...Base.args,
    color: 'primary',
  },
};

export const ColorSecondary: Story = {
  args: {
    ...Base.args,
    color: 'secondary',
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

export const AllVariantsPrimary: Story = {
  render: () => (
    <__DemoFlow__>
      <Button color="primary" variant="solid">
        Solid
      </Button>
      <Button color="primary" variant="ghost">
        Ghost
      </Button>
      <Button color="primary" variant="text">
        Text
      </Button>
    </__DemoFlow__>
  ),
};

export const AllVariantsSecondary: Story = {
  render: () => (
    <__DemoFlow__>
      <Button color="secondary" variant="solid">
        Solid
      </Button>
      <Button color="secondary" variant="ghost">
        Ghost
      </Button>
      <Button color="secondary" variant="text">
        Text
      </Button>
    </__DemoFlow__>
  ),
};
