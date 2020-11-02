import { call, takeLatest, put } from 'redux-saga/effects'
import {addTweetState, FETCH_ADD_TWEET, FETCH_TWEETS, LoadingState} from "../../actionTypes";
import {TweetsApi} from "../../../api/tweetsApi";
import {addTweet, setAddTweetState, setTweets, setTweetsLoadingState} from "./actionCreator";

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(items))
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* fetchAddTweetRequest({ payload: text }) {
  try {
    const item = yield call(TweetsApi.addTweet, text)
    yield put(addTweet(item))
  } catch (e) {
    yield put(setAddTweetState(addTweetState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(FETCH_ADD_TWEET, fetchAddTweetRequest)
}