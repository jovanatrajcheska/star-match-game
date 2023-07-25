import React from 'react';

const Message = ({ gameStatus }) => (

    <div className="message-status" style={{ color: gameStatus === 'lost' ? 'red' : 'green' }}>

        {gameStatus === 'lost' ? 'Game Over' : 'Nice'}

    </div>
);

export default Message;
