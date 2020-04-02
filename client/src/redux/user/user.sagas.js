import { takeLatest, all, put, call } from "redux-saga/effects";

import userActionTypes from "./user.actions.types";
import { googleSignInSuccess, googleSignFailure } from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignFailure(error));
  }
}

function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

const userSagas = function*() {
  yield all([call(onGoogleSignIn)]);
};

export default userSagas;
