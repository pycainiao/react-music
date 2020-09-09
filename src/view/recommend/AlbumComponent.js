import React from "react";

function AlbumComponent(props) {
  const id = props.match.params.id;
  return (
    <div className={"aaa"}>
      这是AlbumComponent,Recommend的详情{id}
      <h2>1111</h2>
    </div>
  );
}

export default AlbumComponent;
