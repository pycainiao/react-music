import { combineReducers } from "redux";
import { reduce as recommendReducer } from "../view/recommend/store/index";
import { reduce as singersReducer } from "@/view/singers/store/index";

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
});
