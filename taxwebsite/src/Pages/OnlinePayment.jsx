import React from 'react';
import '../css/landingcss.css';

const OnlinePayment = () => {
  return (
      <div className="online-payment-section">
          <div className="online-payment-image">
              <img src="/images/content4.png" alt="Online Payment" />
          </div>
          <div className="online-payment-content">
              <h2>Online Payments</h2>
              <p>Let your visitors make an online payment or contribute to a fundraiser.</p>
              <button>Pay Now</button>
          </div>
      </div>
  );
};

  export default OnlinePayment;