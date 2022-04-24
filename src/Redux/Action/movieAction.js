import actionType from "../../Constants/TypeActionConstant";

export const getAllListMovieAction = () => {
  return {
    type: actionType.getAllListMovieConstant,
    needToken: false,
  };
};

export const getMovieByIdAction = id => {
  return {
    type: actionType.getMovieByIdConstant,
    needToken: false,
    payload: id
  }
}

export const getListMovieFavoriteAction = token => {
  return {
    type: actionType.getListFavoriteConstant,
    needToken: true,
    payload: token
  }
}