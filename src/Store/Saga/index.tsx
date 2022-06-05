import { all } from "redux-saga/effects";
import appSaga from "./app";
import authSaga from "./auth";
import bookSaga from './book'

export interface responseGenerator{
  data?:any | undefined;
  message?: string | undefined;
  statusCode?:number | undefined;
}

export default function* RootSaga() {
  yield all([
    appSaga(), 
    authSaga(), 
    bookSaga(),
  ]);
}