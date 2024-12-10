/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from '../../store';

const BaseContainer = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </Provider>
);

const renderContainer = (ui, options = {}) =>
  render(ui, { wrapper: BaseContainer, ...options });

export { renderContainer };
