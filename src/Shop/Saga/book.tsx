import { put, all, takeLatest } from "redux-saga/effects";
import { responseGenerator } from './index'
import actionTypes from "../Action/constants";
import Services from "../../Services"
import Action from "../Action"

function* FindGenre(){
  console.log("find Genre");

  try {
    const response: responseGenerator = yield Services.book.findGenre();
    // console.log('response', response)
    if(response?.statusCode === 200){
      yield put(Action.book.findGenreSuccess(response.data))
    }else {
      yield put(Action.book.findGenreFailure(response.data))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindAuthor(){
  console.log("find Author");
  try {
    const response: responseGenerator = yield Services.book.findAuthor();
    console.log('response', response)
    if(response?.statusCode === 200){
      yield put(Action.book.findAuthorSuccess(response?.data))
    }else {
      yield put(Action.book.findAuthorFailure(response?.data))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindManga(action: any){
  try {
    const data = action.payload
    const response: responseGenerator = yield Services.book.findManga(data);
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.book.findMangaSuccess(response))
    }else {
      yield put(Action.book.findMangaFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindMangaById(action: any){
  const id = action.payload
  try {
    const response: responseGenerator = yield Services.book.findMangaById(id);
    console.log('response', response)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(Action.book.findMangaByIdSuccess(response))
    }else{
      yield put(Action.book.findMangaByIdFailure(response))
    }
  } catch (error) {
    console.log('Error DetailSagas', error)
  } finally {
    console.log('DetailSagas')
  }
}

function* FindChapterByMangaId(action: any){
  const data = action.payload
  try {
    const response: responseGenerator = yield Services.book.findChapterByMangaId(data);
    console.log('response', response)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(Action.book.findChapterByMangaIdSuccess(response))
    }else{
      yield put(Action.book.findChapterByMangaIdFailure(response))
    }
  } catch (error) {
    console.log('Error Detail-ChapterSagas', error)
  } finally {
    console.log('Detail-ChapterSagas')
  }
}

function* FindChapterById(action: any){
  const id = action.payload
  try {
    const response: responseGenerator = yield Services.book.findChapterById(id);
    console.log('response', response)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(Action.book.findChapterByIdSuccess(response))
    }else{
      yield put(Action.book.findChapterByIdFailure(response))
    }
  } catch (error) {
    console.log('Error ChapterSagas', error)
  } finally {
    console.log('ChapterSagas')
  }
}

export default function* bookSaga() {
  yield all([
    takeLatest(actionTypes.findManga, FindManga),
    takeLatest(actionTypes.findMangaById, FindMangaById),
    
    takeLatest(actionTypes.findGenre, FindGenre),
    takeLatest(actionTypes.findAuthor, FindAuthor),

    takeLatest(actionTypes.findChapterByMangaId, FindChapterByMangaId),
    takeLatest(actionTypes.findChapterById, FindChapterById),
  ]) 
}