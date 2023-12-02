import React from 'react';

import * as styles from './DemoStack.css';

export const DemoStack = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className={styles.root}>{children}</div>;
