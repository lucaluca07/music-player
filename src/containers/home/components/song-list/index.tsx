import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import Title from "@/containers/app/components/title";
import { RootState } from "@/reducer";
import { getPersonalized } from "@/reducer/home";
import Button from "@/components/button";
import Image from "@/components/image";
import Icon from "@/components/icon";
import { getPlayListSongs, getRecommedSongs } from "@/reducer/song";
import styles from "./index.module.scss";

const SingList: React.FC = () => {
  const dispatch = useDispatch();
  const songList = useSelector((state: RootState) => state.home.songList);

  useEffect(() => {
    dispatch(getPersonalized());
  }, [dispatch]);
  return (
    <div className={styles["song-list"]}>
      <Title type="link">推荐歌单</Title>
      <ul className={styles["list"]}>
        <li className={cx(styles["item"], styles["recommend"])}>
          <div className={styles["cover"]}>
            <Image
              className={styles["cover-img"]}
              src="https://p2.music.126.net/JVjXk7nZq3A_10P7xw2m1A==/109951165442093369.jpg?param=280y280"
              alt={"每日歌曲推荐"}
            />
            <Button onClick={() => dispatch(getRecommedSongs())} className={styles["cover-play-btn"]}>
              <Icon className={styles["icon"]} type="play" />
            </Button>
          </div>
          <span>每日歌曲推荐</span>
        </li>
        {songList.map((song) => (
          <li className={styles["item"]} key={song.id}>
            <div className={styles["cover"]}>
              <Image
                className={styles["cover-img"]}
                src={`${song.picUrl}?param=280y280`}
                alt={song.name}
              />
              <Button onClick={() => dispatch(getPlayListSongs({ id: song.id }))} className={styles["cover-play-btn"]}>
                <Icon className={styles["icon"]} type="play" />
              </Button>
            </div>
            <span>{song.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingList;
