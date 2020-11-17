import React, { FC } from "react";
import cx from "classnames";
import "./index.scss";

interface TabProps {
  data: { label: string; value: string }[];
  activeValue: string;
  style?: React.CSSProperties;
  onChange: (value: string) => void;
}

const Tab: FC<TabProps> = ({ data, style, activeValue, onChange }) => {
  return (
    <ul style={style} className="tab">
      {data.map((item) => (
        <li
          key={item.label}
          onClick={() => onChange(item.value)}
          className={cx("tab-panel", {
            "tab-panel-active": activeValue === item.value,
          })}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Tab;
