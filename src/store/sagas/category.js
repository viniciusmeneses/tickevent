import { all, takeLatest, call, select, put } from 'redux-saga/effects';

import { Types, loadCategoriesSuccess } from '../../store/ducks/category';
import { getToken } from './selectors';

import toastService from '../../services/toast';
import apiService, { configWithAuth } from '../../services/api';

function* loadCategoriesSaga() {
  try {
    const userToken = yield select(getToken);

    const { data } = yield call(
      apiService.get,
      '/categories',
      configWithAuth(userToken)
    );
    yield put(loadCategoriesSuccess(data));
  } catch (e) {
    toastService.show('Não foi possível carregar as categorias disponíveis');
  }
}

export default all([takeLatest(Types.LOAD, loadCategoriesSaga)]);
