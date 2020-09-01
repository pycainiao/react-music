import React from "react";

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
    </div>
  );
}

export default Recommend;
