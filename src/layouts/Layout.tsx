import { ReactElement, useEffect } from 'react';
import { LayoutProps } from '../types/layout/LayoutProps';
import styles from './layout.module.scss';

const Layout = ({ children, pageTitle }: LayoutProps): ReactElement => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return <main className={styles.main}>{children}</main>;
};

export default Layout;
