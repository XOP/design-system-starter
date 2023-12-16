import clsx from 'clsx';

import { sidebarState } from '../../store/store';
import { SIDEBAR_STATE } from '../../shared/globals';

import styles from './MenuToggle.module.css';

interface MenuToggleProps {
  className?: string;
  onClick?: () => void;
}

const MenuToggle = (props: MenuToggleProps) => {
  const { className, onClick } = props;

  const handleToggle = () => {
    sidebarState.set(SIDEBAR_STATE.opened);

    onClick && onClick();
  };

  return (
    <span className={clsx(styles.root, className)}>
      <button className={styles.button} onClick={handleToggle} title="Toggle menu">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"/></svg>
      </button>
    </span>
  );
};

export default MenuToggle;
