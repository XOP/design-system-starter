import type { Meta, StoryObj } from '@storybook/react';

import { DemoFlow } from '../../helpers/docs';

import Switch from './Switch';

export default {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Based on [React Aria Switch](https://react-spectrum.adobe.com/react-aria/Switch.html)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Base: Story = {
  args: {
    children: 'Awesome',
  },
};

export const Checked: Story = {
  args: {
    ...Base.args,
    isSelected: true,
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
  render: () => (
    <DemoFlow>
      <Switch isDisabled>Unchecked</Switch>
      <Switch
        isDisabled
        isSelected
      >
        Checked
      </Switch>
    </DemoFlow>
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
    children: null,
    'aria-label': 'Awesome',
  },
};

export const AllColors: Story = {
  render: () => (
    <DemoFlow>
      <Switch color="accent">Awesome</Switch>
      <Switch color="neutral">Awesome</Switch>
    </DemoFlow>
  ),
};
