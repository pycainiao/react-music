/*
author: nong
time: 2020-51-27 15:51:55
function: 歌手默认分类
*/

import React from "react";
import BaseScroll from "@/component/scroll/BaseScroll";
import style from "./style/sing-category.module.less";

function SingCategory(props) {
  const { title, list } = props;
  console.log(list);
  return (
    <div className={style["aaaa"]}>
      <BaseScroll direction={"horizental"}>
        {/*下面这个div,必须为inline-block*/}
        <div className={style["scroll-content"]}>
          <div className={style["sing-category-container"]}>
            <span>{title}</span>
            {list.map((item) => {
              return <span key={item.key}>{item.name}</span>;
            })}
          </div>
        </div>
      </BaseScroll>
    </div>
  );
}

export default SingCategory;
