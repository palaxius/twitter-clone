import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'
import {FETCH_TWEETS} from "../../types";
import {TweetsApi} from "../../../api/tweetsApi";
import {setTweets, setTweetsLoadingState} from "./actionCreator";

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(items))
  } catch (e) {
    yield put(setTweetsLoadingState())
  }
}

export function* tweetsSaga() {
  yield takeLatest(FETCH_TWEETS, fetchTweetsRequest)
}