import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/tweetsReducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
})