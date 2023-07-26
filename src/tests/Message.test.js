import React from 'react';
import { render } from '@testing-library/react';
import Message from '../components/Message';

test('renders without errors', () => {
  render(<Message />);
});

test('Status won', () => {
  const messageToDisplay = 'Nice';
  const messageColor = 'green';

  const { getByText, container } = render(<Message text={messageToDisplay} color={messageColor} />);

  const messageElement = getByText(messageToDisplay);
  expect(messageElement).toBeInTheDocument();

  expect(container.firstChild).toHaveStyle(`color: ${messageColor}`);
});


test('Status lost', () => {
  const messageToDisplay = 'Game Over';
  const messageColor = 'red';

  const { getByText, container } = render(<Message text={messageToDisplay} color={messageColor} />);

  const messageElement = getByText(messageToDisplay);
  expect(messageElement).toBeInTheDocument();

  expect(container.firstChild).toHaveStyle(`color: ${messageColor}`);
});