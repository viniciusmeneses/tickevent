import { all, takeLatest, call, put } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import Toast from 'react-native-root-toast';

import {
  Types,
  authSuccess,
  authError,
  loadUserData,
  loadUserDataSuccess,
} from '../../store/ducks/auth';
import apiService, { configWithAuth } from '../../services/api';
import navigationService from '../../services/navigation';

function* loginSaga({ payload }) {
  try {
    const { data } = yield call(apiService.post, '/login', payload);
    const token = data.accessToken;
    yield all([put(authSuccess(token)), put(loadUserData(token))]);
  } catch (e) {
    Toast.show('E-mail ou senha inválidos');
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
    if (errorMessage === 'Email format is invalid') {
      Toast.show('E-mail inválido');
    } else if (errorMessage === 'Email already exists') {
      Toast.show('Já existe um usuário cadastrado com o e-mail informado');
    } else if (errorMessage === 'Password is too short') {
      Toast.show('Senha inválida');
    } else {
      Toast.show('Ocorreu um erro ao realizar o cadastro');
    }
    yield put(authError());
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
    yield put(loadUserDataSuccess(data));
    navigationService.navigate('Home');
  } catch (e) {
    if (e.response.status === 404) {
      Toast.show('Usuário não encontrada');
    }
    navigationService.navigate('Login');
  }
}

export default all([
  takeLatest(Types.LOGIN, loginSaga),
  takeLatest(Types.REGISTER, registerSaga),
  takeLatest(Types.LOAD_USER_DATA, loadUserDataSaga),
]);
