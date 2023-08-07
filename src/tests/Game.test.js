import React from 'react';
import { render } from '@testing-library/react';
import Game from '../screens/Game';

test("renders without errors", () => {
  render(<Game />);
});

test("used numbers container", () => {
  const { getByTestId } = render(<Game />);

  const usedContainer = getByTestId("used-numbers");
  expect(usedContainer).toBeInTheDocument();
});

test("available numbers container", () => {
  const { getByTestId } = render(<Game />);

  const availableNumbers = getByTestId("available-numbers");
  expect(availableNumbers).toBeInTheDocument();
});

test("candidate numbers", () => {
  const { queryAllByTestId } = render(<Game />);

  const candidates = queryAllByTestId("candidate-number");
  expect(candidates).toHaveLength(0);
});
