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

export function* fetchAddTweetRequest({ payload }) {
  try {
    const data = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        name: "Elon Musk",
        verified: true,
        username: "elonmusk",
        avatarUrl: "https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_bigger.jpg"
      }
    }
    const item = yield call(TweetsApi.addTweet, data)
    yield put(addTweet(item))
  } catch (e) {
    yield put(setAddTweetState(addTweetState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(FETCH_ADD_TWEET, fetchAddTweetRequest)
}