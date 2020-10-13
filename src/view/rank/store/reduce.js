import { CHANGE_RANK_LIST } from "@/view/rank/store/constants";

const rankState = {
  rankList: [],
};

export default (state = rankState, action) => {
  switch (action.type) {
    case CHANGE_RANK_LIST:
      let data = { ...state };
      data.rankList = action.data;
      return data;
    default:
      return state;
  }
};
