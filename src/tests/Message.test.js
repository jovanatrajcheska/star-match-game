import React from 'react';
import { render } from '@testing-library/react';
import Message from '../components/Message';

test('renders without errors', () => {
  render(<Message />);
});

test('gameStatus prop - case: won', () => {

  const gameStatus = 'won';
  const { getByTestId } = render(<Message gameStatus={gameStatus} />);
  const component = getByTestId('game-status');

  expect(component.textContent).toBe(' Nice ');
});

test('gameStatus prop - case: lost', () => {
  const gameStatus = 'lost';
  const { getByTestId } = render(<Message gameStatus={gameStatus} />);

  const component = getByTestId('game-status');
  expect(component.textContent).toBe(' Game Over ');
});
