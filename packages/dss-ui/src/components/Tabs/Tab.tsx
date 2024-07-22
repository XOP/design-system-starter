import { forwardRef } from 'react';

import { clsx } from 'clsx';

import {
  Tab as BaseTab,
  type TabProps as BaseTabProps,
} from 'react-aria-components';

import { tabStyles } from './Tabs.css';

export interface TabProps extends BaseTabProps {}

const Tab = forwardRef(function Tab(
  props: TabProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { className, ...rest } = props;

  return (
    <BaseTab
      {...rest}
      ref={ref}
      className={({ isDisabled, isSelected }) =>
        clsx(className, tabStyles({ isDisabled, isSelected }))
      }
    >
      {props.children}
    </BaseTab>
  );
});

Tab.displayName = 'Tab';

export default Tab;
