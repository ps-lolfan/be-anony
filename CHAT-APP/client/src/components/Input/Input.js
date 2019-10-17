import React from 'react';

import './Input.css';

const Input = ({ message, sendMessage, setMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event)  : null}
      
    />
    <button className="sendButton" onClick={event => sendMessage(event)}><b>SEND</b></button>
  </form>
)

export default Input;