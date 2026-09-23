import type { ReactNode } from 'react';

import styles from './PageContainer.module.css';

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
