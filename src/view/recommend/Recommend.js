import React, { useRef, useEffect } from "react";
import { getBannerList, getRecommendList } from "./store/actionCreators";
import { connect } from "react-redux";
import BScroll from "better-scroll";
import Slider from "@/component/slider/slider";
import RecommendList from "@/component/recommendlist/RecommendList";
import style from "./style/recommend.module.less";
function Recommend(props) {
  const { bannerList, recommendList } = props;
  const { getBannerListDispatch, getRecommendListDispatch } = props;
  const reMain = useRef();
  useEffect(() => {
    // 可以传递的是一个原生的DOM 对象
    // eslint-disable-next-line no-unused-vars
    const scroll = new BScroll(reMain.current, {
      scrollY: true,
    });
    if (bannerList.length === 0) {
      // 获取轮播图列表
      getBannerListDispatch();
    }
    !recommendList.length && getRecommendListDispatch(); // 推荐列表

    // eslint-disable-next-line
  }, []);
  return (
    <div className={style["re-main"]} ref={reMain}>
      {/*下面这个div是必须的,不然无法出现滚动,这是出现滚动的条件导致的*/}
      <div>
        <Slider bannerList={bannerList} />
        <RecommendList recommendList={recommendList} />
        {/*<div style={{ height: "1000px" }}>1</div>*/}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerListDispatch() {
      dispatch(getBannerList()); // 派发
    },
    getRecommendListDispatch() {
      dispatch(getRecommendList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
