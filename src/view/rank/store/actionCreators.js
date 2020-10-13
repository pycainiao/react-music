import { CHANGE_RANK_LIST } from "@/view/rank/store/constants";
import { getRankListRequest } from "@/api/request";

export const changeRankList = (data) => {
  return {
    type: CHANGE_RANK_LIST,
    data,
  };
};

export const getRankList = () => {
  return (dispatch) => {
    getRankListRequest().then((data) => {
      let list = data && data.list;
      dispatch(changeRankList(list));
    });
  };
};
