import { all } from 'redux-saga/effects';

import authSagas from './auth';
import eventSagas from './event';

export default function* rootSaga() {
  yield all([authSagas, eventSagas]);
}
