import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import auth from './auth';
import event from './event';
import favorite from './favorite';
import ticket from './ticket';
import categories from './category';
import details from './detail';

import { Types } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['token'],
};

const allReducers = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  event,
  favorite,
  ticket,
  categories,
  details,
});

const rootReducer = (state, action) => {
  if (action.type === Types.LOGOUT) {
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;
