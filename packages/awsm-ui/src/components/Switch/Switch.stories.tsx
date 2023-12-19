import type { Meta, StoryObj } from '@storybook/react';

import { __DemoFlow__ } from '../../helpers/docs';

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

export const Checked: Story = {
  args: {
    ...Base.args,
    isSelected: true,
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
  render: () => (
    <__DemoFlow__>
      <Switch isDisabled>Unchecked</Switch>
      <Switch isDisabled isSelected>Checked</Switch>
    </__DemoFlow__>
  ),
};

export const SizeRegular: Story = {
  args: {
    ...Base.args,
  },
};

export const SizeSmall: Story = {
  args: {
    ...Base.args,
    size: 'small',
  },
};

export const NoLabel: Story = {
  args: {
    ...Base.args,
    children: null
  },
};

export const AllColors: Story = {
  render: () => (
    <__DemoFlow__>
      <Switch color="primary">Awesome</Switch>
      <Switch color="secondary">Awesome</Switch>
    </__DemoFlow__>
  ),
};
