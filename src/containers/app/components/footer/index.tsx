import * as React from 'react';
import ProgressBar from '../progress-bar';
import MiniPlayBar from '../mini-playbar';
import styles from './index.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <ProgressBar />
      <MiniPlayBar />
    </footer>
  );
};

export default Footer;
