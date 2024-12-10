import React from 'react';

import { renderContainer } from '../__utils__/render';
import { Example } from '../../containers';

test('should render a container', () => {
  const { container } = renderContainer(<Example />);

  expect(container).toMatchSnapshot();
});
