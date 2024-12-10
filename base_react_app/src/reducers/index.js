import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import example from './example';
import offices from './offices';
import events from './events';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ example, offices, events, router });

  return rootReducer;
}

export default createRootReducer;
