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

export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const checkUserAuthenticated = () => ({
  type: userActionTypes.CHECK_USER_AUTH,
})