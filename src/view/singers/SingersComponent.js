import React, { useEffect } from "react";
import BaseScroll from "@/component/scroll/BaseScroll";
import SingCategory from "@/view/singers/SingCategory";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import { getSingersList } from "@/view/singers/store/actionCreators";
import style from "./style/base-main.module.less";

import { alphaTypes, categoryTypes } from "@/api/config";

function SingersComponent(props) {
  const { getHotsSingersList } = props;
  useEffect(() => {
    getHotsSingersList();
    // eslint-disable-next-line
  }, []);
  // 歌手列表
  const renderSingerList = () => {
    const { singerList } = props;
    return (
      <div>
        {singerList.map((item, index) => {
          return (
            <div key={item.accountId + "" + index}>
              <div className="img_wrapper">
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src={require("./singer.png")}
                      alt="music"
                    />
                  }
                >
                  <img
                    src={`${item.picUrl}?param=300x300`}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
              </div>
              <span className="name">{item.name}</span>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className={style["container"]}>
      {/*头部*/}
      <header className={style["singer-list-header"]}>
        <SingCategory title={"分类(默认热门):"} list={categoryTypes} />
        <SingCategory title={"首字母:"} list={alphaTypes} />
      </header>
      {/*列表*/}
      <main className={style["singers-list-main"]}>
        <BaseScroll>{renderSingerList()}</BaseScroll>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    singerList: state.singers.singerList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getHotsSingersList() {
      dispatch(getSingersList());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(SingersComponent));
