import request from "../request";
export interface SongListProps {
  id: string;
  name: string;
  picUrl: string;
  playCount: string;
}

export const getHotPlaylist = () =>
  request<{ result: SongListProps }>({ url: "/playlist/hot" }).then(
    (data) => data.result || []
  );

// 全部歌单
export const getPlaylist = () =>
  request<{ result: SongListProps }>({ url: "/top/playlist" }).then(
    (data) => data.result || []
  );

// 推荐歌单
export const getPersonalized = (params: { limit: number }) =>
  request<{ result: SongListProps }>({ url: "/personalized", params }).then(
    (data) => data.result || []
  );
// 推荐歌单
export const getPersonalizedSong = (params: { limit?: number }) =>
  request<{ result: SongListProps }>({ url: "/personalized/newsong", params }).then(
    (data) => data.result || []
  );

// 推荐 MV
