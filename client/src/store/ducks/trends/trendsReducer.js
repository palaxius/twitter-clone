import produce from 'immer'
import {FETCH_TRENDS, LoadingState, SET_LOADING_TRENDS_STATE, SET_TRENDS} from "../../actionTypes";

const initialTrendsState = {
  items: [],
  loadingState: LoadingState.NEVER
}

export const trendsReducer = produce((draft, action) => {

  switch (action.type) {

    case SET_TRENDS:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break;

    case FETCH_TRENDS:
      draft.items = []
      draft.loadingState = LoadingState.LOADING
      break;

    case SET_LOADING_TRENDS_STATE:
      draft.loadingState = action.payload
      break;

    default:
      break;
  }
}, initialTrendsState)