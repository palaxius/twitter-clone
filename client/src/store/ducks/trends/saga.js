import { call, takeLatest, put } from 'redux-saga/effects'

import {TrendsApi} from "../../../api/trendsApi";
import {setTrends, setTrendsLoadingState} from "./actionCreator";
import {FETCH_TRENDS, LoadingState} from "../../types";

export function* fetchTrendsRequest() {
  try {
    const items = yield call(TrendsApi.fetchTrends)
    yield put(setTrends(items))
  } catch (e) {
    yield put(setTrendsLoadingState(LoadingState.ERROR))
  }
}

export function* trendsSaga() {
  yield takeLatest(FETCH_TRENDS, fetchTrendsRequest)
}