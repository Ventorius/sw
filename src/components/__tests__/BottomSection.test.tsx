import React from 'react';
import { render } from '@testing-library/react';

import BottomSection from '../StarshipCard/BottomSection';

test('Should be visible', async () => {
  const { getByTestId } = render(<BottomSection length="100" crew="200" manufacturer="300" cargo="400" />);
  expect(getByTestId('bottom-section')).toBeVisible();
});

test('Should display proper length', async () => {
  const { getByText } = render(<BottomSection length="100" crew="200" manufacturer="300" cargo="400" />);
  expect(getByText(/100 m/i)).toBeVisible();
});

test('Should display proper crew', async () => {
  const { getByText } = render(<BottomSection length="100" crew="200" manufacturer="300" cargo="400" />);
  expect(getByText(/200/i)).toBeVisible();
});

test('Should display proper manufacturer', async () => {
  const { getByText } = render(<BottomSection length="100" crew="200" manufacturer="Atlas" cargo="400" />);
  expect(getByText(/Atlas/i)).toBeVisible();
});

test('Should display proper cargo', async () => {
  const { getByText } = render(<BottomSection length="100" crew="200" manufacturer="300" cargo="4000" />);
  expect(getByText(/4 t/i)).toBeVisible();
});
