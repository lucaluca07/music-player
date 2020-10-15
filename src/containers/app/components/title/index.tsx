import React from 'react';
import cx from 'classnames';
import './index.scss';

interface IProps {
  type?: 'default' | 'link';
  onClick?: () => void;
}

const Title: React.FC<IProps> = ({ children, type, onClick }) => {
  return (
    <h2
      onClick={onClick}
      className={cx('title', { [`title-type-${type}`]: !!type })}>
      {children}
    </h2>
  );
};

export default Title;
