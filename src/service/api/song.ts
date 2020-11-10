import request from "../request";
export interface SongListProps {
  id: number;
  name: string;
  picUrl: string;
  playCount: string;
}

export interface SongProps {
  id: number;
  name: string;
  picUrl: string;
  song: {
    name: string;
    alias: string[];
    artists: { name: string }[];
  };
}

export interface PlaylistDetail {
  playlist: {
    trackIds: { id: number }[];
  };
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
// 推荐新歌
export const getPersonalizedSong = (params: { limit?: number }) =>
  request<{ result: SongProps }>({
    url: "/personalized/newsong",
    params,
  }).then((data) => data.result || []);

// 每日推荐歌曲
export const getRecommedSongs = () =>
  request<{ recommend: SongProps }>({
    url: "/recommend/songs",
  }).then((data) => data.recommend || []);

// 歌单详情
export const getPlaylistDetail = (params: { id: number; s?: number }) =>
  request<PlaylistDetail>({
    url: "/playlist/detail",
    params,
  });
// 歌单详情
export const getSongDetail = (params: { ids: number[] }) =>
  request<{ songs: SongProps }>({
    url: "/song/detail",
    params,
  }).then((data) => data.songs || []);

export const getSongUrl = (params: { id: number[] | number }) =>
  request<{ data: SongProps }>({
    url: "/song/url",
    params,
  }).then((data) => data.data || []);

export const getLyric = (params: { id: number }) =>
  request<{ lrc: SongProps }>({
    url: "/lyric",
    params,
  }).then((data) => data.lrc || []);
