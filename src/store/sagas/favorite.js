import { all, takeLatest, call, select, put } from 'redux-saga/effects';

import {
  Types,
  loadFavoritesSuccess,
  addToFavoriteSuccess,
  removeFavoriteSuccess,
} from '../../store/ducks/favorite';
import { getToken, getUser } from './selectors';

import toastService from '../../services/toast';
import apiService, { configWithAuth } from '../../services/api';

function* loadFavoritesSaga() {
  try {
    const user = yield select(getUser);
    const userToken = yield select(getToken);

    const { data } = yield call(
      apiService.get,
      `/users/${user.id}/favorites`,
      configWithAuth(userToken, {
        params: {
          _expand: 'event',
        },
      })
    );
    yield put(loadFavoritesSuccess(data));
  } catch (e) {
    toastService.show('Não foi possível obter os seus eventos favoritos');
  }
}

function* addToFavoriteSaga({ payload }) {
  try {
    const user = yield select(getUser);
    const userToken = yield select(getToken);
    const newFavorite = {
      userId: user.id,
      eventId: payload.event.id,
    };

    const { data } = yield call(
      apiService.post,
      '/favorites',
      newFavorite,
      configWithAuth(userToken)
    );
    yield put(addToFavoriteSuccess({ ...data, event: payload.event }));
  } catch (e) {
    toastService.show('Não foi possível adicionar aos favoritos');
  }
}

function* removeFavoriteSaga({ payload }) {
  try {
    const userToken = yield select(getToken);

    yield call(
      apiService.delete,
      `/favorites/${payload.favoriteId}`,
      configWithAuth(userToken)
    );
    yield put(removeFavoriteSuccess(payload.favoriteId));
  } catch (e) {
    toastService.show('Não foi possível adicionar aos favoritos');
  }
}

export default all([
  takeLatest(Types.LOAD, loadFavoritesSaga),
  takeLatest(Types.ADD, addToFavoriteSaga),
  takeLatest(Types.REMOVE, removeFavoriteSaga),
]);
