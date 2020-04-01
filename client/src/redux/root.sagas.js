import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop/shop.sagas";

const rootSagas = function*() {
  // all will throw every saga inside of [ ] concurrently
  yield all([call(fetchCollectionStart)]);
}


export default rootSagas;