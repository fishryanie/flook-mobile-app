import actionType from "../../Constants/TypeActionConstant";
import AsyncStorage from '@react-native-async-storage/async-storage';


const stateDefault = {
  profile : {},
  listIdMovieFavorite: []
}



export const AuthReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case actionType.loginConstantSuccess: {
      return {...state, profile: action.payload }
    }
    case actionType.putLikeMovieConstantSuccess:{
      state.listIdMovieFavorite = action.payload.data
      return {...state}
    }
      
    default: return {...state} 
  }
}