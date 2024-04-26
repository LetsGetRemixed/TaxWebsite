import React from 'react';
import '../css/disclaimer.css';

const Disclaimer = ({ agreed, onAgreeChange, onStart }) => {
    return (
        <div className="disclaimer-container">
            <h2>Welcome to Our Tax Calculator!</h2>
            <p>This calculator will guide you through the process of estimating your taxes based on the provided information. Please proceed by agreeing to our terms and conditions below.</p>
            <p>Please read the following terms and conditions carefully:</p>
            <textarea
                readOnly
                value="BIG SCARY LEGAL WORDS"
                className="disclaimer-text"
            ></textarea>
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="agree-checkbox"
                    checked={agreed}
                    onChange={onAgreeChange}
                />
                <label htmlFor="agree-checkbox">
                    By agreeing to this disclaimer, I understand and agree with the statement above and do not hold Solar Experts, or its employees, contractors, or affiliates responsible
                    for promises or decision made using the estimates from this calculator.
                </label>
            </div>
            <button
                onClick={onStart}
                disabled={!agreed}
                className="start-button"
            >
                Get Started
            </button>
        </div>
    );
};

export default Disclaimer;
