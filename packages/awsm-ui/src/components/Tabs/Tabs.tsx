import * as React from 'react';

import clsx from 'clsx';

import {
  Tabs as BaseTabs,
  TabsProps as BaseTabsProps,
} from 'react-aria-components';

import { tabsStyles } from './Tabs.css';

export type TabsColors = 'primary' | 'secondary';
export type TabsVariants = 'regular' | 'fluid';

export interface TabsProps extends BaseTabsProps {
  children: React.ReactNode;
  color?: TabsColors;
  variant?: TabsVariants;
}

const Tabs = React.forwardRef(function Tabs(
  props: TabsProps,
  ref: React.ForwardedRef<any>,
) {
  const { className, color = 'primary', variant = 'regular', ...rest } = props;

  return (
    <BaseTabs
      {...rest}
      ref={ref}
      className={clsx(className, tabsStyles({ color, variant }))}
    >
      {props.children}
    </BaseTabs>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs;
