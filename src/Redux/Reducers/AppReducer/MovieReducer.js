import actionType from "../../../Constants/TypeActionConstant";

const initialState = {
  listMovie: [],
  listFavorite: [],
  detailMovie: {}
}

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.getAllListMovieContantSuccess: {
      return {...state, listMovie: action.payload }
    }
    case actionType.getMovieByIdConstantSuccess: {
      return {...state, detailMovie: action.payload }
    }
    case actionType.getListFavoriteConstantSuccess: {
      return {...state, listFavorite: action.payload }
    }
    default: return {...state}
  }
}
