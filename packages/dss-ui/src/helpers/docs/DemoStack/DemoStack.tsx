import type React from 'react';

import * as styles from './DemoStack.css';

const DemoStack = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.root}>{children}</div>
);

DemoStack.displayName = '__DemoStack__';

export default DemoStack;
