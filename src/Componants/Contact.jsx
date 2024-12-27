import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [fromName, setFromName] = useState('');
  const [toName, setToName] = useState('Your Name');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: fromName,
      to_name: toName,
      message: message,
    };

    emailjs
      .send('service_46lgfhr', 'template_lo17psr', templateParams, 'COWkpNVhANHcmILft')
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Error sending email. Please try again.');
        }
      );
  };

  return (
    <div
      className="relative w-full h-screen bg-cover text-white bg-center font-serif flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://as1.ftcdn.net/v2/jpg/09/64/19/44/1000_F_964194431_Qvqz3WUiYqwIvdKuqtZdfXAGsPIo4BWS.jpg')",
      }}
    >
      <div className=" bg-opacity-50 p-8 rounded-lg w-full sm:w-2/3 md:w-1/2">
      <div className='flex flex-row justify-center space-x-3'>
      <img src="src\assets\message.png" alt="Doctor" className='h-20 w-20 hover:scale-110 transition-transform duration-300 cursor-pointer mb-5'/>
        <h2 className="text-3xl sm:text-4xl font-semibold  text-center">Contact Us</h2>
        </div>
        <form onSubmit={sendEmail} className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* To Name Input */}
          <input
            type="text"
            placeholder="Recipient's Name"
            value={toName}
            onChange={(e) => setToName(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Message Textarea */}
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-4 h-32 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
