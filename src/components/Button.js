import React from 'react';

const Button = ({ onClick, className, style, children, ...addParams }) => (

  <button onClick={onClick} className={className} style={style} {...addParams}>

    {children}

  </button>
);

export default Button;
