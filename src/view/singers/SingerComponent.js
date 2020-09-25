import React, { useState } from "react";
import Son1 from "@/component/test/Son1";
import Son2 from "@/component/test/Son2";

function SingerComponent(props) {
  const [count, setCount] = useState(0);
  const ref = React.createRef();
  const getSon2Ref = () => {
    console.log(ref.current);
    ref.current.son2RefFc();
  };
  return (
    <div>
      这是单个歌手详情
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        改变的是父组件
      </button>
      <button onClick={getSon2Ref}>ref</button>
      <Son1 />
      <Son2 ref={ref} />
    </div>
  );
}

export default SingerComponent;
