import React from "react";
import { ceshiAdd } from "./store/actionCreators";
import { connect } from "react-redux";

function Recommend(props) {
  // 跳转详情测试
  let goToDetail = () => {
    console.log(props);
    props.history.push(`/recommend/${Math.random()}`);
  };
  return (
    <div>
      这是Recommend
      <button onClick={goToDetail}>跳转详情</button>
      <h2>{props.testData}</h2>
      <button onClick={props.addClick}>添加</button>
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
