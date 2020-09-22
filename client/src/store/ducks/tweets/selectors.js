import {createSelector} from "reselect";
import {LoadingState} from "../../types";

export const selectTweets = (state) => state.tweets

export const selectLoadingState = (state) => selectTweets(state).loadingState

export const selectIsLoading = (state) => selectLoadingState(state) === LoadingState.LOADING

export const selectIsLoaded = (state) => selectLoadingState(state) === LoadingState.LOADED

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items)
