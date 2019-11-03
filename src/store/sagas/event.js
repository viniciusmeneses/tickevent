import { all, takeLatest, call, select, put } from 'redux-saga/effects';

import {
  Types,
  loadEventsSuccess,
  loadFeaturedEventsSuccess,
} from '../../store/ducks/event';
import { getToken } from './selectors';

import toastService from '../../services/toast';
import apiService, { configWithAuth } from '../../services/api';

function* loadEventsSaga() {
  try {
    const userToken = yield select(getToken);
    const { data } = yield call(
      apiService.get,
      '/events',
      configWithAuth(userToken, {
        params: {
          featured: false,
          _sort: 'startDate',
          _order: 'desc',
        },
      })
    );
    yield put(loadEventsSuccess(data));
  } catch (e) {
    toastService.show('Não foi possível obter os próximos eventos');
  }
}

function* loadFeaturedEventsSaga() {
  try {
    const userToken = yield select(getToken);
    const { data } = yield call(
      apiService.get,
      '/events',
      configWithAuth(userToken, {
        params: {
          featured: true,
        },
      })
    );
    yield put(loadFeaturedEventsSuccess(data));
  } catch (e) {
    toastService.show('Não foi possível obter os eventos em destaque');
  }
}

export default all([
  takeLatest(Types.LOAD, loadEventsSaga),
  takeLatest(Types.LOAD_FEATURED, loadFeaturedEventsSaga),
]);
