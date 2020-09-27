import { call, takeLatest, put } from 'redux-saga/effects'

import {setWhoFollow, setWhoFollowLoadingState} from "./actionCreator";
import {FETCH_WHO_FOLLOW, LoadingState} from "../../actionTypes";
import {WhoFollowApi} from "../../../api/whoFollowApi";

export function* fetchWhoFollowRequest() {
  try {
    const items = yield call(WhoFollowApi.fetchWhoFollow)
    yield put(setWhoFollow(items))
  } catch (e) {
    yield put(setWhoFollowLoadingState(LoadingState.ERROR))
  }
}

export function* whoFollowSaga() {
  yield takeLatest(FETCH_WHO_FOLLOW, fetchWhoFollowRequest)
}