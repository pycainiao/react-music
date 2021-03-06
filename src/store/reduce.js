import { combineReducers } from "redux";
import { reduce as recommendReducer } from "../view/recommend/store/index";
import { reduce as singersReducer } from "@/view/singers/store/index";
import { reduce as rankReducer } from "@/view/rank/store/index";
import { playReduce } from "@/view/play/store";

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
  play: playReduce,
});
