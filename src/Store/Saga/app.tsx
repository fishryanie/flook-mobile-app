import { put, all, takeLatest } from "redux-saga/effects";
import { responseGenerator } from './index'
import actionTypes from "../Actions/constants";
import Services from "../../Services"
import Action from "../Actions"




export default function* appSaga() {
  yield all([
  
    // takeLatest(actionTypes.findChapterById, FindChapterById),
  ]) 
}