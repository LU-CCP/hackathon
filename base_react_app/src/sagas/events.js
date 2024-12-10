import { all, call, fork, putResolve, takeLatest } from 'redux-saga/effects';

import { eventsApi } from '../services';
import {
  FETCH_EVENT,
  fetchEvent,
  setEvents,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EVENT
} from '../actions/events';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const {
  events: { getEvents, postEvent, putEvent, delEvent }
} = eventsApi;

function* fetchEvents() {
  try {
    const { ok, data } = yield call(getEvents);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(setEvents(data));
  } catch (err) {
    yield call(alert, ERROR_MSG);
  }
}

function* addEvent({ data }) {
  try {
    const { ok, data: dataResult } = yield call(postEvent, data);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(fetchEvent());

    console.log('data result', dataResult);
    console.log('save', data);
  } catch (err) {
    console.log(err);
    yield call(alert, ERROR_MSG);
  }
}

function* editEvent({ data, id }) {
  try {
    const { ok, data: dataResult } = yield call(putEvent, data, id);

    console.log(data);
    console.log(id);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(fetchEvent());

    console.log('data result', dataResult);
    console.log('update', data);
  } catch (err) {
    yield call(alert, ERROR_MSG);
  }
}

function* deleteEvent({ id }) {
  try {
    const { ok, data } = yield call(delEvent, id);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(fetchEvent());
    console.log('data result', data);
    console.log('update', data);
  } catch (err) {
    console.log(err);
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(FETCH_EVENT, fetchEvents)]);
    yield all([takeLatest(ADD_EVENT, addEvent)]);
    yield all([takeLatest(EDIT_EVENT, editEvent)]);
    yield all([takeLatest(DELETE_EVENT, deleteEvent)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
