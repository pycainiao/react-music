/*
author: nong
time: 2020-24-25 11:24:33
function: 公共的滑动组件
*/
/*
* 滑动组件相关说明
* BetterScroll 实现横向滚动，对 CSS 是比较苛刻的。首先你要保证 wrapper 不换行，并且 content 的 display 是 inline-block。
* .scroll-wrapper
  // ...
  white-space nowrap
.scroll-content
  // ...
  display inline-block
*
* */

import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import BScroll from "better-scroll";
import "./scroll.module.less";

//
const BaseScroll = (props) => {
  const { direction } = props;
  const scrollDom = useRef();
  const [bScroll, setBScroll] = useState();
  useEffect(() => {
    const scroll = new BScroll(scrollDom.current, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (bScroll) {
      console.log("刷新滚动");
      bScroll.refresh(); // 因为数据是后获取到的,因此需要刷新,重新计算才行,不然,滚动不会生效的
    }
  });
  return (
    <div className={"base-scroll-main"} ref={scrollDom}>
      {props.children}
    </div>
  );
};
BaseScroll.defaultProps = {
  direction: "vertical",
};

BaseScroll.propTypes = {
  direction: PropTypes.oneOf(["vertical", "horizental"]),
};

export default BaseScroll;
