import React, { useCallback, useEffect, useMemo } from "react";
import services from "@/service";
import { useDispatch, useSelector } from "react-redux";
import { setBanners } from "@/reducer/home";
import { RootState } from "@/reducer";
import Carousel from "@/components/carousel";

const Banners: React.FC = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state: RootState) => state.home.banners);
  const getBanner = useCallback(async () => {
    const banner = await services.getBanner();
    dispatch(setBanners(banner));
  }, [dispatch]);
  useEffect(() => {
    getBanner();
    services.getPersonalized({ limit: 9 })
  }, [getBanner]);

  const data = useMemo(
    () =>
      banners.map((banner) => ({
        ...banner,
        imageUrl: `${banner.imageUrl}?param=1080y400'`,
      })),
    [banners]
  );
  return <Carousel data={data} />;
};

export default Banners;
