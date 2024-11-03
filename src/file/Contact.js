import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-950  text-white p-8 my-10 mx-10p  rounded-xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    className="w-full bg-gray-900 border-b border-gray-700 p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border-b border-gray-700 p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border-b border-gray-700 p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                    <button type="submit" className="w-full bg-gray-800 text-white hover:bg-blue-400 transition-colors py-4 px-8 rounded-md">
                      Send Message
                    </button>
                </div>
              </div>
            </form>
          </div>

          <div className="space-y-8 lg:pl-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">EMAIL</p>
                <a href="mailto:jefinjefees@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                  jefinjefees@gmail.com
                </a>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <a href="https://www.linkedin.com/in/jefinfrancis/" className="text-white hover:text-gray-300 transition-colors">
                  Jefin Francis
                </a>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Instagram</p>
                <a href="https://www.instagram.com/jefin._.francis/" className="text-white hover:text-gray-300 transition-colors">
                  jefinfrancis
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">GitHub</p>
                <a href="https://github.com/jefin10" className="text-white hover:text-gray-300 transition-colors">
                  jefin10
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">LeetCode</p>
                <a href="https://leetcode.com/u/Jefin_10/" className="text-white hover:text-gray-300 transition-colors">
                  Jefin_10
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Codeforces</p>
                <a href="https://codeforces.com/profile/Jeff_10" className="text-white hover:text-gray-300 transition-colors">
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