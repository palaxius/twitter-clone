import {FETCH_TRENDS, SET_LOADING_TRENDS_STATE, SET_TRENDS} from "../../actionTypes";

export const setTrends = (payload) => ({
  type: SET_TRENDS,
  payload
})

export const fetchTrends = () => ({
  type: FETCH_TRENDS
})

export const setTrendsLoadingState = (payload) => ({
  type: SET_LOADING_TRENDS_STATE,
  payload
})