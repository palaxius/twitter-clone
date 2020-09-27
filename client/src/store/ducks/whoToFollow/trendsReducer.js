import produce from 'immer'
import {
  FETCH_WHO_FOLLOW,
  LoadingState,
  SET_LOADING_WHO_FOLLOW_STATE,
  SET_WHO_FOLLOW
} from "../../actionTypes";

const initialWhoFollowState = {
  items: [],
  loadingState: LoadingState.NEVER
}

export const whoFollowReducer = produce((draft, action) => {

  switch (action.type) {

    case SET_WHO_FOLLOW:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break;

    case FETCH_WHO_FOLLOW:
      draft.items = []
      draft.loadingState = LoadingState.LOADING
      break;

    case SET_LOADING_WHO_FOLLOW_STATE:
      draft.loadingState = action.payload
      break;

    default:
      break;
  }
}, initialWhoFollowState)