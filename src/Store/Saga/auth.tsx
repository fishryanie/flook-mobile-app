import { all, put, delay, takeLatest } from "redux-saga/effects";
import { handleToast } from "../../Functions/GlobleFunc";
import { responseGenerator } from './index'
import actionTypes from '../Actions/constants';
// import Cookie from '../../hooks/Cookie';
import Services from '../../Services'
import Action from '../Actions'


function* Login(action: any) {
  try {
    const response: responseGenerator = yield Services.auth.Login(action.payload)
    console.log('response', response)
    if (response.statusCode === 200) {
      yield put(Action.auth.LoginSuccess(response))
      yield handleToast(response.message, 'success')
    } else {
      yield put(Action.auth.LoginFailure(response))
      yield handleToast(response.message, 'error')
    }
  } catch (error) {
    console.log('Error LoginSagas', error)
  } finally {
    yield({type: actionTypes.closeLoading})
  }
}

function* Register(action: any) {
  try {
    const response: responseGenerator = yield Services.auth.Register(action.payload)
    if (response.statusCode === 200) {
      // yield notify(response.message)
      yield put(Action.auth.RegisterSuccess(response))
      yield delay(2000)
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield put(Action.auth.RegisterFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    yield({type: actionTypes.closeLoading})
  }
}

function* ForgotPass(action: any) {
  try {
    const response: responseGenerator = yield Services.auth.ForgotPass(action.payload)
    if (response.statusCode === 200) {
      yield put(Action.auth.ForgotPassSuccess(response))
    } else {
      yield put(Action.auth.ForgotPassFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    yield({type: actionTypes.closeLoading})
  }
}

function* ChangePass(action: any) {
  try {
    // const readCookie = Cookie.getCookie('usrin')

    // const response: responseGenerator = yield Services.auth.ChangePass(action.payload, readCookie)
    // if (response.statusCode === 200) {
    //   yield notify(response.message)
    //   yield put(Action.auth.ChangePassSuccess(response))
    //   yield delay(2000)
    //   yield put({ type: actionTypes.closeDialog })
    // } else {
    //   yield put(Action.auth.ChangePassFailure(response))
    // }
  } catch (error) {
    console.log('Error', error)
  } finally {
    yield({type: actionTypes.closeLoading})
  }
}

function* FindUser(action: any){
  try {
    const response: responseGenerator = yield Services.auth.FindUser(action.payload)
    if (response.statusCode === 200) {
      yield put(Action.auth.FindUserSuccess(response))
    }else{
      yield put(Action.auth.FindUserFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    yield({type: actionTypes.closeLoading})
  }
}



export default function* authSaga() {
  yield all([
    takeLatest(actionTypes.login, Login),
    takeLatest(actionTypes.register, Register),
    takeLatest(actionTypes.forgotPass, ForgotPass),
    takeLatest(actionTypes.changePass, ChangePass),
  ])

}