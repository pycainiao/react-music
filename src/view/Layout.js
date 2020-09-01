// 主路由
import React from "react";
import BaseHeader from "../component/Header";
function Layout(props) {
  return (
    <div>
      layout
      <BaseHeader />
      <div className="container">{props.children}</div>
    </div>
  );
}

export default Layout;
