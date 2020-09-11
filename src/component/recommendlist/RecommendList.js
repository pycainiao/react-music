import React from "react";
import style from "./restyle.module.less";

function RecommendList(props) {
  const { recommendList } = props;
  return (
    <>
      <h1 className={style["title"]}>推荐歌单</h1>
      <div className={style["container"]}>
        {recommendList.map((item) => {
          return (
            <div key={item.id} className={style["wrapper"]}>
              <div className={style["play_count"]}>
                <i className="iconfont play">&#xe885;</i>
                <span>{Math.floor(item.playCount / 10000)}万</span>
              </div>
              <img src={item.picUrl} alt="logo" />
              <div className={style["desc"]}>{item.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RecommendList;
