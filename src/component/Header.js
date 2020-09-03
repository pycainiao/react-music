import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.less";

function BaseHeader(props) {
  return (
    <div className={"container"}>
      <div className={style["search"]}>XXX MUSIC</div>
      <Link to="/recommend">推荐</Link>
      <Link to="/singers">歌手</Link>
      <Link to="/rank">排行榜</Link>
    </div>
  );
}

export default BaseHeader;
