// ChatWindow.js
import React, { useState } from 'react';
import '../css/ChatWindow.css'; // Import CSS for styling

// Format Date
const formatDate = (date) => {
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

const ChatWindow = ({ isOpen, onClose }) => {
  const [userMessage, setUserMessage] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  
  const questions = [
    "Let me know if you have any questions!",
    "Hi! Please enter your question and don't leave out any details. This will help get your question fully answered as soon as possible.",
    "Thanks! Your message has been submitted. We'll get back to you here or via email. We'll respond as soon as we can"
  ];

  const [messages, setMessages] = useState([{ text: questions[questionIndex], sender: 'chatbot', timestamp: new Date() }]);


  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleUserMessageSubmit = () => {
    console.log("User Message:", userMessage);
    const newMessages = [...messages, { text: userMessage, sender: 'user', timestamp: new Date() }]; // Add user message 
    setMessages(newMessages); // Update messages array adding the user message to it
    setUserMessage('');
    if (questionIndex < questions.length - 1) {
      // If there are no more questions, display the next one
      setQuestionIndex(prevIndex => prevIndex + 1);
      // Add the next question to the array of messages to display
      setMessages(prevMessages => [...prevMessages, { text: questions[questionIndex + 1], sender: 'chatbot', timestamp: new Date() }]); // Update messages array
    }
  };

  return (
    <div className='chat-window'>
      <div className='heading-section'>
        <div className='chat-header'>
          <p className='contact-us'>Contact Us</p>
          <button className='close-button' onClick={onClose}>▼</button>
        </div>
        <p className="sub-heading">We'll respond as soon as we can.</p>
      </div>
      <div className='chat-body'>
        {
          // Display current question
          messages.map((message, index) => (
            <div key={index} className='message-container'>
              <div className={message.sender === 'user' ? 'message user-message' : 'message question-message'}>
                {message.text}
              </div> 
              <div className="message-info">
                <div className={message.sender === 'user' ? 'user-timestamp' : 'chatbot-timestamp'}>{formatDate(message.timestamp)}</div>
              </div>

            </div>
          ))
        }
      </div>
      <div className="input-container">
          <input 
            type='text'
            value={userMessage}
            onChange={handleUserMessageChange}
            placeholder='Enter your question or message here'
            className='input-field'
          />
          <button onClick={handleUserMessageSubmit} className='send-button'>Send</button>
        </div>
    </div>
  );
};

export default ChatWindow;
