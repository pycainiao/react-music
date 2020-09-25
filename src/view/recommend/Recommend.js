import React, { useEffect } from "react";
import { getBannerList, getRecommendList } from "./store/actionCreators";
import { connect } from "react-redux";
import Slider from "@/component/slider/slider";
import RecommendList from "@/component/recommendlist/RecommendList";
import style from "./style/recommend.module.less";
import BaseScroll from "@/component/scroll/BaseScroll";
function Recommend(props) {
  const { bannerList, recommendList } = props;
  const { getBannerListDispatch, getRecommendListDispatch } = props;
  useEffect(() => {
    !bannerList.length && getBannerListDispatch(); // 获取轮播图列表
    !recommendList.length && getRecommendListDispatch(); // 推荐列表
    // eslint-disable-next-line
  }, []);
  return (
    <div className={style["re-main"]}>
      <BaseScroll>
        {/*下面这个div是必须的,不然无法出现滚动,这是出现滚动的条件导致的*/}
        <div>
          <Slider bannerList={bannerList} />
          <RecommendList recommendList={recommendList} />
        </div>
      </BaseScroll>
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
