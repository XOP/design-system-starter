import { useState } from 'react';

import Button from '@awsm/ui/components/Button/Button';

import styles from './controls.module.css';

const Controls = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.root}>
      <Button onPress={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  );
};

export default Controls;
