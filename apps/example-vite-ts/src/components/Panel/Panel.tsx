import IconArrowLeft from '@awsm/icons/lib/IconArrowLeft';
import IconArrowRight from '@awsm/icons/lib/IconArrowRight';

import IconArrowLeftSrc from '@awsm/icons/svg/arrow-left.svg';
import IconArrowRightSrc from '@awsm/icons/svg/arrow-right.svg';

import Button from '@awsm/ui/components/Button/Button';

import styles from './panel.module.css';

// Buttons don't do anything here...
// they just sit looking nice and demonstrate Icons import and usage

const Panel = () => {
  return (
    <div className={styles.root}>
      <Button
        variant="ghost"
        color="secondary"
        size="small"
        aria-label="Roll Left"
      >
        <span
          style={{ maskImage: `url(${IconArrowLeftSrc})` }}
          className={styles.icon}
        >
          <img src={IconArrowLeftSrc} alt="" />
        </span>
      </Button>
      <Button
        variant="solid"
        color="secondary"
        size="small"
        aria-label="Strong Roll Left"
      >
        <IconArrowLeft />
      </Button>
      <Button
        variant="solid"
        color="secondary"
        size="small"
        aria-label="Strong Roll Right"
      >
        <IconArrowRight />
      </Button>
      <Button
        variant="ghost"
        color="secondary"
        size="small"
        aria-label="Roll Right"
      >
        <span
          style={{ maskImage: `url(${IconArrowRightSrc})` }}
          className={styles.icon}
        >
          <img src={IconArrowRightSrc} alt="" />
        </span>
      </Button>
    </div>
  );
};

export default Panel;
