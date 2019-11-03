import { all, takeLatest, call, select, put } from 'redux-saga/effects';

import { Types, loadTicketsSuccess } from '../../store/ducks/ticket';
import { getToken, getUser } from './selectors';

import toastService from '../../services/toast';
import apiService, { configWithAuth } from '../../services/api';

function* loadTicketsSaga() {
  try {
    const user = yield select(getUser);
    const userToken = yield select(getToken);

    const { data } = yield call(
      apiService.get,
      `/users/${user.id}/tickets`,
      configWithAuth(userToken, {
        params: {
          _expand: 'event',
        },
      })
    );
    yield put(loadTicketsSuccess(data));
  } catch (e) {
    toastService.show('Não foi possível obter os seus ingressos comprados');
  }
}

export default all([takeLatest(Types.LOAD, loadTicketsSaga)]);
