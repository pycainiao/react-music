import * as actionTypes from "./constants";

const recommendInit = {
  bannerList: [], // 轮播图
  recommendList: [], // 推荐列表
  enterLoading: true,
};

export default (state = recommendInit, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      let bannerList = { ...state };
      bannerList.bannerList = action.data || [];
      return bannerList;
    case actionTypes.CHANGE_RECOMMEND_LIST:
      let recommendList = { ...state };
      recommendList.recommendList = action.data || [];
      return recommendList;
    case actionTypes.CHANGE_RECOMMEND_LOADING:
      let loadingData = { ...state };
      loadingData.enterLoading = action.data;
      return loadingData;
    default:
      return state;
  }
};
