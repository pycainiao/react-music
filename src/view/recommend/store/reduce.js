import * as actionTypes from "./constants";

const defaultState = {
  testData: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      let addState = { ...state };
      addState.testData += 1;
      return addState;
    default:
      return state;
  }
};
