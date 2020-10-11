import * as React from 'react';
import Icon from '../../../../components/icon';
import styles from './index.module.scss';

const Player: React.FC = () => {
  return (
    <div className={styles['player']}>
      <div className={styles['collect']}>
        <Icon type='collect' />
      </div>
      <div className={styles['prev']}>
        <Icon type='prev' />
      </div>
      <div className={styles['play']}>
        <Icon type='play' />
      </div>
      <div className={styles['next']}>
        <Icon type='next' />
      </div>
      <div className={styles['share']}>
        <Icon type='share' />
      </div>
    </div>
  );
};

export default Player;
