import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "@/reducer/home";
import { RootState } from "@/reducer";
import Carousel from "@/components/carousel";

const Banners: React.FC = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state: RootState) => state.home.banners);

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

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
