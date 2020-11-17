import React, { FC } from "react";
import cx from "classnames";
import "./index.scss";
import { msToTime } from "@/utils/time";

interface SongTableProps {
  songs: any[];
  className?: string;
}

const columns = [
  {
    title: "音乐标题",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "歌手",
    dataIndex: "ar",
    key: "ar",
    render: (ars: { name: string }[]) => ars.map((item) => item.name).join("/"),
  },
  {
    title: "时长",
    dataIndex: "dt",
    key: "dt",
    render: (dt: number) => msToTime(dt),
  },
];

const SongTable: FC<SongTableProps> = ({ songs, className }) => {
  return (
    <table className={cx("song-table", className)}>
      <thead>
        <tr>
          {columns.map((item) => (
            <th key={item.title}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => {
          return (
            <tr key={song.id}>
              {columns.map((item) => {
                return (
                  <th key={song[item.key]}>
                    {item.render?.(song[item.dataIndex]) ??
                      song[item.dataIndex]}
                  </th>
                );
              })}
            </tr>
          );
        })}
        <tr>
          <th></th>
        </tr>
      </tbody>
    </table>
  );
};

export default SongTable;
