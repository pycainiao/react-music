import { GET_SINGERS_LIST } from "@/view/singers/store/constants";

const singersState = {
  singerList: [],
};

export default (state = singersState, action) => {
  switch (action.type) {
    case GET_SINGERS_LIST:
      let data = { ...singersState };
      data.singerList = action.data;
      return data;
    default:
      return singersState;
  }
};
