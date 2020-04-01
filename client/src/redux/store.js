import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import combineReducers from './root.reducer';
import { persistStore } from 'redux-persist';

// sagas
import rootSagas from './root.sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = createStore(combineReducers, applyMiddleware(...middleware));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export default { store, persistor };