import React, { useEffect } from "react";
import Title from "@/containers/app/components/title";
import { useDispatch, useSelector } from "react-redux";
import { getExclusiveMV, getPersonalizedMV } from "@/reducer/home";
import { RootState } from "@/reducer";
// import Button from "@/components/button";
import Image from "@/components/image";

import styles from "./style.module.scss";

const FM: React.FC<{ type: "personalized" | "exclusive" }> = ({ type }) => {
  const dispatch = useDispatch();
  const mvs = useSelector(
    (state: RootState) =>
      state.home[type === "personalized" ? "personalizedMV" : "exclusiveMV"]
  );

  useEffect(() => {
    const action = type === "personalized" ? getPersonalizedMV : getExclusiveMV;
    dispatch(action());
  }, [dispatch, type]);

  return (
    <div className={styles["song-list"]}>
      <Title type="link">
        {type === "personalized" ? "推荐 MV" : "独家放送"}
      </Title>
      <ul className={styles["list"]}>
        {mvs.map((song) => (
          <li className={styles["item"]} key={song.id}>
            <div className={styles["cover"]}>
              <Image
                className={styles["cover-img"]}
                src={`${song.picUrl}?param=340y190`}
                alt={song.name}
                ratio={95 / 170}
              />
            </div>
            <span>{song.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FM;
