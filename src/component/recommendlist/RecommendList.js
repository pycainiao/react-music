import React from "react";

function RecommendList(props) {
  const { recommendList } = props;
  return (
    <>
      <h1 className="title">推荐歌单</h1>

      {recommendList.map((item) => {
        return (
          <div key={item.id} className={"wrapper"}>
            <div className="desc">{item.name}</div>
          </div>
        );
      })}
    </>
  );
}

export default RecommendList;
