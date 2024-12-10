import { all, call, fork, putResolve, takeLatest } from 'redux-saga/effects';

import { officesApi } from '../services';
import { FETCH_OFFICES, setOffices } from '../actions/offices';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const {
  offices: { getOffices }
} = officesApi;

console.log('llegó a saga');

function* fetchOffice() {
  try {
    const { ok, data } = yield call(getOffices);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(setOffices(data));
  } catch (err) {
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(FETCH_OFFICES, fetchOffice)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
