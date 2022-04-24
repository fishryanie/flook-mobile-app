import apiConfigs from "../Configs/ApiConfigs";
import { requestAPI } from "../Utils/GlobalFunc";

export const LoginServices = async data => {
  const type = 'LOGIN_APP'
  const request = {
    method: 'POST',
    api: apiConfigs.LOGIN_API,
    body: {...data, type },
  };
  const response = await requestAPI(request);
  return response;
};

export const getProfileService = async token => {
  const request = {
    method: 'GET',
    api: apiConfigs.GET_PROFILE_API,
    token: token
  }
  const response = await requestAPI(request)
  return response
}

export const putLikeMovieService = async (token, movieId) => {
  console.log('service like')
  const request = {
    method: 'PUT',
    api: apiConfigs.PUT_LIKE_MOVIE_API,
    body: movieId,
    token: token
  }
  const response = await requestAPI(request)
  return response
}