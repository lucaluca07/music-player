import React, { useEffect } from "react";
import Title from "@/containers/app/components/title";
import Image from "@/components/image";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalizedSong } from "@/reducer/home";
import { RootState } from "@/reducer";
import { padding } from "@/utils/number";
import styles from "./style.module.scss";

const FM: React.FC = () => {
  const personalizedSong = useSelector(
    (state: RootState) => state.home.personalizedSong
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonalizedSong());
  }, [dispatch]);

  return (
    <div className={styles["new-songs"]}>
      <Title type="link">最新音乐</Title>
      <ul className={styles["songs"]}>
        {personalizedSong.map((song, index) => (
          <li className={styles["song"]} key={song.id}>
            <div className={styles["cover"]}>
              <Image src={`${song.picUrl}?param=120y120`} alt={song.name} />
            </div>
            <div className={styles["index"]}>{padding(index + 1, 2)}</div>
            <div className={styles["info"]}>
              <div className={styles["name"]}>
                <span>{song.song.name}</span>
                {song.song.alias.length > 0 && (
                  <span className={styles["alias"]}>（{song.song.alias}）</span>
                )}
              </div>
              <div className={styles["artists"]}>
                {song.song.artists.map((item) => item.name).join(" / ")}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FM;
