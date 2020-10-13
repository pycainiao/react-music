import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
}; // 首页轮播图

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

// 歌手列表
export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

// 排行榜
export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};
