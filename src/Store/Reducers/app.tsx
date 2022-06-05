
import actionTypes from "../Actions/constants";

interface initialState {
  authDiaLog: boolean,
  openDrawer: boolean,
  openSearch: boolean,
  openNotify: boolean,
  openCart: boolean,
  isSubmitting: boolean,
  isLoading: boolean,
}

const initialState: initialState = {
  authDiaLog: false,
  openDrawer: true,
  openSearch: false,
  openNotify: false,
  openCart: false,
  isSubmitting: false,
  isLoading: false,
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