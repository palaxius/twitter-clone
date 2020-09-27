import {FETCH_WHO_FOLLOW, SET_LOADING_WHO_FOLLOW_STATE, SET_WHO_FOLLOW} from "../../actionTypes";

export const setWhoFollow = (payload) => ({
  type: SET_WHO_FOLLOW,
  payload
})

export const fetchWhoFollow = () => ({
  type: FETCH_WHO_FOLLOW
})

export const setWhoFollowLoadingState = (payload) => ({
  type: SET_LOADING_WHO_FOLLOW_STATE,
  payload
})