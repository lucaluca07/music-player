import request from "../request";
export interface IBanner {
  imageUrl: string;
  typeTitle: string;
}

export const getBanner = () =>
  request<{ banners: IBanner[] }>({ url: "/banner" }).then(
    (data) => data.banners
  );
