import { all, takeLatest, call, select, put } from 'redux-saga/effects';

import { Types, fetchOrganizerSuccess } from '../../store/ducks/detail';
import { getToken } from './selectors';

import toastService from '../../services/toast';
import apiService, { configWithAuth } from '../../services/api';

function* fetchOrganizerSaga({ payload }) {
  try {
    const userToken = yield select(getToken);
    const { data } = yield call(
      apiService.get,
      `/organizers/${payload.organizerId}`,
      configWithAuth(userToken)
    );
    yield put(fetchOrganizerSuccess(data));
  } catch (e) {
    toastService.show('Não foi possível carregar os dados do organizador');
  }
}

export default all([takeLatest(Types.FETCH_ORGANIZER, fetchOrganizerSaga)]);
