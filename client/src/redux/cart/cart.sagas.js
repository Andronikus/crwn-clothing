import { all, takeLatest, put, call} from 'redux-saga/effects';

import userActionTypes from '../user/user.actions.types';
import { clearCart } from './cart.actions';

// workers
function* clearCartOnSignOut(){
    yield put(clearCart());
}

// watcher
function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas(){
    yield all([call(onSignOutSuccess)]);
}