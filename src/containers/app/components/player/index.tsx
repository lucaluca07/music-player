import { RootState } from "@/reducer";
import { updateSongInfo } from "@/reducer/song";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../../../components/icon";
import styles from "./index.module.scss";

const Player: React.FC = () => {
  const dispatch = useDispatch();
  const current = useSelector((state: RootState) => state.song.current);
  const status = current?.status;
  const handlePlay = useCallback(() => {
    if (!status) return;
    dispatch(
      updateSongInfo({
        key: "status",
        value: status === "play" ? "pause" : "play",
      })
    );
  }, [dispatch, status]);

  return (
    <div className={styles["player"]}>
      <div className={styles["collect"]}>
        <Icon type="collect" />
      </div>
      <div className={styles["prev"]}>
        <Icon type="prev" />
      </div>
      <div onClick={handlePlay} className={styles["play"]}>
        <Icon type={status === "play" ? "pause" : "play"} />
      </div>
      <div className={styles["next"]}>
        <Icon type="next" />
      </div>
      <div className={styles["share"]}>
        <Icon type="share" />
      </div>
    </div>
  );
};

export default Player;
