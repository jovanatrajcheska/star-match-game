import React from 'react';
import Button from './Button';
import Message from './Message';

const PlayAgain = ({ gameStatus, onClick }) => {
  
  const messageToDisplay = gameStatus === 'lost' ? 'Game Over' : 'Nice';
  const messageColor = gameStatus === 'lost' ? 'red' : 'green';

  return (
    <div className="game-done">
      <Message text = { messageToDisplay } color = { messageColor } />
      <Button onClick = { onClick }> Play Again </Button>
    </div>
  );
};

export default PlayAgain;