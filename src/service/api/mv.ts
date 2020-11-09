import request from "../request";

export interface MVProps {
  id: number;
  picUrl: string;
  artistName: string;
  artistId: number;
  playCount: number;
  name: string;
}

export interface ExclusiveMVProps {
  id: number;
  cover: string;
  artistName: string;
  artistId: number;
  playCount: number;
  name: string;
}
// 独家放送 MV
export const getExclusiveMV = (params: { limit: number }) =>
  request<{ data: ExclusiveMVProps[] }>({ url: "/mv/exclusive/rcmd", params }).then(
    (data) => (data.data || []).map(item => ({ picUrl: item.cover, ...item }))
  );

// 推荐 MV
export const getPersonalizedMV = () =>
  request<{ result: MVProps[] }>({ url: "/personalized/mv" }).then(
    (data) => data.result || []
  );