import React from 'react';
import Icon from '../../../../components/icon';
import Input from '../../../../components/input';
import styles from './index.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['left']}>
        <Icon type='backward' />
        <Icon type='forward' />
      </div>
      <div className={styles['right']}>
        <Input
          style={{ marginRight: 16 }}
          placeholder='搜索'
          addonBefore={<Icon type='search' />}
        />
        <Icon type='setting' />
        <Icon type='mail' />
        <Icon type='clothes' />
        <Icon type='reduce' />
      </div>
    </header>
  );
};

export default Header;
