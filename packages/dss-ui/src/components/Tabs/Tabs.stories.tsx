import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './Tabs';
import TabList from './TabList';
import Tab from './Tab';
import TabPanel from './TabPanel';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Based on [React Aria Tabs](https://react-spectrum.adobe.com/react-aria/Tabs.html)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

const Template: Story = {
  render: ({ children, ...args }) => {
    return <Tabs {...args}>{children}</Tabs>;
  },
};

export const Base: Story = {
  ...Template,
  args: {
    children: [
      <TabList key="list">
        <Tab id="tab-1">Awesome</Tab>
        <Tab id="tab-2">This is Tab 2</Tab>
        <Tab id="tab-3">And Three</Tab>
      </TabList>,
      <TabPanel
        key="1"
        id="tab-1"
      >
        Tab 1 Content
      </TabPanel>,
      <TabPanel
        key="2"
        id="tab-2"
      >
        This is Tab 2 Content
      </TabPanel>,
      <TabPanel
        key="3"
        id="tab-3"
      >
        And Three Content
      </TabPanel>,
    ],
  },
};

export const Selected: Story = {
  args: {
    ...Base.args,
    defaultSelectedKey: 'tab-2',
  },
  parameters: {
    docs: {
      description: {
        story: 'For controlled mode use `selectedKey` instead',
      },
    },
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
    isDisabled: true,
  },
};

export const VariantFluid: Story = {
  args: {
    ...Base.args,
    variant: 'fluid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Preferable for smaller widths',
      },
    },
  },
};

export const KeyActivationManual: Story = {
  args: {
    ...Base.args,
    keyboardActivation: 'manual',
  },
  tags: ['skipVrt'],
};
