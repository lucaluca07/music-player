import * as React from 'react';
import ProgressBar from '../progress-bar';
import MiniPlayBar from '../mini-playbar';
import styles from './index.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <ProgressBar duration={1000} currentTime={200} />
      <MiniPlayBar />
    </footer>
  );
};

export default Footer;
