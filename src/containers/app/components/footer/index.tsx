import * as React from 'react';
import ProgressBar from '../progress-bar';
import PlayBar from '../play-bar';
import styles from './index.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <ProgressBar duration={1000} currentTime={200} />
      <PlayBar />
    </footer>
  );
};

export default Footer;
