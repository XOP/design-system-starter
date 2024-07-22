import { forwardRef } from 'react';

import { clsx } from 'clsx';

import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from 'react-aria-components';

import { styles } from './Button.css';

export type ButtonVariants = 'solid' | 'ghost' | 'text';
export type ButtonColors = 'accent' | 'neutral';
export type ButtonSizes = 'small' | 'regular' | 'large';

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariants;
  color?: ButtonColors;
  size?: ButtonSizes;
  disabled?: boolean;
}

const Button = forwardRef(function Button(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const {
    children,
    className,
    variant = 'solid',
    color = 'accent',
    size = 'regular',
    disabled = false,
    ...other
  } = props;

  return (
    <BaseButton
      {...other}
      isDisabled={disabled}
      ref={ref}
      className={clsx(className, styles({ color, variant, size }))}
    >
      {children}
    </BaseButton>
  );
});

Button.displayName = 'Button';

export default Button;
