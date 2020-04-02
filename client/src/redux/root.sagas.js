import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop/shop.sagas";
import userSagas  from "./user/user.sagas";

const rootSagas = function*() {
  // all will throw every saga inside of [ ] concurrently
  yield all([call(fetchCollectionStart), call(userSagas)]);
};

export default rootSagas;
