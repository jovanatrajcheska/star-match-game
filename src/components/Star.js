import React from 'react';
import '../App.css';

const Star = (props) => {
  return (
    <div className="star-container">
      {props.range(1, props.count).map((starId) => (
        <div key={starId} className="star" />
      ))}
    </div>
  );
};
 
export default Star;
