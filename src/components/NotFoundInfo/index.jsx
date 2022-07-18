import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Page Not Found!</h1>
      <p className={styles.description}>This page doesn't exist!</p>
    </div>
  );
};

export default NotFoundBlock;
