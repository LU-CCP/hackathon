import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchOffices: null,
    setOffices: ['data']
  },
  {
    prefix: 'OFFICES/'
  }
);

const { fetchOffices, setOffices } = Creators;

const { FETCH_OFFICES, SET_OFFICES } = Types;

export { fetchOffices, setOffices, FETCH_OFFICES, SET_OFFICES };
