import {tweetsSaga} from "./ducks/tweets/saga";
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([tweetsSaga()])
}