import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchEvent: null,
    setEvents: ['data'],
    setEventEdit: ['index', 'data'],
    addEvent: ['data'],
    editEvent: ['data', 'id'],
    deleteEvent: ['id']
  },
  {
    prefix: 'EVENTS/'
  }
);

const {
  fetchEvent,
  setEvents,
  setEventEdit,
  addEvent,
  editEvent,
  deleteEvent,
  setStatus
} = Creators;

const {
  FETCH_EVENT,
  SET_EVENTS,
  SET_EVENT_EDIT,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EVENT
} = Types;

export {
  fetchEvent,
  setEvents,
  setEventEdit,
  addEvent,
  editEvent,
  deleteEvent,
  FETCH_EVENT,
  SET_EVENTS,
  SET_EVENT_EDIT,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EVENT
};
