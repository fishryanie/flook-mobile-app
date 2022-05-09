import { put, all, takeLatest } from "redux-saga/effects";
import { responseGenerator } from './index'
import actionTypes from "../Action/constants";
import Services from "../../Services"
import Action from "../Action"




export default function* appSaga() {
  yield all([
  
    // takeLatest(actionTypes.findChapterById, FindChapterById),
  ]) 
}