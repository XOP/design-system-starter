import { forwardRef } from 'react';

import { clsx } from 'clsx';

import {
  TabPanel as BaseTabPanel,
  type TabPanelProps as BaseTabPanelProps,
} from 'react-aria-components';

import { panelStyles } from './Tabs.css';

export interface TabPanelProps extends BaseTabPanelProps {}

const TabPanel = forwardRef(function TabsList(
  props: TabPanelProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { className, ...rest } = props;

  return (
    <BaseTabPanel
      {...rest}
      ref={ref}
      className={clsx(className, panelStyles())}
    >
      {props.children}
    </BaseTabPanel>
  );
});

TabPanel.displayName = 'TabPanel';

export default TabPanel;
