import React from 'react';

import * as styles from './DemoFlow.css';

export const DemoFlow = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className={styles.root}>{children}</div>;
