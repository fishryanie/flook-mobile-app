import { combineReducers } from "redux"
import { AppReducer } from "./AppReducer/AppReducer"
import { AuthReducer } from "./AuthReducer"
import { MovieReducer } from "./AppReducer/MovieReducer"
import { DataLocalReducer } from './AppReducer/DataLocalReducer'

export const RootReducers = combineReducers({
  AppReducer: AppReducer, 
  AuthReducer: AuthReducer, 
  MovieReducer: MovieReducer, 
  DataLocalReducer: DataLocalReducer
})
