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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  
  const questions = [
    "Let me know if you have any questions!",
    "Please enter you eamil and name",
    "Hi! Please enter your question and don't leave out any details. This will help get your question fully answered as soon as possible.",
    "Thanks! Your message has been submitted. We'll get back to you here or via email. We'll respond as soon as we can"
  ];

  const [messages, setMessages] = useState([{ text: questions[questionIndex], sender: 'chatbot', timestamp: new Date() }]);


  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
    setIsInputEmpty(e.target.value.trim() === '');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserMessageSubmit = () => {
    console.log("User Message:", userMessage);
    let newMessages;
    if (questionIndex === 1) {
      // If the current question is asking for email and name
      newMessages = [
        ...messages,
        { text: `Name: ${name}, Email: ${email}`, sender: 'user', timestamp: new Date() }
      ];
    } else {
      newMessages = [...messages];
    }
    // Add the user message if it's not empty
    if (userMessage.trim() !== '') {
      newMessages.push({ text: userMessage, sender: 'user', timestamp: new Date() });
    }
    setMessages(newMessages); // Update messages array
    setUserMessage('');
    // If there are no more questions, display the next one
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(prevIndex => prevIndex + 1);
      // Add the next question to the array of messages to display
      setMessages(prevMessages => [...prevMessages, { text: questions[questionIndex + 1], sender: 'chatbot', timestamp: new Date() }]);
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
      <div className='chat-body'>
          {messages.map((message, index) => (
            <div key={index} className='message-container'>
              {/* User Message */}
              {message.sender === 'user' ? (
                <div className='message user-message'>
                  {message.text}
                </div>
              ) : (
                <div className='message question-message'>
                  {/* Message asking for email and name */}
                  {message.text === questions[1] ? ( // Check if the current message is asking for email and name
                    <div>
                      <div>{message.text}</div>
                      <input 
                        type='text'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Enter your email'
                        className='input-field'
                      />
                      <input 
                        type='text'
                        value={name}
                        onChange={handleNameChange}
                        placeholder='Enter your name'
                        className='input-field'
                      />
                      <button onClick={() => {
                        handleUserMessageSubmit();
                      }} className='send-button'>Send</button>
                    </div>
                  ) : (
                    <div>{message.text}</div>
                  )}
                </div>
              )}
              <div className="message-info">
                <div className={message.sender === 'user' ? 'user-timestamp' : 'chatbot-timestamp'}>{formatDate(message.timestamp)}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="input-container">
          <input 
            type='text'
            value={userMessage}
            onChange={handleUserMessageChange}
            placeholder='Enter your question or message here'
            className='input-field'
          />
          <button onClick={handleUserMessageSubmit} className='send-button' disabled={isInputEmpty}>Send</button>
        </div>
    </div>
  );
};

export default ChatWindow;
