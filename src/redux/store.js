import { createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';

import combineReducers from './root.reducer';
import { persistStore } from 'redux-persist';

const middleware = [logger];

export const store = createStore(combineReducers, applyMiddleware(...middleware));
export const persistor = persistStore(store);


export default {store, persistor};