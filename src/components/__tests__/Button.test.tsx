import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../Button';

test('Should display button with proper text', async () => {
  const { getByText } = render(<Button>Test</Button>);
  expect(getByText('Test')).toBeVisible();
});

test('Should react to onClick event', async () => {
  const mock = jest.fn();

  const { getByText } = render(<Button onClick={mock}>Test</Button>);
  fireEvent.click(getByText('Test'));
  expect(mock).toHaveBeenCalledTimes(1);
});
