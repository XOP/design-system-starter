import IconArrowLeft from '@ds-starter/icons/lib/IconArrowLeft';
import IconArrowRight from '@ds-starter/icons/lib/IconArrowRight';

import IconArrowLeftSrc from '@ds-starter/icons/svg/arrow-left.svg';
import IconArrowRightSrc from '@ds-starter/icons/svg/arrow-right.svg';

import Button from '@ds-starter/ui/components/Button/Button';

import styles from './panel.module.css';

// Buttons don't do anything here...
// they just sit looking nice and demonstrate Icons import and usage

const Panel = () => {
  return (
    <div className={styles.root}>
      <Button
        variant="ghost"
        color="neutral"
        size="small"
        aria-label="Roll Left"
      >
        <span
          style={{ maskImage: `url(${IconArrowLeftSrc})` }}
          className={styles.icon}
        >
          <img
            src={IconArrowLeftSrc}
            alt=""
          />
        </span>
      </Button>
      <Button
        variant="solid"
        color="neutral"
        size="small"
        aria-label="Strong Roll Left"
      >
        <IconArrowLeft />
      </Button>
      <Button
        variant="solid"
        color="neutral"
        size="small"
        aria-label="Strong Roll Right"
      >
        <IconArrowRight />
      </Button>
      <Button
        variant="ghost"
        color="neutral"
        size="small"
        aria-label="Roll Right"
      >
        <span
          style={{
            maskImage: `url(${IconArrowRightSrc})`,
            WebkitMaskImage: `url(${IconArrowRightSrc})`,
          }}
          className={styles.icon}
        >
          <img
            src={IconArrowRightSrc}
            alt=""
          />
        </span>
      </Button>
    </div>
  );
};

export default Panel;
