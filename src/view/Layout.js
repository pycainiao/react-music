// 主路由
import React from "react";
import BaseHeader from "../component/Header";

function Layout(props) {
  return (
    <>
      <BaseHeader />
      <div className="container-main">{props.children}</div>
    </>
  );
}

export default Layout;
