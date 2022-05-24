import actionTypes from "./constants";

const Login = (data:any) => ({type: actionTypes.login, payload: data})
const LoginSuccess = (data: any) => ({type: actionTypes.loginSuccess, payload: data})
const LoginFailure = (data: any) => ({type: actionTypes.loginFailure, payload: data})

const Register = (data:any) => ({type: actionTypes.register, payload: data})
const RegisterSuccess = (data: any) => ({type: actionTypes.registerSuccess, payload: data})
const RegisterFailure = (data: any) => ({type: actionTypes.registerFailure, payload: data})

const ForgotPass = (data:any) => ({type: actionTypes.forgotPass, payload: data})
const ForgotPassSuccess = (data: any) => ({type: actionTypes.forgotPassSuccess, payload: data})
const ForgotPassFailure = (data: any) => ({type: actionTypes.forgotPassFailure, payload: data})

const ChangePass = (data: any) => ({type: actionTypes.changePass, payload: data})
const ChangePassSuccess = (data: any) => ({type: actionTypes.changePassSuccess, payload: data})
const ChangePassFailure = (data: any) => ({type: actionTypes.changePassFailure, payload: data})

const FindUser = (token:string) => ({type: actionTypes.findUser, payload: token})
const FindUserFailure = (data: any) => ({type: actionTypes.findUserFailure, payload: data})
const FindUserSuccess = (data: any) => ({type: actionTypes.findUserSuccess, payload: data})


export default {
  Login, LoginSuccess, LoginFailure, 
  Register, RegisterSuccess, RegisterFailure,
  ForgotPass, ForgotPassSuccess, ForgotPassFailure,
  ChangePass, ChangePassSuccess, ChangePassFailure,

  FindUser, FindUserFailure, FindUserSuccess,
}
