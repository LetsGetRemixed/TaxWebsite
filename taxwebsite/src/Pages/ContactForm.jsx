import React from 'react';
import '../css/landingcss.css';

const ContactForm = () => {
  return (
  <div>
    <div className='contact-header'>
      Contact Us
    </div>
    <div className="contact-section">
      <div className="contact-form">
        <h2>Request a Consultation</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Tell us a bit about your financial goals."></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="form-button">Send Request</button>
          </div>
        </form>
      </div>
      <div className="contact-info">
        <h2>Better yet, see us in person!</h2>
        <p>Send me a message, and tell me more about your financial goals and needs. I will get back to you soon to schedule a consultation.</p>
        <h2>Clean Power Pro's Hours</h2>
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