import React, { useState } from 'react';

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle the form submission, e.g., send the data to an API
    console.log({
      name,
      email,
      subject,
      message
    });

    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      {formSubmitted ? (
        <div className="bg-green-600 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl">Thank you for your complaint! {name}</h2>
          <p>We will look into it and get back to you if necessary.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl mb-4">User Complaint Form</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">Complaint</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white mt-1 h-32"
            ></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ComplaintForm;
