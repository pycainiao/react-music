import React, { useRef, useState, useEffect } from "react";
import { ceshiAdd } from "./store/actionCreators";
import { connect } from "react-redux";
import BScroll from "better-scroll";
import Slider from "@/component/slider/slider";
import { getBannerRequest } from "@/api/request";
import style from "./style/recommend.module.less";
function Recommend(props) {
  const reMain = useRef();
  const [bannerList, setBanner] = useState([]);
  // 跳转详情测试a
  let goToDetail = () => {
    console.log(props);
    props.history.push(`/recommend/${Math.random()}`);
  };
  useEffect(() => {
    // 可以传递的是一个原生的DOM 对象
    // eslint-disable-next-line no-unused-vars
    const scroll = new BScroll(reMain.current);
    if (bannerList.length === 0) {
      // 获取轮播图列表
      getBannerRequest().then((res) => {
        console.log(res);
        if (res.code === 200) {
          setBanner(res.banners);
        }
      });
    }
  }, [bannerList.length]);
  return (
    <div className={style["re-main"]} ref={reMain}>
      {/*下面这个div是必须的,不然无法出现滚动,这是出现滚动的条件导致的*/}
      <div>
        <Slider bannerList={bannerList} />
        <button onClick={() => goToDetail}>跳转详情</button>
        <h2>{props.testData}</h2>
        <button onClick={props.addClick}>添加</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    testData: state.recommend.testData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addClick() {
      dispatch(ceshiAdd());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
