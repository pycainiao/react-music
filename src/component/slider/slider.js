/**
 * @Description: 轮播
 * @author
 * @date 2020/9/9
 */
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper.less";
import style from "./slider.module.less";

function Slider(props) {
  const { bannerList } = props;
  useEffect(() => {
    console.log(111);
    // eslint-disable-next-line no-unused-vars
    const mySwiper = new Swiper("#swiper-container", {
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: { el: ".swiper-pagination" },
    });
  }, [bannerList]);
  return (
    <div className={style["container"]}>
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
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
