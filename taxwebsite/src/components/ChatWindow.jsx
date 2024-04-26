// ChatWindow.js
import React, { useState } from 'react';
import '../css/ChatWindow.css'; // Import CSS for styling

const ChatWindow = ({ isOpen, onClose }) => {
  const [userMessage, setUserMessage] = useState('');

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleUserMessageSubmit = () => {
    console.log("User Message:", userMessage);
    setUserMessage('');
  };

  return (
    <div className={`chat-window ${isOpen ? 'open' : ''}`}>
      <div className='chat-header'>
        <button className='close-button' onClick={onClose}>X</button>
      </div>
      <div className='chat-body'>
        <p>Questions will go here</p>
        <input 
          type='text'
          value={userMessage}
          onChange={handleUserMessageChange}
          placeholder='Type your response...'
        />
        <button onClick={handleUserMessageSubmit}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
