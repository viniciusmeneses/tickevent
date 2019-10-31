import { all, takeLatest, call, put } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import {
  Types,
  loginSuccess,
  loadUserData,
  loadUserDataSuccess,
} from '../../store/ducks/auth';
import apiService, { configWithAuth } from '../../services/api';

function* loginSaga({ payload }) {
  try {
    const { data } = yield call(apiService.post, '/login', { payload });
    const token = data.accessToken;
    yield all([put(loginSuccess(token)), put(loadUserData(token))]);
  } catch (e) {}
}

function* loadUserDataSaga({ payload }) {
  try {
    const { sub: userId } = jwtDecode(payload.token);
    const { data } = yield call(
      apiService.get,
      `/users/${userId}`,
      configWithAuth(payload.token)
    );
    yield put(loadUserData(loadUserDataSuccess(data.user)));
  } catch (e) {}
}

export default all([
  takeLatest(Types.LOGIN, loginSaga),
  takeLatest(Types.LOAD_USER_DATA, loadUserDataSaga),
]);
