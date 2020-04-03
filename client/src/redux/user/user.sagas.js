import { takeLatest, all, put, call } from "redux-saga/effects";

import userActionTypes from "./user.actions.types";
import {
  signInSuccess,
  signFailure,
} from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

// Workers
function* processUser(user){
  try{
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  }catch(error){
    yield put(signFailure(error));
  }
}

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(processUser,user);
  } catch (error) {
    yield put(signFailure(error));
  }
}

function* signInWithEmailAndPassword({payload: { email, password }}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(processUser,user);
  } catch (error) {
    yield put(signFailure(error));
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

const userSagas = function*() {
  yield all([call(onGoogleSignIn), call(onsignInWithEmailAndPassword)]);
};

export default userSagas;
