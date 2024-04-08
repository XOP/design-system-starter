import { useEffect, useState } from 'react';

import Button from '@awsm/ui/components/Button/Button';

const THEMES = ['nebula', 'prism'];
const DEFAULT_THEME = 'nebula';

const ThemeToggle = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const getThemeName = (): string => {
    return document.documentElement.dataset.awsm || '';
  };

  const setTheme = (theme: string) => {
    document.documentElement.dataset.awsm = theme;
  };

  useEffect(() => {
    const currentTheme = getThemeName() || DEFAULT_THEME;

    if (!currentTheme) {
      console.log('Theme is not set, proceeding with default theme');
    }

    const index = THEMES.indexOf(currentTheme);

    if (index === -1) {
      console.log('Theme is not found, check html[data-awsm] attribute');
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  }, []);

  const handleChange = () => {
    const nextIndex = currentIndex + 1 >= THEMES.length ? 0 : currentIndex + 1;
    const nextTheme = THEMES[nextIndex];

    setCurrentIndex(nextIndex);
    setTheme(nextTheme);
  };

  return <Button onPress={handleChange}>Toggle Theme</Button>;
};

export default ThemeToggle;
