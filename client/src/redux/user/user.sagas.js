import { takeLatest, all, put, call } from "redux-saga/effects";

import userActionTypes from "./user.actions.types";
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess } from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

// Workers
function* processUser(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(processUser, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(processUser, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if(!userAuth) return;
    yield call(processUser, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOut(){
  try{
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch(error){
    yield put(signOutFailure());
  }
}

// watchers
function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

function* onsignInWithEmailAndPassword() {
  yield takeLatest(
    userActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

function* onCheckUserAuthenticated() {
  yield takeLatest(userActionTypes.CHECK_USER_AUTH, isUserAuthenticated);
}

function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

const userSagas = function* () {
  yield all([
    call(onGoogleSignIn),
    call(onsignInWithEmailAndPassword),
    call(onCheckUserAuthenticated),
    call(onSignOut),
  ]);
};

export default userSagas;
