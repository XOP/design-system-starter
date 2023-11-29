import * as React from 'react';

import clsx from 'clsx';

import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from 'react-aria-components';

import { styles } from './Button.css';

export type ButtonVariants = 'solid' | 'ghost' | 'text';
export type ButtonColors = 'primary' | 'secondary';
export type ButtonSizes = 'small' | 'regular' | 'large';

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariants;
  color?: ButtonColors;
  size?: ButtonSizes;
  disabled?: boolean;
}

const Button = React.forwardRef(function Button(
  props: ButtonProps,
  ref: React.ForwardedRef<any>
) {
  const {
    children,
    className,
    variant = 'solid',
    color = 'primary',
    size = 'regular',
    disabled = false,
    ...other
  } = props;

  return (
    <BaseButton
      {...other}
      isDisabled={disabled}
      ref={ref}
      className={clsx(className, styles())}
    >
      {children}
    </BaseButton>
  );
});

Button.displayName = 'Button';

export default Button;
