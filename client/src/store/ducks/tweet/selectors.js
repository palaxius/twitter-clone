import {LoadingState} from "../../actionTypes";

export const selectTweet = (state) => state.tweet

export const selectLoadingTweetDataState = (state) => selectTweet(state).loadingState

export const selectIsLoading = (state) => selectLoadingTweetDataState(state) === LoadingState.LOADING

export const selectIsLoaded = (state) => selectLoadingTweetDataState(state) === LoadingState.LOADED

export const selectTweetData = (state) => selectTweet(state).data
