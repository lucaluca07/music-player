import React, { FC } from "react";
import cx from "classnames";
import "./index.scss";
import { msToTime } from "@/utils/time";

interface SongTableProps {
  songs: any[];
  className?: string;
}

const SongTable: FC<SongTableProps> = ({ songs, className }) => {
  return (
    <ul className={cx("song-table", className)}>
      {songs.map((song) => (
        <li className={cx("column")} key={song.id}>
          <div>{song.name}</div>
          <div>{song.ar.map((item: any) => item.name).join("/")}</div>
          <div>{msToTime(song.dt)}</div>
        </li>
      ))}
    </ul>
  );
};

export default SongTable;
