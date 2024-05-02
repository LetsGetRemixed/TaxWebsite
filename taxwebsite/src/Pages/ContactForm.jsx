import React, {useState} from 'react';
import '../css/landingcss.css';

const ContactForm = () => {
  const [userMessage, setUserMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && email.trim() !== '' && userMessage.trim() !== '') {
      sendEmail();
      setEmail('');
      setName('');
      setUserMessage('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  const sendEmail = () => {
    const messageWithInfo = `${userMessage}\n\nName: ${name}\nEmail: ${email}`;
    fetch('http://localhost:5100/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'isaiah12gage@gmail.com',
        from: email,
        subject: 'Request a Consultation',
        text: messageWithInfo
      })
    })
    .then(response => {
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.log('Error sending email');
      }
    })
    .catch(error => {
      console.error('Error sending email', error);
    })
  };
  
  return (
    <div>
      <div className='contact-header'>
        Contact Us
      </div>
      <div className="contact-section">
        <div className="contact-form">
          <h2>REQUEST A CONSULTATION</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us a bit about your financial goals." value={userMessage} onChange={handleUserMessageChange}></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="form-button">Send Request</button>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <h2>BETTER YET, SEE US IN PERSON!</h2>
          <p>Send me a message, and tell me more about your financial goals and needs. I will get back to you soon to schedule a consultation.</p>
          <h2>CLEAN POWER PRO'S</h2>
          <h2>HOURS</h2>
          <p>Mon: 09:00am - 05:00pm </p>
          <p>Tue: 09:00am - 05:00pm </p>
          <p>Wed: 09:00am - 05:00pm </p>
          <p>Thu: 09:00am - 05:00pm </p>
          <p>Fri: 09:00am - 05:00pm </p>
          <p>Sat: Closed </p>
          <p>Sun: Closed </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
