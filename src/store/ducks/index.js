import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import auth from './auth';
import event from './event';
import favorite from './favorite';
import ticket from './ticket';
import categories from './category';
import details from './detail';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  event,
  favorite,
  ticket,
  categories,
  details,
});

export default rootReducer;
