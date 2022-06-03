import { all } from "redux-saga/effects";
import appSaga from "./AppSaga";
import authSaga from "./AuthSaga";
export default function* RootSaga() {
  yield all([appSaga(), authSaga()]);
}