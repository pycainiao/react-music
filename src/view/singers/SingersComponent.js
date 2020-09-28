import React from "react";
import SingCategory from "@/view/singers/SingCategory";

import { categoryTypes } from "@/api/config";

function SingersComponent(props) {
  return (
    <div className={"container"}>
      <header>
        <SingCategory title={"分类(默认热门):"} list={categoryTypes} />
        这是头部
      </header>
      <main>这是SingersComponent</main>
    </div>
  );
}

export default React.memo(SingersComponent);
