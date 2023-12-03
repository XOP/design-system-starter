import * as React from 'react';

import clsx from 'clsx';

import {
  Tab as BaseTab,
  TabProps as BaseTabProps,
} from 'react-aria-components';

import { tabStyles } from './Tabs.css';

export interface TabProps extends BaseTabProps {}

const Tab = React.forwardRef(function Tab(
  props: TabProps,
  ref: React.ForwardedRef<any>,
) {
  const { className, ...rest } = props;

  return (
    <BaseTab
      {...rest}
      ref={ref}
      className={({ isDisabled, isSelected }) => clsx(className, tabStyles({ isDisabled, isSelected }))}
    >
      {props.children}
    </BaseTab>
  );
});

Tab.displayName = 'Tab';

export default Tab;
