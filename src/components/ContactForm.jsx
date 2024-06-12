// src/components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobRole: '',
    companyDomain: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobRole: '',
        companyDomain: '',
        message: ''
      }); // Clear the form
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-10 p-8 bg-white rounded-lg">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
      <h3 className="text-2xl font-semibold mb-6 text-center">Let's talk about your project</h3>
      <p className="text-center text-gray-500 mb-10">
        Drop us a line through the form below and we'll get back to you
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address*"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              placeholder="Job Role"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="companyDomain"
              value={formData.companyDomain}
              onChange={handleChange}
              placeholder="Company Domain*"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        </div>
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            rows="6"
            required
          />
        </div>
        <div className="text-gray-500 text-center">
          We will store and process your personal data on terms defined <a href="/terms" className="text-blue-500">here</a>.
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-blue text-white text-lg rounded-lg hover:text-black focus:outline-none focus:ring focus:border-blue-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
