import React, { useState } from 'react'
import axios from 'axios';
import Breadcumb from '../Breadcumb';
function EmailRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [errorshowToast, seterrorShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const breadcumbItems = [
    { label: 'Home', link: '#', icon: 'M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' },
    { label: 'Email Resgitration' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/signup', {
        email,
        password,
      });
      console.log('Response:', response.data);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setErrorMessage(error.response ? error.response.data.message : error.message);
      seterrorShowToast(true);
      setTimeout(() => seterrorShowToast(false), 4000);
    }

    //  
  };

  return (
    <div>

       <div style={{ width: '100%' }} className="flex justify-between items-center">
          <h3 style={{ fontSize: '25px', color: '#6a6b6b', fontFamily: '"Poppins", serif', }} className="m-4 font-semibold ml-5">
            Email Registration
          </h3>
          <Breadcumb items={breadcumbItems} />
        </div>
     
      <div className="max-w-md mx-auto mt-10">
       
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h1 className="display-6 fw-bold text-primary mb-4">
            Welcome to Email Registration! 🌟
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Enter your email to create a secure and easy-to-access account.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="login-form bg-white p-6 rounded-lg shadow-lg">
          {/* Email Section */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
            <p className="text-xs text-gray-600 mt-1">
              Please use a valid email address for registration.
            </p>
          </div>

          {/* Password Section */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-area w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
            <p className="text-xs text-gray-600 mt-1">
              Password must be at least 8 characters and include uppercase, lowercase,
              and symbols.
            </p>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </a>
            </label>
          </div>
          {errorshowToast && (
            <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 mt-10 " role="alert">
              <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Danger alert! </span>{errorMessage}
              </div>
            </div>
          )}

          {showToast && (
            <div class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 mt-10 " role="alert">
              <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Success alert!</span> New Student Data is submitted .
              </div>
            </div>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </form>
      </div>

    </div>
  )
}

export default EmailRegister