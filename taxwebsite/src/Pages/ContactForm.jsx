import React from 'react';
import '../css/landingcss.css';

const ContactForm = () => {
    return (
      <div className="contact-form">
        <h2>Contact Me</h2>
        {/* Contact form fields go here */}
        {/* You'll need to handle form submission */}
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          {/* Add more fields as needed */}
          <button type="submit">Send Request</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;