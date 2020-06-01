import React from 'react';
import { render } from '@testing-library/react';

import Loader from '../Loader';

test('Should display loader', async () => {
  const { getByTestId } = render(<Loader />);
  expect(getByTestId('loader')).toBeVisible();
});
