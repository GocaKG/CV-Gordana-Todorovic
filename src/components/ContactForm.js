import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      }, 3000);
    }
  };
  
  return (
    <>
      <form onSubmit={handleSubmit} className='contact-form-wrapper'>
        <div className='contact-form-field'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className='contact-form-field'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className='contact-form-field'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
        {showModal && (
        <div className="modal">
          <h2>Submitted Data:</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Message: {message}</p>
        </div>
      )}
      </form>
    </>
  );
};

export default ContactForm;