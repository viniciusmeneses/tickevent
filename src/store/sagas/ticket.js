import { all, takeLatest, call, select, put } from 'redux-saga/effects';
import moment from 'moment';

import {
  Types,
  loadTicketsSuccess,
  buyTicketSuccess,
} from '../../store/ducks/ticket';
import { getToken, getUser } from './selectors';

import toastService from '../../services/toast';
import apiService, { configWithAuth } from '../../services/api';
import navigationService from '../../services/navigation';

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

function* buyTicketSaga({ payload }) {
  try {
    const user = yield select(getUser);
    const userToken = yield select(getToken);
    const newTicket = {
      userId: user.id,
      eventId: payload.event.id,
      paidValue: payload.event.ticketPrice,
      buyDate: moment().toISOString(true),
    };

    const { data } = yield call(
      apiService.post,
      '/tickets',
      newTicket,
      configWithAuth(userToken)
    );
    yield put(buyTicketSuccess({ ...data, event: payload.event }));
    navigationService.navigate('Tickets');
  } catch (e) {
    toastService.show('Não foi possível comprar o ingresso');
  }
}

export default all([
  takeLatest(Types.LOAD, loadTicketsSaga),
  takeLatest(Types.BUY, buyTicketSaga),
]);
