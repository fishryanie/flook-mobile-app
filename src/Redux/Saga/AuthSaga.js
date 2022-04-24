import actionType from "../../Constants/TypeActionConstant";
import { all, put, takeLatest } from "redux-saga/effects";
import { getProfileService, LoginServices, putLikeMovieService } from "../../Services/AuthSevice";
import { storeTokenAction } from "../Action/LocalAction";

function* loginSagas(action){
  try {
    const response = yield LoginServices(action.payload)
    if(response){
      yield storeTokenAction(response)
      yield put({
        type: actionType.loginConstantSuccess,
        payload: response.data
      })
      // alert('Login successfully')
    }
  } catch (error) {
    console.log(error)
  }
}

function* putLikeMovieSagas(action){
  try {
     
    const { token, movieId } = action.payload
    const response = yield putLikeMovieService(token, movieId)
    if(response){
      yield put({
        type: actionType.putLikeMovieConstantSuccess,
        payload: response
      })
      yield put(getListMovieFavoriteAction(token))
    }else{
      yield put({
        type: actionType.putLikeMovieConstantFail,
      })
    }
  } catch (error) {
    console.log(error)
  } finally {

  }
}

function* getProfileSagas(action){
  try {
    const token = action.payload
    const response = yield getProfileService(token)
    if(response){
      yield put({
        type: actionType.getProfile
      })
    }
  } catch (error) {
    
  } finally {

  }
}


export default function* authSaga() {
  yield all([
    takeLatest(actionType.loginConstant, loginSagas),
    takeLatest(actionType.putLikeMovieConstant, putLikeMovieSagas)
  ]);
}