import actionType from "../../Constants/TypeActionConstant";
import { all, put, takeLatest } from "redux-saga/effects";
import { getAllListMovieServices, getListFavoriteServices, getMovieByIdServices } from "../../Services/AppService";




function* getAllListMovieSagas(){
  try {
    // yield put({type: showLoadingConstant});
    const response = yield getAllListMovieServices()
    yield put({
      type: actionType.getAllListMovieContantSuccess,
      payload: response,
    });
    // }else{
      // yield put({
      //   type: actionType.getAllListMovieContantFail,
      //   payload: response?.messages,
      // });
    // }
  } catch (error) {
    console.log(error)
  }finally{

  }
}

function* getMovieByIdSagas(action){
  try {
    const id = action.payload
    const response = yield getMovieByIdServices(id)
    yield put({
      type: actionType.getMovieByIdConstantSuccess,
      payload: response
    })

  } catch (error) {
    console.log(error)
  } finally {

  }
}

function* getListMovieFavoriteSagas(action){
  try {
    const response = yield getListFavoriteServices(action.payload)
    if(response){
      yield put({
        type: actionType.getListFavoriteConstant,
        payload: response
      })
    }
  } catch (error) {
    console.log(error)
  } finally {

  }
}









export default function* appSaga() {
  yield all([
    takeLatest(actionType.getAllListMovieConstant, getAllListMovieSagas),
    takeLatest(actionType.getListFavoriteConstant, getListMovieFavoriteSagas),
    takeLatest(actionType.getMovieByIdConstant, getMovieByIdSagas),
  ]);
}