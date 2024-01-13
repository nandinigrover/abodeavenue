import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
  };

  return (
  
      <div className="contact-details-container">
        <div className="contact-detail">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>abodeavenue@gmail.com</span>
        </div>
        <div className="contact-detail">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span> (+44) 123456789</span>
        </div>
        <div className="contact-detail">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>144 London,England</span>
        </div>
      </div>
  );
};

export default Contact;

