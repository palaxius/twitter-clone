import produce from 'immer'
import {
  ADD_TWEET,
  addTweetState, FETCH_ADD_TWEET,
  FETCH_TWEETS,
  LoadingState, SET_ADD_TWEET_STATE,
  SET_LOADING_TWEETS_STATE,
  SET_TWEETS
} from "../../actionTypes";

const initialTweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
  addTweetState: addTweetState.NEVER,
}

export const tweetsReducer = produce((draft, action) => {

  switch (action.type) {

    case SET_TWEETS:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break;

    case FETCH_TWEETS:
      draft.items = []
      draft.loadingState = LoadingState.LOADING
      break;

    case SET_LOADING_TWEETS_STATE:
      draft.loadingState = action.payload
      break;

    case FETCH_ADD_TWEET:
      draft.addTweetState = addTweetState.LOADING
      break;

    case ADD_TWEET:
      draft.items.splice(0, 0, action.payload)
      draft.addTweetState = addTweetState.LOADED
      break;

    case SET_ADD_TWEET_STATE:
      draft.addTweetState = action.payload
      break;

    default:
      break;
  }
}, initialTweetsState)