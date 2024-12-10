import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SET_EVENTS, SET_EVENT_EDIT } from '../actions/events';

const INITIAL_STATE = {
  events: [],
  eventEdit: {
    index: -1,
    data: null
  }
};

const setEvents = produce((draft, { data }) => {
  draft.events = data.map(e => e);
});

const setEventEdit = produce(({ eventEdit }, { index, data }) => {
  eventEdit.index = index;
  eventEdit.data = data;
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_EVENTS]: setEvents,
  [SET_EVENT_EDIT]: setEventEdit
});

export default reducer;
