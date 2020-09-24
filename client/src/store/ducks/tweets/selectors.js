import {createSelector} from "reselect";
import {LoadingState} from "../../types";

export const selectTweets = (state) => state.tweets

export const selectLoadingTweetsState = (state) => selectTweets(state).loadingState

export const selectIsLoading = (state) => selectLoadingTweetsState(state) === LoadingState.LOADING

export const selectIsLoaded = (state) => selectLoadingTweetsState(state) === LoadingState.LOADED

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items)
