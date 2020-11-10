import { RootState } from "@/reducer";
import React from "react";
import { useSelector } from "react-redux";
import Icon from "../../../../components/icon";
import Player from "../player";
import styles from "./index.module.scss";

const PlayBar: React.FC = () => {
  const current = useSelector((state: RootState) => state.song.current);
  console.log(current, 'current');
  return (
    <div className={styles["play-bar"]}>
      <div className={styles["song-info"]}>
        <img
          className={styles["cover"]}
          src={`${current?.al?.picUrl}?param=50y50&quality=100`}
          alt="cover"
        />
        <div className={styles["song"]}>
          <div className={styles["top"]}>
  <p className={styles["name"]}>{current?.name}</p>
            <p className={styles["split"]}>-</p>
  <span className={styles["artists"]}>{current?.ar?.map((item: any) => item.name).join('/')}</span>
          </div>
          <div className={styles["time"]}>
            <span>00:24</span>
            <span className={styles["split"]}>/</span>
            <span>04:45</span>
          </div>
        </div>
      </div>
      <Player />
      <div className={styles["mode"]}>
        <div className={styles["jingyun"]}>
          <Icon type="jingyun" />
        </div>
        <div className={styles["play-mode"]}>
          <Icon type="loop-play" />
        </div>
        <div className={styles["play-list"]}>
          <Icon type="play-list" />
        </div>
        <div className={styles["lyric"]}>
          <Icon type="ci" />
        </div>
        <div className={styles["volume"]}>
          <Icon type="volume" />
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
