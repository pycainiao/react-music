import React, { useEffect } from "react";
import styled from "styled-components";
import { getBannerList, getRecommendList } from "./store/actionCreators";
import { setPlayList } from "@/view/play/store/actionCreators";
import { connect } from "react-redux";
import Slider from "@/component/slider/slider";
import RecommendList from "@/component/recommendlist/RecommendList";
import style from "./style/recommend.module.less";
import BaseScroll from "@/component/scroll/BaseScroll";
import LoadingV2 from "@/baseUi/loadingV2";
const LoadingV2Wrapper = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;
function Recommend(props) {
  const { bannerList, recommendList, enterLoading } = props;

  const {
    getBannerListDispatch,
    getRecommendListDispatch,
    setPlayListHandle,
  } = props;
  useEffect(() => {
    getBannerListDispatch(); // 获取轮播图列表
    getRecommendListDispatch(); // 推荐列表
    // eslint-disable-next-line
  }, []);
  return (
    <div className={style["re-main"]}>
      <BaseScroll>
        {/*下面这个div是必须的,不然无法出现滚动,这是出现滚动的条件导致的*/}
        <div>
          <Slider bannerList={bannerList} />
          <button onClick={() => setPlayListHandle()}>打开播放器测试</button>
          <RecommendList recommendList={recommendList} />
        </div>
      </BaseScroll>
      {enterLoading ? (
        <LoadingV2Wrapper>
          <LoadingV2></LoadingV2>
        </LoadingV2Wrapper>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList,
    enterLoading: state.recommend.enterLoading,
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
    setPlayListHandle() {
      dispatch(setPlayList([1]));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
