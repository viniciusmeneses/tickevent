import { all } from 'redux-saga/effects';

import authSagas from './auth';
import eventSagas from './event';
import favoriteSagas from './favorite';

export default function* rootSaga() {
  yield all([authSagas, eventSagas, favoriteSagas]);
}
