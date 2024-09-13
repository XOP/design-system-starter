import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Tabs, TabList, Tab, TabPanel } from '.';
import { tabStyles, tabsStyles } from './Tabs.css';

describe('Tabs', () => {
  it('should render with given children', () => {
    const { queryByText, getByText } = render(
      <Tabs>
        <TabList>
          <Tab id="tab-1">tab 1</Tab>
          <Tab id="tab-2">tab 2</Tab>
          <Tab id="tab-3">tab 3</Tab>
        </TabList>
        <TabPanel id="tab-1">content 1</TabPanel>
        <TabPanel id="tab-2">content 2</TabPanel>
        <TabPanel id="tab-3">content 3</TabPanel>
      </Tabs>
    );

    expect(getByText('tab 1')).toBeInTheDocument();
    expect(getByText('tab 2')).toBeInTheDocument();
    expect(getByText('tab 3')).toBeInTheDocument();

    expect(queryByText('content 1')).toBeInTheDocument();
    expect(queryByText('content 1')).toBeVisible();
    expect(queryByText('content 2')).toBeNull();
    expect(queryByText('content 3')).toBeNull();
  });

  it('should render proper id-s', () => {
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab id="tab-1">tab 1</Tab>
          <Tab id="tab-2">tab 2</Tab>
          <Tab id="tab-3">tab 3</Tab>
        </TabList>
        <TabPanel id="tab-1">content 1</TabPanel>
        <TabPanel id="tab-2">content 2</TabPanel>
        <TabPanel id="tab-3">content 3</TabPanel>
      </Tabs>
    );

    expect(getByText('tab 1')).toHaveAttribute('data-key', 'tab-1');
    expect(getByText('tab 2')).toHaveAttribute('data-key', 'tab-2');
    expect(getByText('tab 3')).toHaveAttribute('data-key', 'tab-3');

    expect(getByText('content 1').id).includes('tabpanel-tab-1');
  });

  it('should render with tab selected', () => {
    const { getByText } = render(
      <Tabs defaultSelectedKey="tab-2">
        <TabList>
          <Tab id="tab-1">tab 1</Tab>
          <Tab id="tab-2">tab 2</Tab>
          <Tab id="tab-3">tab 3</Tab>
        </TabList>
        <TabPanel id="tab-1">content 1</TabPanel>
        <TabPanel id="tab-2">content 2</TabPanel>
        <TabPanel id="tab-3">content 3</TabPanel>
      </Tabs>
    );

    expect(getByText('tab 2')).toHaveClass(tabStyles({ isSelected: true }));
  });

  it('should render with default styles', () => {
    const { container } = render(
      <Tabs>
        <TabList>
          <Tab id="tab-1">tab 1</Tab>
          <Tab id="tab-2">tab 2</Tab>
          <Tab id="tab-3">tab 3</Tab>
        </TabList>
        <TabPanel id="tab-1">content 1</TabPanel>
        <TabPanel id="tab-2">content 2</TabPanel>
        <TabPanel id="tab-3">content 3</TabPanel>
      </Tabs>
    );

    expect(container.firstChild).toHaveClass(
      tabsStyles({ color: 'accent', variant: 'regular' })
    );
  });

  it('should render with provided color', () => {
    const { container } = render(
      <Tabs color="neutral">
        <TabList>
          <Tab id="tab-1">tab 1</Tab>
          <Tab id="tab-2">tab 2</Tab>
          <Tab id="tab-3">tab 3</Tab>
        </TabList>
        <TabPanel id="tab-1">content 1</TabPanel>
        <TabPanel id="tab-2">content 2</TabPanel>
        <TabPanel id="tab-3">content 3</TabPanel>
      </Tabs>
    );

    expect(container.firstChild).toHaveClass(tabsStyles({ color: 'neutral' }));
  });

  it('should apply the styles according to props', () => {
    const { container } = render(
      <Tabs
        color="neutral"
        variant="fluid"
      >
        <TabList>
          <Tab id="tab-1">tab 1</Tab>
          <Tab id="tab-2">tab 2</Tab>
          <Tab id="tab-3">tab 3</Tab>
        </TabList>
        <TabPanel id="tab-1">content 1</TabPanel>
        <TabPanel id="tab-2">content 2</TabPanel>
        <TabPanel id="tab-3">content 3</TabPanel>
      </Tabs>
    );

    expect(container.firstChild).toHaveClass(
      tabsStyles({ color: 'neutral', variant: 'fluid' })
    );
  });

  it('should render disabled', () => {
    const { getByText } = render(
      <Tabs isDisabled>
        <TabList>
          <Tab id="tab-1">tab 1</Tab>
          <Tab id="tab-2">tab 2</Tab>
          <Tab id="tab-3">tab 3</Tab>
        </TabList>
        <TabPanel id="tab-1">content 1</TabPanel>
        <TabPanel id="tab-2">content 2</TabPanel>
        <TabPanel id="tab-3">content 3</TabPanel>
      </Tabs>
    );

    expect(getByText('tab 2')).toHaveClass(tabStyles({ isDisabled: true }));
  });
});
