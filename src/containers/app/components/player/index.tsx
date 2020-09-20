import * as React from 'react';
import styles from './index.module.scss';

const Player: React.FC = () => {
  return (
    <div className={styles['player']}>
      <div>收藏</div>
      <div>上一曲</div>
      <div>播放</div>
      <div>下一期</div>
      <div>分享</div>
    </div>
  );
};

export default Player;
