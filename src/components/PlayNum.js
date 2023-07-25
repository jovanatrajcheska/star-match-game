import React from 'react';
import Button from './Button';

const PlayNum = ({ number, status, onClick }) => {
  const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

  const handleClick = () => {
    onClick(number, status);
  };

  return (
    <Button
      data-testid={`number-${number}`}
      className={`number ${status === 'used' ? 'used' : ''}`}
      style={{ backgroundColor: colors[status] }}
      onClick={handleClick}
    >
      {number}
    </Button>
  );
};

export default PlayNum;
