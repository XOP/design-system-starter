import clsx from 'clsx';
import { useStore } from '@nanostores/react';

import { $colorTheme, changeColorTheme } from '../../store/store';
import { COLOR_THEME } from '../../shared/globals';

import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const $currentTheme = useStore($colorTheme);

  const handleToggle = () => {
    const nextTheme =
      $currentTheme === COLOR_THEME.dark ? COLOR_THEME.light : COLOR_THEME.dark;

    changeColorTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  return (
    <div className={clsx(styles.root, className)}>
      <button
        type="button"
        className={styles.button}
        onClick={handleToggle}
        title="Change theme"
      >
        {$currentTheme === COLOR_THEME.dark ? '☽' : '☀'}
      </button>
    </div>
  );
};

export default ThemeToggle;
