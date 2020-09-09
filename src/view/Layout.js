// 主路由
import React from "react";
import BaseHeader from "../component/Header";

function Layout(props) {
  return (
    <>
      <BaseHeader />
      {props.children}
    </>
  );
}

export default Layout;
