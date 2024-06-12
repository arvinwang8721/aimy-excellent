// src/pages/ContactUs.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center py-12">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
