import React, { useEffect } from "react";
import { connect } from "react-redux";
import BaseScroll from "@/component/scroll/BaseScroll";
import { getRankList } from "@/view/rank/store/actionCreators";
import { filterIndex } from "@/api/utils";
import style from "./style/base-rank.module.less";

function RankComponent(props) {
  const { rankList } = props;
  const { getRankListHandle } = props;
  useEffect(() => {
    getRankListHandle();
    // eslint-disable-next-line
  }, []);
  let globalStartIndex = filterIndex(rankList);
  let officialList = rankList.slice(0, globalStartIndex);
  let globalList = rankList.slice(globalStartIndex);
  const renderSongList = (list) => {
    return list.length ? (
      <div className={style["song-item-container"]}>
        {list.map((item, index) => {
          return (
            <div key={index} className={style["song-item"]}>
              {index + 1}. {item.first} - {item.second}
            </div>
          );
        })}
      </div>
    ) : null;
  };
  // 共用的显示图片组件
  const officialComponent = (list, isGlobal = false) => {
    return (
      <div
        className={isGlobal ? style["global-container"] : style["officia-main"]}
      >
        {list.map((item, index) => {
          return (
            <div key={`${item.coverImgId}${index}`}>
              <div
                className={[
                  style["officia-container"],
                  style["img_wrapper"],
                ].join(" ")}
              >
                <img
                  className={style["officia-img"]}
                  src={item.coverImgUrl}
                  alt=""
                />
                <span className={style["update_frequecy"]}>
                  {item.updateFrequency}
                </span>
              </div>
              {renderSongList(item.tracks)}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className={style["container"]}>
      <BaseScroll>
        <div>
          <div>
            官方
            {officialComponent(officialList)}
          </div>
          <div>
            全球榜
            {officialComponent(globalList, true)}
          </div>
        </div>
      </BaseScroll>
    </div>
  );
}

const mapState = (state) => {
  return {
    rankList: state.rank.rankList,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRankListHandle() {
      dispatch(getRankList());
    },
  };
};

export default connect(mapState, mapDispatch)(RankComponent);
