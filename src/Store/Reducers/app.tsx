
import actionTypes from "../Actions/constants";

interface initialState {
  authDiaLog: boolean,
  openDrawer: boolean,
  openSearch: boolean,
  openNotify: boolean,
  openCart: boolean,
  isSubmitting: boolean,
  isLoading: boolean,
  heightDetailScreen:number,
}

const initialState: initialState = {
  authDiaLog: false,
  openDrawer: true,
  openSearch: false,
  openNotify: false,
  openCart: false,
  isSubmitting: false,
  isLoading: false,
  heightDetailScreen:1000
};

 const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.openDialog: {
      return { ...state, authDiaLog: true }
    }
    case actionTypes.closeDialog: {
      return { ...state, authDiaLog: false }
    }
    case actionTypes.onOffDrawer: {
    
      return { ...state, openDrawer: !state.openDrawer }
    }
    case actionTypes.onOffSearch: {
      return { ...state, openSearch: !state.openSearch }
    }
    case actionTypes.openLoading: {
      return { ...state, isLoading: true }
    }
    case actionTypes.closeLoading: {
      return { ...state, isLoading: false }
    }
    case actionTypes.setHeightDetailScreen:{
      
      console.log("🚀 ~ file: app.tsx ~ line 49 ~ AppReducer ~ heightDetailScreen",action.payload)
    }
      return {...state, heightDetailScreen:action.payload}
      
    // case actionTypes.onOffCartConstant: {
    //   return { ...state, openCart: !state.openCart }
    // }
    // case actionTypes.onOffNotificationConstant: {
    //   return { ...state, openNotify: !state.openNotify }
    // }
    case actionTypes.submitSearch: {
      return { ...state, isSubmitting: action.payload }
    }
    default: return { ...state }
  }
}
export default AppReducer