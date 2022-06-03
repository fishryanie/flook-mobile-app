import actionType from "../../Constants/TypeActionConstant";

export function storeTokenAction(data) {
  console.log('action local', data)
  return {
    type: actionType.storeTokenAction,
    payload: data,
  };
}

export function clearTokenAction() {
  return {
    type: actionType.clearTokenAction,
    payload: {},
  };
}