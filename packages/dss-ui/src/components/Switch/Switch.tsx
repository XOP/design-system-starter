import { forwardRef } from 'react';

import { clsx } from 'clsx';

import {
  Switch as BaseSwitch,
  type SwitchProps as BaseSwitchProps,
} from 'react-aria-components';

import { styles, indicatorStyles } from './Switch.css';

export type SwitchColors = 'accent' | 'neutral';
export type SwitchSizes = 'regular' | 'small';

export interface SwitchProps extends BaseSwitchProps {
  color?: SwitchColors;
  size?: SwitchSizes;
  children?: React.ReactNode;
}

const Switch = forwardRef(function Switch(
  props: SwitchProps,
  ref: React.ForwardedRef<HTMLLabelElement>
) {
  const {
    className,
    children: label,
    color = 'accent',
    size = 'regular',
    ...rest
  } = props;

  return (
    <BaseSwitch
      {...rest}
      ref={ref}
      className={clsx(className, styles({ size }))}
    >
      <span className={indicatorStyles({ color })} />
      {label && <span>{label}</span>}
    </BaseSwitch>
  );
});

Switch.displayName = 'Switch';

export default Switch;
