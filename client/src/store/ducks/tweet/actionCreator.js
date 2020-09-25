import { FETCH_TWEET_DATA, SET_LOADING_TWEET_STATE, SET_TWEET_DATA } from "../../actionTypes";

export const setTweetData = (payload) => ({
  type: SET_TWEET_DATA,
  payload
})

export const fetchTweetData = (payload) => ({
  type: FETCH_TWEET_DATA,
  payload
})

export const setTweetLoadingState = (payload) => ({
  type: SET_LOADING_TWEET_STATE,
  payload
})
