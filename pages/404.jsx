import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/error.module.scss';

function Custom404() {
  return (
    <div className={styles.containerError}>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
      <Link href='/shop'>
        <a className={styles.btn}>Перейти к списку товаров</a>
      </Link>
    </div>
  );
}

export default Custom404;
