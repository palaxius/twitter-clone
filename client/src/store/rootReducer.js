import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/tweetsReducer";
import {trendsReducer} from "./ducks/trends/trendsReducer";
import {tweetDataReducer} from "./ducks/tweet/tweetDataReducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  trends: trendsReducer,
  tweet: tweetDataReducer
})