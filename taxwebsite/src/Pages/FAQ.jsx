import React, { useState } from 'react';
import '../css/FAQ.css';
import Footer from './Footer';
import Navbar from './Navbar';
import ChatWindow from '../components/ChatWindow';
import { FiMessageSquare } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState([]);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleQuestion = (index) => {
        // Show FAQ questions and answers that are open 
        if (openQuestion.includes(index)) {
            setOpenQuestion(openQuestion.filter((item) => item !== index));
        } else {
            setOpenQuestion([...openQuestion, index]);
        }
    };
    const faqData = [
        {
            question: 'Does you service need protection?',
            answer: 'Yes, our Certified Public Accountant (CPA) team will handle any audit issues related to solar deprecation.'
        },
        {
            question: 'Why should we use your service?',
            answer: 'We enable residential solar owners the ability to depreciate their solar systems, which decrease their overall cost.'
        },
        {
            question: 'How are homeowners able to depreciate their solar system? I thought this was a business deduction.',
            answer: 'When utilities give you credit for renewable energy that is sent to the grid (NET metering), this is considered a barter arrangement that creates "income" for you. Since renewable energy is generating income, you can depreciate the asset.'
        },
        {
            question: 'If I lease my system, can I claim deprecation?',
            answer: 'No, you own your system. If you paid cash or have a loan you qualify for the Federal Tax Credit and you are allowed to depreciate you system.'
        },
        {
            question: 'Is it worth it to depreciate my solar array?',
            answer: 'The typical homeowner will see an additional savings of 19%'
        }
    ];

    const handleChatButtonClick = () => {
        setIsChatOpen(!isChatOpen); // Toggle isChatOpen state
    }
    const handleCloseChat = () => {
        setIsChatOpen(false); // Close the chat window
    }


  return (
    <div className = "faq-page">
        <div className='faq-header'>
            <div className='faq-header-content'>
                <h1>Frequently Asked Questions</h1>
                <a href='#' className='email-link'>support@cleansupport.expert</a>
            </div>
        </div>
        <div className='faq-container'>
            {
                faqData.map((faq, index) => (
                    <div key={index} className='faq-item'>
                        <div
                            className='question'
                            onClick={() => toggleQuestion(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className='question-text'>{faq.question}</div>
                            <div className='arrow'>{openQuestion.includes(index) ? <FaChevronUp /> : <FaChevronDown />}</div>
                        </div>
                        {openQuestion.includes(index) && <div className='answer'> {faq.answer} </div>}
                    </div>
                ))
            }
        </div>
        <button className='chatbot-button' onClick={handleChatButtonClick}>{isChatOpen ? 'X' : <FiMessageSquare />}</button>
        {
            // If isOpen then display the chat
            isChatOpen && <ChatWindow isOpen={isChatOpen} onClose={handleCloseChat} />
        }
        <Footer />
    </div>
)
}

export default FAQ