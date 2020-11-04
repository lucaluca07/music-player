import request from "../request";
export interface IBanner {
  imageUrl: string;
  typeTitle: string;
}

export const getHotPlaylist = () =>
  request<any>({ url: "/playlist/hot" }).then(
    (data) => console.log(data)
  );

// 全部歌单
export const getPlaylist = () =>
  request<any>({ url: "/top/playlist" }).then(
    (data) => console.log(data)
  );

// 推荐歌单
export const getPersonalized = (params: { limit: number }) =>
  request<any>({ url: "personalized", params }).then(
    (data) => console.log(data)
  );

// 推荐 MV
