import { all, takeLatest } from 'redux-saga/effects';

function* login() {}

export default all([
  takeLatest(login),
]);