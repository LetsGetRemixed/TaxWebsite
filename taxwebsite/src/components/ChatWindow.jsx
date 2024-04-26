import React, { useState } from 'react';

const ChatWindow = ({ onClose }) => {
  const [userMessage, setUserMessage] = useState('');

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleUserMessageSubmit = () => {
    console.log("User Message:", userMessage);
    setUserMessage('');
  };

  return (
    <div className='chat-window'>
      <div className='chat-header'>
        <button onClick={onClose}> Close </button>
      </div>
      <div className='chat-body'>
        <p>Questiosn will go here</p>
        <input 
          type='text'
          value={userMessage}
          onChange={handleUserMessageChange}
          placeholder='Type your response...'
        />
        <button onClick={handleUserMessageSubmit}> Send </button>
      </div>
    </div>
  )
}

export default ChatWindow