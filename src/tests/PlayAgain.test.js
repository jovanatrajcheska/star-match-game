import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PlayAgain from '../components/PlayAgain';

test('renders without errors', () => {
  render(<PlayAgain />);
})


test('Play Again button is working - won', () =>{
    const buttonClick = jest.fn();

    const { getByText} = render(<PlayAgain gameStatus = "won" onClick={buttonClick} />);


    const PlayAgainButton = getByText('Play Again');
    fireEvent.click(PlayAgainButton);

    expect(buttonClick).toHaveBeenCalledTimes(1);
})

test('Play Again button is working - lost', () =>{
    const buttonClick = jest.fn();

    const { getByText} = render(<PlayAgain gameStatus = "lost" onClick={buttonClick} />);


    const PlayAgainButton = getByText('Play Again');
    fireEvent.click(PlayAgainButton);

    expect(buttonClick).toHaveBeenCalledTimes(1);
})


test("Correct message and style - won", () =>{

    const {getByText} = render(<PlayAgain gameStatus="won"/>)

    const message = getByText('Nice');
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle('color: green');
})

test("Correct message and style - lost", () =>{

    const {getByText} = render(<PlayAgain gameStatus="lost"/>)

    const message = getByText('Game Over');
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle('color: red');
})