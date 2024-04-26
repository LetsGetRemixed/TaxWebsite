import React, { useState } from 'react';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import '../css/Taxquestions.css';

const questions = [
    { id: 1, text: "What year are you filing for?", field: "fileYear", type: "button", options: ["2022", "2023", "2024"],
     description: "Choose the tax year for which you are preparing your return." },
    { id: 2, text: "What year did the system get turned on?", field: "yearOn", type: "button", options: ["2020", "2021", "2022", "2023"],
     description: "Depreciation can start in the year the system begins to power the grid." },
    { id: 3, text: "What year did your system installation start?", field: "installYear", type: "button", options: ["2019", "2020", "2021", "2022"],
     description: "The ITC credit can be claimed in the year that physical instalation starts." },
    { id: 4, text: "How much of other expenses did you incur related to your solar system?", field: "expensesSystem", type: "number",
     description: "Other expenses may include connection fees or clean energy fees from your power company, or cleaning, maintenance, or insurance cost realted to your solar system." },
    { id: 5, text: "How much other income has your solar system produced this year?", field: "otherIncome", type: "number",
     description: "Other income can include SRECS or other state and local rebates or incentives" },
    { id: 6, text: "Please confirm the Tax Benefits you would like to claim:", field: "TaxBenefits", type: "button", options: ["Investment Tax Credit", "Depreciation"],
     description: "ITC Credit- Everyone who purchases and owns a solar system qualifies for this credit for the tax year\nDepreciation- Anyone who has their solar system turned on" },
    { id: 7, text: "Would you like one of our trusted tax preparers to help you file your taxes?", field: "taxHelp", type: "button", options: ["Yes", "No"],
     description: "If you mark yes, one of our trusted tax preparers will contact you within the next few days." },
    { id: 8, text: "Please enter any additional email addresses you would like any additional copies of your Tax form to be sent to:", field: "emails", type: "email",
     description: "If there are more than one please separate them by a comma, if none type No." },
    { id: 9, text: "For an additional $10, would you like to receive a paper copy of your tax forms in the mail?", field: "paperCopies", type: "button", options: ["Yes", "No"] }
];


const TaxCalculator = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [completed, setCompleted] = useState(false);

    const handleAnswer = (answer) => {
        const field = questions[currentQuestionIndex].field;
        setAnswers(prev => ({ ...prev, [field]: answer }));
        if (currentQuestionIndex === questions.length - 1) {
            setCompleted(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const renderDescription = (description) => {
        return description.split('\n').map((item, index) => (
            <span key={index}>{item}<br /></span>
        ));
    };

    const renderInput = () => {
        const question = questions[currentQuestionIndex];
        switch (question.type) {
            case 'button':
                return question.options.map(option => (
                    <button key={option} onClick={() => handleAnswer(option)} className="answer-button">
                        {option}
                    </button>
                ));
            case 'number':
            case 'email':
                return (
                    <input
                        type={question.type}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && e.target.value.trim() !== '') {
                                handleAnswer(e.target.value);
                                e.target.value = ''; // Clear the input after submission
                            }
                        }}
                        placeholder={question.type === 'number' ? "Enter amount" : "Enter email"}
                        className="input-field"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <Navbar/>
            <div className="tax-calculator-container">
                <h1>Tax Calculator</h1>
                {!completed ? (
                    <div>
                        <p className = "questions">{questions[currentQuestionIndex].text}</p>
                        <p className="description">{renderDescription(questions[currentQuestionIndex].description)}</p>
                        <div className="input-container">{renderInput()}</div>
                    </div>
                ) : (
                    <div>
                        <p>Thank you for your responses. We are now calculating your tax estimate.</p>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default TaxCalculator;