import React, { useState } from 'react';

const ContactPage = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill out all fields.');
      return;
    }

    // Simulate a successful form submission
    setFormStatus('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 space-y-4 sm:space-y-6 md:space-y-8 transition-all transform hover:scale-105"
      >
        <label className="block">
          <span className="text-gray-700 font-semibold">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="mt-2 p-3 w-full border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="mt-2 p-3 w-full border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="mt-2 p-3 w-full h-32 sm:h-40 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Send Message
        </button>
      </form>

      {formStatus && (
        <p
          className={`mt-6 text-center font-medium ${
            formStatus.includes('Thank') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {formStatus}
        </p>
      )}
    </div>
  );
};

export default ContactPage;
