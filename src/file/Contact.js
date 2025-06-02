import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: ''
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
        'service_azjb7n6', 
        'template_i90pvsb', 
        e.target, 
        'YDuVgM9HyjS1eY6He' 
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Message sent successfully!');
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setMessage('Oops! Something went wrong, please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="p-8 my-10 text-white bg-gray-950 mx-10p rounded-xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Let's build<br />
              something<br />
              <span className="text-white">great together.</span>
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 text-white placeholder-gray-500 transition-colors bg-gray-900 border-b border-gray-700 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 text-white placeholder-gray-500 transition-colors bg-gray-900 border-b border-gray-700 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Reason"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-4 text-white placeholder-gray-500 transition-colors bg-gray-900 border-b border-gray-700 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                <button
                    type="submit"
                    className="w-full px-8 py-4 text-white transition-colors bg-gray-800 rounded-md hover:bg-blue-400"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
            {message && <p className="mt-4 text-center text-white">{message}</p>}

          </div>

          <div className="space-y-8 lg:pl-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">EMAIL</p>
                <a href="mailto:jefinjefees@gmail.com" className="text-white transition-colors hover:text-gray-300">
                  jefinjefees@gmail.com
                </a>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/jefinfrancis/" className="text-white transition-colors hover:text-gray-300">
                  Jefin Francis
                </a>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Instagram</p>
                <a href="https://www.instagram.com/jefin._.francis/" className="text-white transition-colors hover:text-gray-300">
                  jefinfrancis
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">GitHub</p>
                <a href="https://github.com/jefin10" className="text-white transition-colors hover:text-gray-300">
                  jefin10
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">LeetCode</p>
                <a href="https://leetcode.com/u/Jefin_10/" className="text-white transition-colors hover:text-gray-300">
                  Jefin_10
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Codeforces</p>
                <a href="https://codeforces.com/profile/Jeff_10" className="text-white transition-colors hover:text-gray-300">
                  Jeff_10
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;