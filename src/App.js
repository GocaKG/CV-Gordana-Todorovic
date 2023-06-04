import React, { useState } from 'react';
import Card from './components/Card';
import Avatar from './components/Avatar';
import dataEn from './locales/en.json';
import dataSr from './locales/sr.json';
import ContactForm from './components/ContactForm';

const App = () => {
  const [language, setLanguage] = useState('en');
  const data = language === 'en' ? dataEn : dataSr;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setLanguage(option);
    setIsOpen(false);
  };
  return (
    <div className="cv-wrapper">
      <div className="cv-header-language">
      <button className="dropdown-button" onClick={handleToggle}>
        <i className="language"></i>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <span
            className={`dropdown-option${language === 'en' ? ' active' : ''}`}
            value="en"
            onClick={() => handleOptionClick('en')}
          >
            <i className="english" />
          </span>
          <span
            value="en"
            className={`dropdown-option${language === 'sr' ? ' active' : ''}`}
            onClick={() => handleOptionClick('sr')}
          >
            <i className="serbia"/>
          </span>
        </div>
      )}
    </div>
      <div className='cv-content-wrapper'>
        <Avatar />
        <Card data={data}/>
      </div>
      <ContactForm />
    </div>
  )
}

export default App