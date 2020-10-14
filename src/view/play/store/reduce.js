import { SET_PLAY_LIST } from "@/view/play/store/constants";

const playState = {
  playList: [], // 播放歌曲的列表
};

export const playReduce = (state = playState, action) => {
  switch (action.type) {
    case SET_PLAY_LIST:
      let data = { ...state };
      data.playList = action.data;
      return data;
    default:
      return state;
  }
};
