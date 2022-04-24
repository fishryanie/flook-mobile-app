const HOST = 'http://localhost:8000'
const apiConfigs = {


  GET_ALL_MOVIE_API:  HOST + '/api/movie-management/getAllListMovie',
  GET_MOVIE_BY_ID_API: HOST + '/api/movie-management/getMovieById/:id',
  GET_LIST_FAVORITE_API: HOST + '/api/user-management/listMovieFavorite',  


  //AUTH
  GET_PROFILE_API: HOST + '/api/user-management/getProfile',
  PUT_LIKE_MOVIE_API: HOST + '/api/user-management/addListFavoriteController',

  
  LOGIN_API: HOST + '/api/user-management/login'
};

export default apiConfigs;



