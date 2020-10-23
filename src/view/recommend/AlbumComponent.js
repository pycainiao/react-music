import React from "react";
// import Loading from "../../baseUi/loading";
import LoadingV2 from "../../baseUi/loadingV2";
function AlbumComponent(props) {
  const id = props.match.params.id;
  return (
    <div className={"aaa"}>
      这是AlbumComponent,Recommend的详情{id}
      <h2>1111</h2>
      {/*<Loading></Loading>*/}
      <LoadingV2></LoadingV2>
    </div>
  );
}

export default AlbumComponent;
