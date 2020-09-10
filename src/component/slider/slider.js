/**
 * @Description: 轮播
 * @author
 * @date 2020/9/9
 */
import React, { useState, useEffect } from "react";
import "swiper/dist/css/swiper.min.css"; // 还是切回4版本 同时,移除webpack配置里 ,默认CSS为module,导致基本样式失效的问题
import Swiper from "swiper";
import style from "./slider.module.less";

function Slider(props) {
  const { bannerList } = props;
  const [sliderSwiper, setSliderSwiper] = useState(null);
  useEffect(() => {
    if (!sliderSwiper && bannerList.length) {
      console.log(111, "初始化轮播");
      const mySwiper = new Swiper("#swiper-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination" },
      });
      setSliderSwiper(mySwiper);
    }
  }, [bannerList.length, sliderSwiper]);
  return (
    <div className={style["container"]}>
      <div className={"ceshidiv"}>111</div>
      <div className={style["before"]}></div>
      <div
        className={["swiper-container", style["slider-container-nn"]].join(" ")}
        id="swiper-container"
      >
        <div className={"swiper-wrapper"}>
          {bannerList.map((sliderItem, index) => {
            return (
              <div className={"swiper-slide"} key={sliderItem.imageUrl + index}>
                <img
                  width="100%"
                  height="100%"
                  src={sliderItem.imageUrl}
                  alt="轮播logo"
                />
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Slider;
