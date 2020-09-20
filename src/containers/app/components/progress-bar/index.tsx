import * as React from 'react';
import styles from './index.module.scss';

interface IProps {
  duration: number;
  currentTime: number;
  onClick?: (currentTime: number) => void;
  style?: React.CSSProperties;
}

const ProcessBar: React.FC<IProps> = ({ style, duration, currentTime }) => {
  return (
    <div style={style} className={styles['progress-bar']}>
      <div
        style={{ width: `${(currentTime / duration) * 100}%` }}
        className={styles['progress']}></div>
    </div>
  );
};

export default ProcessBar;
