import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageService from '../../services/storage';

import auth from './auth';

const authPersistConfig = {
  key: 'auth',
  storage: storageService,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
});

export default rootReducer;
