/*
author: nong
time: 2020-24-25 11:24:33
function: 公共的滑动组件
*/
import React, { useEffect, useRef, useState } from "react";
import BScroll from "better-scroll";
import style from "./scroll.module.less";

const BaseScroll = (props) => {
  const scrollDom = useRef();
  const [bScroll, setBScroll] = useState();
  useEffect(() => {
    const scroll = new BScroll(scrollDom.current, {});
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
  }, []);
  useEffect(() => {
    if (bScroll) {
      console.log("刷新滚动");
      bScroll.refresh(); // 因为数据是后获取到的,因此需要刷新,重新计算才行,不然,滚动不会生效的
    }
  });
  return (
    <div className={style["base-scroll-main"]} ref={scrollDom}>
      {props.children}
    </div>
  );
};
export default BaseScroll;
