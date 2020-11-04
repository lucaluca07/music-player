import React from "react";
import FM from "./components/fm";
import SongList from "./components/song-list";
import Songs from "./components/songs";
import MV from "./components/mvs";
import RecommendMV from "./components/recommend-mv";
import Banners from "./components/banners";

const Home: React.FC = () => {
  return (
    <div>
      <Banners />
      <SongList />
      <MV />
      <Songs />
      <RecommendMV />
      <FM />
    </div>
  );
};

export default Home;
