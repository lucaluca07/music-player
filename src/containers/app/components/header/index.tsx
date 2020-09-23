import React from "react";
import styles from "./index.module.scss";

const Header: React.FC = () => {
  return <header className={styles["header"]}>
    <div className={styles["left"]}>
      <div>后退</div>
      <div>前进</div>
    </div>
    <div className={styles["right"]}>
      <div>搜索</div>
      <div>设置</div>
      <div>私信</div>
      <div>换肤</div>
      <div>mini</div>
    </div>
  </header>;
};

export default Header;
