import { call, takeLatest, put } from 'redux-saga/effects'
import {FETCH_TWEET_DATA, LoadingState} from "../../actionTypes";
import {TweetsApi} from "../../../api/tweetsApi";
import {setTweetData, setTweetLoadingState } from "./actionCreator";

export function* fetchTweetDataRequest({payload: tweetId}) {
  try {
    const data = yield call(TweetsApi.fetchTweetData, tweetId)
    yield put(setTweetData(data[0]))
  } catch (e) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
  }
}

export function* tweetDataSaga() {
  yield takeLatest(FETCH_TWEET_DATA, fetchTweetDataRequest)
}