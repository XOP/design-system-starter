import { forwardRef } from 'react';

import { clsx } from 'clsx';

import {
  TabList as BaseTabList,
  type TabListProps as BaseTabListProps,
} from 'react-aria-components';

import { listStyles } from './Tabs.css';

import type { TabProps } from './Tab';

export interface TabListProps extends BaseTabListProps<TabProps> {}

const TabList = forwardRef(function TabsList(
  props: TabListProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { className, ...rest } = props;

  return (
    <BaseTabList
      {...rest}
      ref={ref}
      className={clsx(className, listStyles())}
    >
      {props.children}
    </BaseTabList>
  );
});

TabList.displayName = 'TabList';

export default TabList;
