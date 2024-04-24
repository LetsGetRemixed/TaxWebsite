import React, { useState } from 'react';
import '../css/FAQ.css';

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState([]);
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
            answer: 'Yes'
        },
        {
            question: 'Example',
            answer: 'No'
        }
    ]
  return (
    <div>
        <div>
            <h2>Frequently Asked Questions</h2>
            <a href='#'>Support@cleansupport.expert</a>
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
                            <div className='arrow'>{openQuestion.includes(index) ? '▼' : '▶'}</div>
                        </div>
                        {openQuestion.includes(index) && <div className='answer'> {faq.answer} </div>}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FAQ