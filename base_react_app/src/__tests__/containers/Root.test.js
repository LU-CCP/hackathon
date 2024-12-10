import React from 'react';

import { renderContainer } from '../__utils__/render';
import Root from '../../containers/Root';

test('should render a container', () => {
  const { container } = renderContainer(<Root />);

  expect(container).toMatchSnapshot();
});
