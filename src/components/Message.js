import React from 'react';

const Message = ({ text, color }) => (
  <div className="message-status" style={{ color }}>
    {text}
  </div>
);

export default Message;

