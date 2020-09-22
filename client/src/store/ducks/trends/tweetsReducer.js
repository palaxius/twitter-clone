import produce from 'immer'
import {FETCH_TWEETS, LoadingState, SET_LOADING_STATE, SET_TWEETS} from "../../types";

const initialTweetsState = {
  items: [],
  loadingState: LoadingState.NEVER
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

    case SET_LOADING_STATE:
      draft.loadingState = action.payload
      break;

    default:
      break;
  }
}, initialTweetsState)