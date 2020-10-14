import React from "react";
import { connect } from "react-redux";
import style from "@/style/player/player.module.less";

function Player(props) {
  const { playList } = props;
  console.log(playList.length, "长度");
  return playList.length ? (
    <div className={style["play-container"]}>这是播放器</div>
  ) : null;
}
const mapStateToProps = (state) => {
  return {
    playList: state.play.playList,
  };
};
export default connect(mapStateToProps, null)(Player);
