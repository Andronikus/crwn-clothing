import userActionTypes from "./user.actions.types";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = userAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: userAndPassword
});

export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});