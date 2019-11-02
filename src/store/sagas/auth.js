import { all, takeLatest, call, put } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import {
  Types,
  authSuccess,
  authError,
  loadUserData,
  loadUserDataSuccess,
} from '../../store/ducks/auth';

import apiService, { configWithAuth } from '../../services/api';
import navigationService from '../../services/navigation';
import toastService from '../../services/toast';

function* loginSaga({ payload }) {
  try {
    const { data } = yield call(apiService.post, '/login', payload);
    const token = data.accessToken;
    yield all([put(authSuccess(token)), put(loadUserData(token))]);
  } catch (e) {
    toastService.show('E-mail ou senha inválidos');
    yield put(authError());
  }
}

function* registerSaga({ payload }) {
  try {
    const { data } = yield call(apiService.post, '/register', payload);
    const token = data.accessToken;
    yield all([put(authSuccess(token)), put(loadUserData(token))]);
  } catch (e) {
    const errorMessage = e.response.data;
    let toastMessage = 'Ocorreu um erro ao realizar o cadastro';
    if (errorMessage === 'Email format is invalid') {
      toastMessage = 'E-mail inválido';
    } else if (errorMessage === 'Email already exists') {
      toastMessage = 'Já existe um usuário cadastrado com o e-mail informado';
    } else if (errorMessage === 'Password is too short') {
      toastMessage = 'Senha inválida';
    }
    toastService.show(toastMessage);
    yield put(authError());
  }
}

function* loadUserDataSaga({ payload }) {
  try {
    const token = payload.token;
    if (token) {
      const { sub: userId } = jwtDecode(token);
      const { data } = yield call(
        apiService.get,
        `/users/${userId}`,
        configWithAuth(token)
      );
      yield put(loadUserDataSuccess(data));
      navigationService.navigate('Home');
    } else {
      navigationService.navigate('Login');
    }
  } catch (e) {
    if (e.response.status === 404) {
      toastService.show('Usuário não encontrada');
    }
    navigationService.navigate('Login');
  }
}

export default all([
  takeLatest(Types.LOGIN, loginSaga),
  takeLatest(Types.REGISTER, registerSaga),
  takeLatest(Types.LOAD_USER_DATA, loadUserDataSaga),
]);
