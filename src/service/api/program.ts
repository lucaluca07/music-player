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
export const getPersonalizedProgram = () =>
  request<{ data: ExclusiveMVProps[] }>({
    url: "/dj/personalize/recommend",
  }).then((data) =>
    (data.data || []).map((item) => ({ picUrl: item.cover, ...item }))
  );
