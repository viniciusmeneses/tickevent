import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './ducks';
import rootSaga from './sagas';

// redux-persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

// Middlewares
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// Store with redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export default { store, persistor };
