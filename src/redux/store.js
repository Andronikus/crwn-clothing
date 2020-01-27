import { createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';

import combineReducers from './root.reducer';

const middleware = [logger];

const store = createStore(combineReducers, applyMiddleware(...middleware));

export default store;