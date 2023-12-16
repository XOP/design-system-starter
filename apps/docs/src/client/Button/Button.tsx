import type { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const { children, disabled, ...rest } = props;

  return (
    <button
      className={clsx(styles.root, {
        [styles.__disabled]: disabled,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
