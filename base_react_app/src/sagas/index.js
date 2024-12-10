import { all } from 'redux-saga/effects';

import example from './example';
import offices from './offices';
import events from './events';

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...example, ...offices, ...events]);
  } catch (err) {
    throw err;
  }
}

export default root;
