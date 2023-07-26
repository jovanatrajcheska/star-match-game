import React from 'react';
import GameStatus from '../helpers/GameStatus';

const Message = ({ gameStatus }) => (
  <GameStatus gameStatus={gameStatus} />
);

export default Message;
