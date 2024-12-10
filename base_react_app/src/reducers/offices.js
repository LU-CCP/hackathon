import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SET_OFFICES } from '../actions/offices';

const INITIAL_STATE = {
  offices: []
};

const setOffices = produce((draft, { data }) => {
  draft.offices = data.map(e => e);
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_OFFICES]: setOffices
});

export default reducer;
