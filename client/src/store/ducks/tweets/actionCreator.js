import {
  ADD_TWEET,
  FETCH_ADD_TWEET,
  FETCH_TWEETS,
  SET_ADD_TWEET_STATE,
  SET_LOADING_TWEETS_STATE,
  SET_TWEETS
} from "../../actionTypes";

export const setTweets = (payload) => ({
  type: SET_TWEETS,
  payload
})

export const fetchTweets = () => ({
  type: FETCH_TWEETS
})

export const setTweetsLoadingState = (payload) => ({
  type: SET_LOADING_TWEETS_STATE,
  payload
})

export const fetchAddTweet = (payload) => ({
  type: FETCH_ADD_TWEET,
  payload
})

export const addTweet = (payload) => ({
  type: ADD_TWEET,
  payload
})

export const setAddTweetState = (payload) => ({
  type: SET_ADD_TWEET_STATE,
  payload
})