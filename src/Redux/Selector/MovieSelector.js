import { useSelector } from "react-redux";

export const getAllListMovieSelector = () => {
  return useSelector(state => state?.MovieReducer?.listMovie);
};

export const getMovieByIdSelector = () => {
  return useSelector(state => state?.MovieReducer?.detailMovie);
};

export const getListMovieFavoriteSelector = () => {
  return useSelector(state => state?.MovieReducer?.listFavorite);
};


