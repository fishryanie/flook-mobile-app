import { requestAPI } from "../Utils/GlobalFunc";
import { API_AUTH } from "../Configs/Api";


interface login {
  userName: string, 
  password: string
}

interface register extends login {
  email: string,
  phoneNumber: number, 
  passwordComfirm: string
}

interface forgot {
  email: string, 
}

const Login = async (data: login) => {
  const request = {
    method: 'POST',
    api: API_AUTH + '/login',
    body: {...data, type: 'LOGIN_APP' }
  };
  const response = await requestAPI(request);
  return response;
};

const Register = async (data: register) => {
  const request = {
    method: 'POST',
    api: API_AUTH + '/register',
    body: {...data, type: 'CREATE_APP' }
  };
  const response = await requestAPI(request);
  return response;
};

const ForgotPass = async (data: forgot) => {
  const request = {
    method: 'PUT',
    api: API_AUTH + '/forgotPassword',
    body: data
  };
  const response = await requestAPI(request);
  return response;
}

const ChangePass = async (data: any, token: string) => {
  console.log("service", data)
  const request = {
    method: 'PUT',
    api: API_AUTH + '/changePassword',
    body: data,
    token: token,
  };
  const response = await requestAPI(request);
  return response;
}

const FindUser = async (data: any) => {
  const request = {
    method: 'GET',
    api: API_AUTH + '/getAllListUser',
    body: data
  };
  const response = await requestAPI(request);
  return response;
}





export default {
  Login, Register, ForgotPass, ChangePass, 
  FindUser
}