import React from 'react';
import Button from './Button';
import Message from './Message';

const PlayAgain = ({ gameStatus, onClick }) => (
  <div className="game-done">
    <Message gameStatus={gameStatus} />
    <Button onClick={onClick}>Play Again</Button>
  </div>
);

export default PlayAgain;
