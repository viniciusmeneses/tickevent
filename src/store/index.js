import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);
export default store;
