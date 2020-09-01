import React from "react";
import { Link } from "react-router-dom";
import StyleHeader from "./header.module.less";

function BaseHeader(props) {
  return (
    <div className={StyleHeader["ceshinnn"]}>
      <span>这是头部搜索部分</span>
      <Link to="/recommend">推荐</Link>
      <Link to="/singers">歌手</Link>
      <Link to="/rank">排行榜</Link>
    </div>
  );
}

export default BaseHeader;
