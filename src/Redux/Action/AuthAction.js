import actionType from "../../Constants/TypeActionConstant";

export function SignInAction(data) {
  return {
    type: actionType.loginConstant,
    payload: data,
  };
}

export const getProfile = token => {
  return {
    type: actionType.getProfileConstant,
    needToken: true,
    payload: token
  }
}

export const PutLikeMovieAction = data => {
  return {
    type: actionType.putLikeMovieConstant,
    needToken: true,
    payload: data,
  }
}

