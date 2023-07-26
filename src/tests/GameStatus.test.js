import React from 'react';
import { render } from '@testing-library/react';
import GameStatus from '../helpers/GameStatus';
import Game from '../screens/Game';

test('renders without errors', () => {
  render(<GameStatus />);
});


test("Correct message and style - won", () =>{

    const {getByText} = render(<GameStatus gameStatus="won"/>)

    const message = getByText('Nice');
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle('color: green');
})

test("Correct message and style - lost", () =>{

    const {getByText} = render(<GameStatus gameStatus="lost"/>)

    const message = getByText('Game Over');
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle('color: red');
})
