import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Message from '../components/Message';

test('renders without errors', () => {
  render(<Message />);
});


test("Correct message and style - won", () =>{

    const {getByText} = render(<Message gameStatus="won"/>)

    const message = getByText('Nice');
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle('color: green');
})

test("Correct message and style - lost", () =>{

    const {getByText} = render(<Message gameStatus="lost"/>)

    const message = getByText('Game Over');
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle('color: red');
})