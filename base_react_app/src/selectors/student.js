import { createSelector } from 'reselect';

const getState = ({ student }) => student;

const makeGetData = () =>
  createSelector(
    getState,
    ({ data: { students } }) => ({
      students
    })
  );

export { makeGetData };
