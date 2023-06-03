import React, { useState } from 'react';
import Card from './components/Card';
import Avatar from './components/Avatar';
import dataEn from './locales/en.json';
import dataSr from './locales/sr.json';
import ContactForm from './components/ContactForm';

const App = () => {
  const [language, setLanguage] = useState('en');
  const data = language === 'en' ? dataEn : dataSr;

  const handleLanguageChange = (event) => {
    console.log(event.target.value)
    setLanguage(event.target.value);
  };

  return (
    <div className="cv-wrapper">
        <select className='language-combobox' value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="sr">Serbian</option>
      </select>
      <div className='cv-content-wrapper'>
        <Avatar />
        <Card data={data}/>
      </div>
      <ContactForm />
    </div>
  )
}

export default App