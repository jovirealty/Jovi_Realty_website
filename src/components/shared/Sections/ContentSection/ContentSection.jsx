import React from 'react';
import './ContentSection.css';

const ContentSection = ({ content, className = '' }) => {
    return (
        <div className={`plain-content-sec container ${className}`}>
            {content}
        </div>
    );
};

export default ContentSection; 