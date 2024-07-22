import type React from 'react';

import * as styles from './DemoFlow.css';

const DemoFlow = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.root}>{children}</div>
);

DemoFlow.displayName = '__DemoFlow__';

export default DemoFlow;
