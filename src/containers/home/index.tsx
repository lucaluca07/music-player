import React from "react";
import FM from "./components/fm";
import SongList from "./components/song-list";
import Songs from "./components/songs";
import MV from "./components/mvs";
import Banners from "./components/banners";

const Home: React.FC = () => {
  return (
    <div>
      <Banners />
      <SongList />
      <MV type={"exclusive"} />
      <Songs />
      <MV type={"personalized"} />
      <FM />
    </div>
  );
};

export default Home;
