import { useSelector } from "react-redux";

export const getProfileSelector = () => {
  return useSelector(state => state?.AuthReducer?.profile);
}; 

export const getListIdMovieFavoriteSelector = () => {
  return useSelector(state => state?.AuthReducer?.listIdMovieFavorite);
}; 