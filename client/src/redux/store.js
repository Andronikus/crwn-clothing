import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import combineReducers from './root.reducer';
import { persistStore } from 'redux-persist';

// sagas
import { fetchCollectionStart } from './shop/shop.sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = createStore(combineReducers, applyMiddleware(...middleware));
export const persistor = persistStore(store);

sagaMiddleware.run(fetchCollectionStart);

export default { store, persistor };