import actionType from "../../../Constants/TypeActionConstant"

const initialState = {
  authData: {}
};

export const DataLocalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.storeTokenAction: {
      console.log('reducer local' ,action.payload)
      return {
        ...state,
        authData: {...state.authData, ...action.payload},
      };
    }
    case actionType.clearTokenAction: {
      return initialState;
    }
    default: return state;
  }
};
