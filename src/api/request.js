import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
}; // 首页轮播图

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};
