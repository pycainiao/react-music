import { SET_PLAY_LIST } from "@/view/play/store/constants";

export const setPlayList = (data) => {
  return {
    type: SET_PLAY_LIST,
    data,
  };
};
