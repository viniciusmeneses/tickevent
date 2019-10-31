import { all, takeLatest, call, put } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import Toast from 'react-native-root-toast';

import {
  Types,
  loginSuccess,
  loginError,
  loadUserData,
  loadUserDataSuccess,
} from '../../store/ducks/auth';
import apiService, { configWithAuth } from '../../services/api';
import navigationService from '../../services/navigation';

function* loginSaga({ payload }) {
  try {
    const { data } = yield call(apiService.post, '/login', payload);
    const token = data.accessToken;
    yield all([put(loginSuccess(token)), put(loadUserData(token))]);
  } catch (e) {
    Toast.show('E-mail ou senha inválidos');
    yield put(loginError());
  }
}

function* loadUserDataSaga({ payload }) {
  try {
    const { sub: userId } = jwtDecode(payload.token);
    const { data } = yield call(
      apiService.get,
      `/users/${userId}`,
      configWithAuth(payload.token)
    );
    yield put(loadUserDataSuccess(data.user));
    navigationService.navigate('Home');
  } catch (e) {
    if (e.response.status === 404) {
      Toast.show('Conta não encontrada');
    }
    navigationService.navigate('Login');
  }
}

export default all([
  takeLatest(Types.LOGIN, loginSaga),
  takeLatest(Types.LOAD_USER_DATA, loadUserDataSaga),
]);
