import React from 'react';

const PlayNum = (props) => {

  // number status color
  const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

  // number click
  const handleClick = () => {
    props.onClick(props.number, props.status);
  };

  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={handleClick}
    >
      {props.number}
    </button>
  );
};

export default PlayNum;
