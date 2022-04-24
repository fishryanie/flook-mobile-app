import apiConfigs from '../Configs/ApiConfigs'
import { requestAPI } from '../Utils/GlobalFunc';


export const getAllListMovieServices = async () => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: apiConfigs.GET_ALL_MOVIE_API,
  };
  const response = await requestAPI(request);
  return response;
};

export const getMovieByIdServices = async id =>{
  const request = {
    method: 'GET',
    api: apiConfigs.GET_MOVIE_BY_ID_API.slice(0, -3) + id
  }
  const response = await requestAPI(request)
  return response
}

export const getListFavoriteServices = async token => {
  console.log('token services',token)
  const request = {
    method: 'GET',
    api: apiConfigs.GET_LIST_FAVORITE_API,
    token: token
  }
  console.log(request)
  const response = await requestAPI(request)
  return response
}

