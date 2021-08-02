import React from 'react';
import { useRouter } from 'next/router';
import Meta from '../Meta/Meta';
import Nav from '../Nav/Nav';
import styles from './Layout.module.css';

const Layout = ({ children }): JSX.Element => {
  const router = useRouter();
  const surfboardPageRegex = /^\/surfboards\/([\w-]+)$/gm;
  const isSurfboardPage = surfboardPageRegex.test(router.asPath);
  return (
    <div
      className={`${styles.layout} ${
        isSurfboardPage ? 'bg-white' : 'bg-gray-100'
      }`}
    >
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
