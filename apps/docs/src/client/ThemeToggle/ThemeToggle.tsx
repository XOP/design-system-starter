import clsx from 'clsx';
import { useStore } from '@nanostores/react';

import Button from '../Button/Button';

import { colorTheme, changeColorTheme } from '../../store/store';
import { COLOR_THEME } from '../../shared/globals';

import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const $colorTheme = useStore(colorTheme);

  const handleToggle = () => {
    const nextTheme =
      $colorTheme === COLOR_THEME.dark ? COLOR_THEME.light : COLOR_THEME.dark;

    changeColorTheme(nextTheme);
    document.documentElement.dataset['awsm'] = nextTheme;
  };

  return (
    <div className={clsx(styles.root, className)}>
      <button
        className={styles.button}
        onClick={handleToggle}
        title="Change theme"
      >
        {$colorTheme === COLOR_THEME.dark ? '☽' : '☀'}
      </button>
    </div>
  );
};

export default ThemeToggle;
