import { all, call } from "redux-saga/effects";

import shopSagas from "./shop/shop.sagas";
import userSagas from "./user/user.sagas";
import cartSagas from "./cart/cart.sagas";

const rootSagas = function* () {
  // all will throw every saga inside of [ ] concurrently
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
};

export default rootSagas;
