import * as React from "react";
import Carousel from "@/components/carousel";

const list = [
  'http://p1.music.126.net/0DXSM3X696CO-N4DXobvaQ==/109951165378378923.jpg?param=1080y400',
  'http://p1.music.126.net/zZy245eIaJOAuLCplstnhw==/109951165378801251.jpg?param=1080y400',
  'http://p1.music.126.net/gwNKhQdvnDoglOLGpVb0hA==/109951165379443177.jpg?param=1080y400',
  'http://p1.music.126.net/cPfKKPAApmZKyZ4T61Rf2Q==/109951165378384328.jpg?param=1080y400'
];

const Home: React.FC = () => {
  return (
    <div>
      <Carousel data={list} />
      Home
    </div>
  );
};

export default Home;
