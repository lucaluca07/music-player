import { RootState } from "@/reducer";
import * as React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";

interface IProps {
  onClick?: (currentTime: number) => void;
  style?: React.CSSProperties;
}

const ProcessBar: React.FC<IProps> = ({ style }) => {
  const current = useSelector((state: RootState) => state.song.current);
  const duration = current?.duration || 1;
  const currentTime = current?.currentTime || 0;
  return useMemo(
    () => (
      <div style={style} className={styles["progress-bar"]}>
        <div
          style={{ width: `${(currentTime / duration) * 100}%` }}
          className={styles["progress"]}
        ></div>
      </div>
    ),
    [currentTime, duration, style]
  );
};

export default ProcessBar;
