import { combineReducers } from "redux";
import { reduce as recommendReducer } from "../view/recommend/store/index";

export default combineReducers({
  recommend: recommendReducer,
});
