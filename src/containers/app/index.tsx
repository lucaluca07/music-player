import React from "react";
import RouterMap from "../../router/index";
import Header from "./components/header";
import Footer from "./components/footer";

import style from "./index.module.scss";

function App() {
  return (
    <div className={style["App"]}>
      <Header />
      <main className={style["main"]}>
        <div className={style["menu"]}>
          <ul>
            <li>发现音乐</li>
            <li>私人FM</li>
            <li>视频</li>
            <li>朋友</li>
          </ul>
        </div>
        <div className={style["content-wrapper"]}>
          <div className={style["content"]}>
            <RouterMap />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
