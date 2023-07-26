import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PlayAgain from '../components/PlayAgain';

test('renders without errors', () => {
    render(<PlayAgain />);
});

test('Play Again button is working - won', () => {
    const buttonClick = jest.fn();

    const { getByText } = render(<PlayAgain gameStatus="won" onClick={buttonClick} />);


    const PlayAgainButton = getByText('Play Again');
    fireEvent.click(PlayAgainButton);

    expect(buttonClick).toHaveBeenCalledTimes(1);
});

test('Play Again button is working - lost', () => {
    const buttonClick = jest.fn();

    const { getByText } = render(<PlayAgain gameStatus="lost" onClick={buttonClick} />);


    const PlayAgainButton = getByText('Play Again');
    fireEvent.click(PlayAgainButton);

    expect(buttonClick).toHaveBeenCalledTimes(1);
});

test('Game Over && Play Again Button work properly - lost', () => {
    const buttonClick = jest.fn();
    const { getByText } = render(<PlayAgain gameStatus="lost" onClick={buttonClick} />);

    const messageGot = getByText('Game Over');
    expect(messageGot).toBeInTheDocument();

    const button = getByText('Play Again');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(buttonClick).toHaveBeenCalled();
});

test('Nice && Play Again Button work properly - won', () => {
    const buttonClick = jest.fn();
    const { getByText } = render(<PlayAgain gameStatus="won" onClick={buttonClick} />);

    const messageGot = getByText('Nice');
    expect(messageGot).toBeInTheDocument();

    const button = getByText('Play Again');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(buttonClick).toHaveBeenCalled();
});