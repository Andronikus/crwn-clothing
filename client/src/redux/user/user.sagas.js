import { takeLatest, all, put, call } from "redux-saga/effects";

import userActionTypes from "./user.actions.types";
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

// Workers
function* getUserSnapshot(user, additionalInfo) {
  try {
    const userRef = yield call(createUserProfileDocument, user, {...additionalInfo});
    const userSnapshot = yield userRef.get();
    console.log(userSnapshot.id, userSnapshot.data());
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getUserSnapshot, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getUserSnapshot, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getUserSnapshot, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

function* signUp({payload: { displayName, email, password }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, additionalInfo: {displayName}}));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* signInAfterSignUp({payload: {user, additionalInfo}}){
  try{
    yield call(getUserSnapshot, user, additionalInfo);
  }catch(error){
    yield put(signInFailure(error));
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

function* onSignUp() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

function* onSignInAfterSignUp(){
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

const userSagas = function* () {
  yield all([
    call(onGoogleSignIn),
    call(onsignInWithEmailAndPassword),
    call(onCheckUserAuthenticated),
    call(onSignOut),
    call(onSignUp),
    call(onSignInAfterSignUp),
  ]);
};

export default userSagas;
