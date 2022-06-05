import { combineReducers } from "redux"
import  BookReducer from "./book"
import  AppReducer  from "./app"
import AuthReducer  from "./auth"


const RootReducers = combineReducers({
  AppReducer: AppReducer,
  AuthReducer: AuthReducer, 
  BookReducer: BookReducer,

})

// export type RootState = ReturnType<typeof RootReducers>
// export type RootState = ReturnType<typeof RootReducers>;
export default RootReducers