import { all, takeLatest, call, select, put } from 'redux-saga/effects';
import { reject } from 'ramda';

import {
  Types,
  loadEventsSuccess,
  loadFeaturedEventsSuccess,
  searchEventsSuccess,
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

function* searchEventsSaga({ payload }) {
  try {
    const userToken = yield select(getToken);
    const searchParams = {
      name_like: payload.name,
      categoryId: payload.categoryId,
    };

    const { data } = yield call(
      apiService.get,
      '/events',
      configWithAuth(userToken, {
        params: reject(searchParam => !searchParam)(searchParams),
      })
    );
    if (!data.length) {
      toastService.show('Nenhum evento encontrado');
    }
    yield put(searchEventsSuccess(data));
  } catch (e) {
    toastService.show('Não foi possível encontrar os eventos');
  }
}

export default all([
  takeLatest(Types.LOAD, loadEventsSaga),
  takeLatest(Types.LOAD_FEATURED, loadFeaturedEventsSaga),
  takeLatest(Types.SEARCH, searchEventsSaga),
]);
