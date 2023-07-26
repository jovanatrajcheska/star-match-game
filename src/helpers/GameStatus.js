import React from 'react';

const GameStatus = ({ gameStatus }) => {
    
    const messageToDisplay = gameStatus === 'lost' ? 'Game Over' : 'Nice';
    const messageColor = gameStatus === 'lost' ? 'red' : 'green';

    return <div className="message-status" style={{ color: messageColor }}> {messageToDisplay} </div>;
};

export default GameStatus;
