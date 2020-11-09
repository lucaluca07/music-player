import React, { useEffect } from "react";
import Title from "@/containers/app/components/title";
import { useDispatch } from "react-redux";
import { getPersonalizedSong } from "@/reducer/home";

const FM: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonalizedSong());
  }, [dispatch]);
  
  return <Title type="link">最新音乐</Title>;
};

export default FM;
