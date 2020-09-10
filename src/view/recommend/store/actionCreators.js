/**
 * 这是创建action的地方. 是个函数工厂
 */
import * as actionTypes from "./constants";
import { getBannerRequest, getRecommendListRequest } from "@/api/request";

export const changeBannerList = (data) => {
  return {
    type: actionTypes.CHANGE_BANNER,
    data: data,
  };
};
export const checkRecommendList = (data) => {
  return {
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data,
  };
};
export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then((res) => {
        const action = changeBannerList(res.banners);
        dispatch(action);
      })
      .catch((error) => {
        console.log("轮播图报错");
      });
  };
};

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest()
      .then((res) => {
        console.log(res, "列表部分");
        const action = checkRecommendList(res.result);
        dispatch(action);
      })
      .catch((error) => {
        console.log("获取列表失败");
      });
  };
};
