import React from 'react';

import { renderContainer } from '../__utils__/render';
import { Routes } from '../../routes';

test('should render a container', () => {
  const { container } = renderContainer(<Routes />);

  expect(container).toMatchSnapshot();
});
