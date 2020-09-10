import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.less";

function BaseHeader() {
  return (
    <div className={style["container-header"]}>
      <div className={style["search"]}>
        <div className={["iconfont menu", style["icon-size"]].join(" ")}>
          &#xe65c;
        </div>
        <div>XXX MUSIC</div>
        <div className={["iconfont search", style["icon-size"]].join(" ")}>
          &#xe62b;
        </div>
      </div>
      <div className={style["header-link"]}>
        <Link className={style["link-item"]} to="/recommend">
          推荐
        </Link>
        <Link className={style["link-item"]} to="/singers">
          歌手
        </Link>
        <Link className={style["link-item"]} to="/rank">
          排行榜
        </Link>
      </div>
    </div>
  );
}

export default BaseHeader;
