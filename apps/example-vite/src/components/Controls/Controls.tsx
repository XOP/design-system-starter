import SpeedToggle from '../SpeedToggle/SpeedToggle';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import styles from './controls.module.css';

const Controls = () => {
  return (
    <div className={styles.root}>
      <ThemeToggle />
      <SpeedToggle />
    </div>
  );
};

export default Controls;
