import actionType from "../../../Constants/TypeActionConstant";

const initialState = {
  openDrawer: true,
  openSearch: false,
  openNotify: false,
  openCart: false,
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.onOffDrawerConstant: { 
      return {...state, openDrawer: !state.openDrawer }
    }
    case actionType.onOffSearchConstant: {
      return {...state, openSearch: !state.openSearch }
    }
    case actionType.onOffCartConstant: {
      return {...state, openCart: !state.openCart }
    }
    case actionType.onOffNotificationConstant: {
      return {...state, openNotify: !state.openNotify }
    }
    default: return {...state}
  }
}