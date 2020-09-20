import * as React from 'react';
import ProgressBar from '../progress-bar';
import Player from '../player';
import styles from './index.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <ProgressBar duration={1000} currentTime={200} />
      <div className={styles['play-bar']}>
        <div className={styles['song-info']}>
          <img
            className={styles['cover']}
            src='http://p3.music.126.net/0O1DSaOFQDa0XAL1oxBDfg==/109951165325140747.jpg?param=50y50&quality=100'
            alt='cover'
          />
          <div className={styles['song']}>
            <div className={styles['top']}>
              <p className={styles['name']}>愿你余生漫长，幻想你会抵达</p>
              <p className={styles['split']}>-</p>
              <span className={styles['artists']}>王二浪</span>
            </div>
            <div className={styles['time']}>
              <span>00:24</span>
              <span className={styles['split']}>/</span>
              <span>04:45</span>
            </div>
          </div>
        </div>
        <Player />
        <div className={styles['mode']}>Mode</div>
      </div>
    </footer>
  );
};

export default Footer;
