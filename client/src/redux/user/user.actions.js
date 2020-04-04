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

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = () => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
});

export const signUpStart = userSignUpInfo => {
  return {
    type: userActionTypes.SIGN_UP_START,
    payload: userSignUpInfo,
  }
};

export const signUpSuccess = user => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user
});

export const signUpFailure = error => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error
});