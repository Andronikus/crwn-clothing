import { takeLatest, call, put, all } from "redux-saga/effects";

import shopActionTypes from "./shop.action.types";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";
import {
  firestore,
  createShopItemsFromCollectionsSnapshoot
} from "../../firebase/firebase.utils";

// the worker function
function* fetchCollectionsAsync() {
  try {
    // Get to firestore that will resolve with an collection map
    const collectionMap = yield firestore.collection("collections").get();
    // call a function... used call to saga create a diferent run environment
    const shopCollectionItems = yield call(
      createShopItemsFromCollectionsSnapshoot,
      collectionMap
    );
    yield put(fetchCollectionSuccess(shopCollectionItems));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

// the watching function
function* onFetchCollectionStart() {
  yield takeLatest(
    shopActionTypes.FETCHING_COLLECTION_START,
    fetchCollectionsAsync
  );
}

export default function* shopSagas(){
  yield all([call(onFetchCollectionStart)]);
}
