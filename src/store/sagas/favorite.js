import { all, takeLatest, call, select, put } from 'redux-saga/effects';

import { Types, loadFavoritesSuccess } from '../../store/ducks/favorite';
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
    console.log(e);
    toastService.show('Não foi possível obter os seus eventos favoritos');
  }
}

export default all([takeLatest(Types.LOAD, loadFavoritesSaga)]);
