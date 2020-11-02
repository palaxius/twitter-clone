import {createSelector} from "reselect";
import {LoadingState} from "../../actionTypes";

export const selectTweetsState = (state) => state.tweets

export const selectLoadingTweetsState = (state) => selectTweetsState(state).loadingState

export const selectAddTweetState = (state) => selectTweetsState(state).addTweetState

export const selectIsLoading = (state) => selectLoadingTweetsState(state) === LoadingState.LOADING

export const selectIsLoaded = (state) => selectLoadingTweetsState(state) === LoadingState.LOADED

export const selectTweetsItems = (state) => selectTweetsState(state).items
