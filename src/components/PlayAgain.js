import React from 'react';
import Button from './Button';

const PlayAgain = ({ gameStatus, onClick: clickFunc }) => (
  <div className="game-done">
    <div
      className="message-status"
      style={{ color: gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>

    <Button onClick={clickFunc}>Play Again</Button>
  </div>
);

export default PlayAgain;
