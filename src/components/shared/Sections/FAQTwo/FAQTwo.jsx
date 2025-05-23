import React from 'react';
import './FAQTwo.css';
const FAQTwo = ({ faqs, className = '' }) => {
  return (
    <section className={`faq-sec-2 ${className}`}>
      <div className="container faq-con">
        <h2 className="main-h2 text-center mb-5">Got Questions? We’ve Got Answers.</h2>
        
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item-2">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button 
                  className={`accordion-button accordion-button-2 column-gap-20 ${index === 0 ? '' : 'collapsed'}`} 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"} 
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div 
                id={`collapse${index}`} 
                className={`accordion-collapse-2 collapse mt-md-4 mt-3 ${index === 0 ? 'show' : ''}`} 
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQTwo; 