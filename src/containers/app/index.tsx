import React from "react";
import RouterMap from "../../router/index";
import Header from "./components/header";
import Footer from "./components/footer";
import Menu, { MenuItem, SubMenu } from "../../components/menu";
import Avatar from "../../components/avatar";
import style from "./index.module.scss";
import Icon from "../../components/icon";

function App() {
  return (
    <div className={style["App"]}>
      <Header />
      <main className={style["main"]}>
        <div className={style["menu"]}>
          <div className={style["user"]}>
            <Avatar src="" />
            <div className={style["username"]}>
              <span>未登录</span>
              <Icon type="play" />
            </div>
          </div>
          <Menu>
            <MenuItem eventKey="discover">发现音乐</MenuItem>
            <MenuItem eventKey="fm">私人FM</MenuItem>
            <MenuItem eventKey="video">视频</MenuItem>
            <MenuItem eventKey="friends">朋友</MenuItem>
            <SubMenu arrowDisabled title="我的音乐" eventKey="myMusic">
              <MenuItem eventKey="discover">发现音乐</MenuItem>
              <MenuItem eventKey="fm">私人FM</MenuItem>
              <MenuItem eventKey="video">视频</MenuItem>
              <MenuItem eventKey="friends">朋友</MenuItem>
            </SubMenu>
            <SubMenu title="创建的歌单" eventKey="created">
              <MenuItem eventKey="discover">发现音乐</MenuItem>
              <MenuItem eventKey="fm">私人FM</MenuItem>
              <MenuItem eventKey="video">视频</MenuItem>
              <MenuItem eventKey="friends">朋友</MenuItem>
            </SubMenu>
            <SubMenu title="收藏的歌单" eventKey="collected">
              <MenuItem eventKey="discover">发现音乐</MenuItem>
              <MenuItem eventKey="fm">私人FM</MenuItem>
              <MenuItem eventKey="video">视频</MenuItem>
              <MenuItem eventKey="friends">朋友</MenuItem>
            </SubMenu>
          </Menu>
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
