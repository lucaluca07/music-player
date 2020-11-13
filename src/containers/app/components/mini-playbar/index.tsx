import { RootState } from "@/reducer";
import { getCurrentDetail } from "@/reducer/song";
import { msToTime } from "@/utils/time";
import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../../../components/icon";
import Player from "../player";
import styles from "./index.module.scss";

const PlayBar: React.FC = () => {
  const dispatch = useDispatch();
  const current = useSelector((state: RootState) => state.song.current);
  const id = current?.id;
  useEffect(() => {
    if (id) {
      dispatch(getCurrentDetail(id));
    }
  }, [id, dispatch]);
  return (
    <div className={styles["play-bar"]}>
      <div className={styles["song-info"]}>
        {current && (
          <>
            <div className={styles["cover"]}>
              <img
                src={`${current?.al?.picUrl}?param=50y50&quality=100`}
                alt=""
              />
            </div>
            <div className={styles["song"]}>
              <div className={styles["top"]}>
                <p className={styles["name"]}>{current?.name}</p>
                <p className={styles["split"]}>-</p>
                <span className={styles["artists"]}>
                  {current?.ar?.map((item: any) => item.name).join("/")}
                </span>
              </div>
              <div className={styles["time"]}>
                <span>{msToTime(0)}</span>
                <span className={styles["split"]}>/</span>
                <span>{msToTime(current?.dt || 0)}</span>
              </div>
            </div>
          </>
        )}
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

export default memo(PlayBar);
