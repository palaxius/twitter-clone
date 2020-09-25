import produce from 'immer'
import {LoadingState, FETCH_TWEET_DATA, SET_LOADING_TWEET_STATE, SET_TWEET_DATA} from "../../actionTypes";

const initialTweetDataState = {
  data: undefined,
  loadingState: LoadingState.NEVER
}

export const tweetDataReducer = produce((draft, action) => {

  switch (action.type) {

    case SET_TWEET_DATA:
      draft.data = action.payload
      draft.loadingState = LoadingState.LOADED
      break;

    case FETCH_TWEET_DATA:
      draft.data = undefined
      draft.loadingState = LoadingState.LOADING
      break;

    case SET_LOADING_TWEET_STATE:
      draft.loadingState = action.payload
      break;

    default:
      break;
  }
}, initialTweetDataState)