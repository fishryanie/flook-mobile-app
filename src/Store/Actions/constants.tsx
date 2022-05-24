const actionTypes = {
  // APP
  openDialog: 'OPEN_DIALOG',
  closeDialog: 'CLOSE_DIALOG',
  onOffCart: "ON_OFF_CART",
  onOffSearch: "ON_OFF_MODEL",
  onOffDrawer: "ON_OFF_DRAWER",
  onOffNotification: "ON_OFF_NOTIFICATION",
  openLoading: "OPEN_LOADING",
  closeLoading: "CLOSE_LOADING",
  submitSearch: "SUBMIT_SEARCH",

  SET_MENU: '@customization/SET_MENU',
  MENU_TOGGLE: '@customization/MENU_TOGGLE',
  MENU_OPEN: '@customization/MENU_OPEN',
  SET_FONT_FAMILY: '@customization/SET_FONT_FAMILY',
  SET_BORDER_RADIUS: '@customization/SET_BORDER_RADIUS',


  // DATA LOCAL

  clearToken: "CLEAR_TOKEN",
  storeToken: "STORE_TOKEN",

  // AUTH
  login: "LOGIN",
  loginFailure: "LOGIN_FAILURE",
  loginSuccess: "LOGIN_SUCCESS",

  register: "REGISTER",
  registerFailure: "REGISTER_FAILURE",
  registerSuccess: "REGISTER_SUCCESS",

  forgotPass: "FORGOT_PASS",
  forgotPassFailure: "FORGOT_PASS_FAILURE",
  forgotPassSuccess: "FORGOT_PASS_SUCCESS",

  changePass: "CHANGE_PASS",
  changePassFailure: "CHANGE_PASS_FAILURE",
  changePassSuccess: "CHANGE_PASS_SUCCESS",

  getProfile: "GET_PROFILE",
  getProfileFailure: "GET_PROFILE_FAILURE",
  getProfileSuccess: "GET_PROFILE_SUCCESS",










  putLikeMovie: "PUT_LIKE_MOVIE",
  putLikeMovieFail: "PUT_LIKE_MOVIE_FAIL",
  putLikeMovieSuccess: "PUT_LIKE_MOVIE_SUCCESS",

  findUser: "FIND_USER",
  findUserFailure: "FIND_USER_FAILURE",
  findUserSuccess: "FIND_USER_SUCCESS",

  // MOVIE
  getListMovie: "GET_LIST_MOVIE_",
  getListMovieFail: "GET_LIST_MOVIE_FAIL",
  getListMovieSuccess: "GET_LIST_MOVIE_SUCCESS",

  getAllListMovie: "GET_ALL_LIST_MOVIE_",
  getAllListMovieFail: "GET_ALL_LIST_MOVIE_FAIL",
  getAllListMovieSuccess: "GET_ALL_LIST_MOVIE_SUCCESS",

  getListMovieCommingSoon: "GET_LIST_MOVIE_COMMING_SOON",
  getListMovieCommingSoonFail: "GET_LIST_MOVIE_COMMING_SOON_FAIL",
  getListMovieCommingSoonSuccess: "GET_LIST_MOVIE_COMMING_SOON_SUCCESS",

  getListMovieIsPlaying: "GET_LIST_MOVIE_ISPALYING",
  getListMovieIsPlayingFail: "GET_LIST_MOVIE_ISPALYING_FAIL",
  getListMovieIsPlayingSuccess: "GET_LIST_MOVIE_ISPALYING_SUCCESS",

  getListMovieNew: "GET_LIST_MOVIE_NEW_",
  getListMovieNewFail: "GET_LIST_MOVIE_NEW_FAIL",
  getListMovieNewSuccess: "GET_LIST_MOVIE_NEW_SUCCESS",

  getMovieById: "Get_Movie_By_Id_Contain",
  getMovieByIdFail: "GET_MOVIE_BY_ID_FAIL",
  getMovieByIdSuccess: "Get_MOVIE_By_ID_SUCCESS",

  getListFavorite: "GET_LIST_FAVORITE_BY_ID",
  getListFavoriteFail: "GET_LIST_FAVORITE_BY_ID_FAIL",
  getListFavoriteSuccess: "GET_LIST_FAVORITE_BY_ID_SUCCESS",


  // MANGA
  findManga: 'FIND_MANGA',
  findMangaFailure: 'FIND_MANGA_FAILURE',
  findMangaSuccess: 'FIND_MANGA_SUCCESS',

  findMangaById: "FIND_MANGA_BY_ID",
  findMangaByIdFailure: "FIND_MANGA_BY_ID_FAILURE",
  findMangaByIdSuccess: "FIND_MANGA_BY_ID_SUCCESS",

  getFilterList: "Get_Filter_List",



  // AUTHOR
  findAuthor: "GET_AUTHOR",
  findAuthorFailure: "GET_AUTHOR_FAILURE",
  findAuthorSuccess: "GET_AUTHOR_SUCCESS",

  findGenre: 'FIND_GENRE',
  findGenreFailure: 'FIND_GENRE_FAILURE',
  findGenreSuccess: 'FIND_GENRE_SUCCESS',


  // CHAPTERS
  findChapterByMangaId: "FIND_CHAPTERS_BY_MANGA_ID",
  findChapterByMangaIdFailure: "FIND_CHAPTER_BY_MANGA_ID_FAILURE",
  findChapterByMangaIdSuccess: "FIND_CHAPTER_BY_MANGA_ID_SUCCESS",

  findChapterById: "FIND_CHAPTER_BY_ID",
  findChapterByIdFailure: "FIND_CHAPTER_BY_ID_FAILURE",
  findChapterByIdSuccess: "FIND_CHAPTER_BY_ID_SUCCESS",



  // COMMENT
  getAllCommentFail: "GET_ALL_COMMENT_FAIL",
  getAllCommentSuccess: "GET_ALL_COMMENT_SUCCESS",
  addCommentFail: "ADD_COMMENT_FAIL",
  addCommentSuccses: "ADD_COMMENT_SUCCSESS",
  likeCommentFail: "LIKE_COMMENT_FAIL",
  likeCommentSuccsess: "LIKE_COMMENT_SUCCESS",
  dislikeCommentFail: "DISLIKE_COMMENT_FAIL",
  dislikeCommentSuccsess: "DISLIKE_COMMENT_SUCCESS",
};

export default actionTypes