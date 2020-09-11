import React, {useEffect, useRef, useState} from "react";
import {getBannerList, getRecommendList} from "./store/actionCreators";
import {connect} from "react-redux";
import BScroll from "better-scroll";
import Slider from "@/component/slider/slider";
import RecommendList from "@/component/recommendlist/RecommendList";
import style from "./style/recommend.module.less";

function Recommend(props) {
  const { bannerList, recommendList } = props;
  const { getBannerListDispatch, getRecommendListDispatch } = props;
  const reMain = useRef();
  const [bScroll, setBScroll] = useState();
  useEffect(() => {
    // 可以传递的是一个原生的DOM 对象
    const scroll = new BScroll(reMain.current, {});
    if (bannerList.length === 0) {
      // 获取轮播图列表
      getBannerListDispatch();
    }
    !recommendList.length && getRecommendListDispatch(); // 推荐列表
    setBScroll(scroll);
    // setTimeout(() => {
    //   scroll.refresh(); // 需要重新刷新,因为,还没获取玩数据,这个BScroll 已经初始化完了 带后续完善下这个
    // }, 5000);
    return () => {
      setBScroll(null);
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (bScroll) {
      console.log("刷新滚动");
      bScroll.refresh(); // 因为数据是后获取到的,因此需要刷新,重新计算才行,不然,滚动不会生效的
    }
  });
  return (
    <div className={style["re-main"]} ref={reMain} id="wrapper">
      {/*下面这个div是必须的,不然无法出现滚动,这是出现滚动的条件导致的*/}
      <div>
        <Slider bannerList={bannerList} />
        <RecommendList recommendList={recommendList} />
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
