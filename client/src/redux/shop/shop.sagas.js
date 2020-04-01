import { takeLatest, call, put } from "redux-saga/effects";

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
export function* fetchCollectionStart() {
  yield takeLatest(
    shopActionTypes.FETCHING_COLLECTION_START,
    fetchCollectionsAsync
  );
}
