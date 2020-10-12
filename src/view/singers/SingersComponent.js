import React from "react";
import SingCategory from "@/view/singers/SingCategory";
import style from "./style/base-main.module.less";

import { categoryTypes, alphaTypes } from "@/api/config";

function SingersComponent(props) {
  return (
    <div className={style["container"]}>
      {/*头部*/}
      <header className={style["singer-list-header"]}>
        <SingCategory title={"分类(默认热门):"} list={categoryTypes} />
        <SingCategory title={"首字母:"} list={alphaTypes} />
      </header>
      {/*列表*/}
      <main className={"singers-list-main"}>这是歌手列表</main>
    </div>
  );
}

export default React.memo(SingersComponent);
