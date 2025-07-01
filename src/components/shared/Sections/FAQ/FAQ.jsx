import React from 'react';
import './FAQ.css';
const FAQ = ({ faqs, className = '' }) => {
  return (
    <section className={`faq-sec ${className}`}>
      <div className="container faq-con">
        <h2 className="main-h2 text-center mb-5">FAQs</h2>
        
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button 
                  className={`accordion-button accordion-button-1 column-gap-20 ${index === 0 ? '' : 'collapsed'}`} 
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
                className={`accordion-collapse collapse mt-md-4 mt-3 ${index === 0 ? 'show' : ''}`} 
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
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

export default FAQ; 