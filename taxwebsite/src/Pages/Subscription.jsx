import React from 'react';
import '../css/landingcss.css';

const Subscription = () => {
    return (
      <div className="subscription">
        <h2>Subscribe</h2>
        {/* Handle subscription logic */}
        <input type="email" placeholder="Email" />
        <button type="submit">Sign Up</button>
      </div>
    );
  };
  
  export default Subscription;