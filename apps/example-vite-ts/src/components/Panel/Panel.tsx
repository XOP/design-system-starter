import IconArrowLeft from '@awsm/icons/lib/IconArrowLeft';
import IconArrowRight from '@awsm/icons/lib/IconArrowRight';

import Button from '@awsm/ui/components/Button/Button';

import styles from './panel.module.css';

const Panel = () => {
  return (
    <div className={styles.root}>
      <Button variant="ghost" color="secondary" size="small">
        <IconArrowLeft />
      </Button>
      <Button variant="solid" color="secondary" size="small">
        <IconArrowLeft />
      </Button>
      <Button variant="solid" color="secondary" size="small">
        <IconArrowRight />
      </Button>
      <Button variant="ghost" color="secondary" size="small">
        <IconArrowRight />
      </Button>
    </div>
  );
};

export default Panel;
