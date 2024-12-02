import React, { useState } from 'react';
import './Login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsVisible(false);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/login', {
  //       email,
  //       password,
  //     });

  //     if (response.status === 200) {
  //       const userRole = response.data.role;
  //       const userProfile = response.data.profile;

  //       if (userProfile) {
  //         localStorage.setItem('userProfile', JSON.stringify(userProfile));
  //       } else {
  //         console.warn('User profile is missing in response.');
  //       }

  //       if (userRole === 'admin') {
  //         navigate('/adminpanel');
  //       } else {
  //         navigate('/dashboard');
  //       }
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       setErrorMessage('Invalid credentials. Please try again.');
  //     } else {
  //       setErrorMessage('An error occurred. Please try later.');
  //     }
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();

  // Clear any previous error messages
  setErrorMessage('');

  try {
    // Send login request to backend
    const response = await axios.post('http://localhost:8000/api/login', {
      email,
      password,
    });

    if (response.status === 200) {
      const { role: userRole, profile: userProfile } = response.data;

      // Store user profile and token in localStorage
      if (userProfile) {
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        localStorage.setItem("email",email);
      } else {
        console.warn('User profile is missing in response.');
      }

      // Navigate to different panels based on user role
      if (userRole === 'admin') {
        navigate('/adminpanel');
      } else if (userRole === 'user') {
        navigate('/dashboard');
      } else {
        console.warn('Unknown user role:', userRole);
        setErrorMessage('Unexpected user role. Please contact support.');
      }
    }
  } catch (error) {
    // Handle errors
    if (error.response) {
      if (error.response.status === 401) {
        setErrorMessage('Invalid credentials. Please try again.');
      } else {
        setErrorMessage(
          `Error ${error.response.status}: ${error.response.data.message || 'An error occurred.'}`
        );
      }
    } else {
      setErrorMessage('Unable to connect to the server. Please try later.');
    }

    console.error('Login error:', error);
  }
};


  return (
    <div>
      <div className='main-section'>
        <div className="side-pic">
          <img style={{ width: '80%' }} src="side-pic.png" alt="Side illustration" />
        </div>
        <div className="form-section">


          <form onSubmit={handleSubmit} className="login-form max-w-sm mx-auto mt-10">
            <div className="m-5">
              <h2 style={{ color: '#483C3C' }} className="text-center font-bold text-2xl uppercase">Welcome to UCSC</h2>
              <p style={{ color: '#827A7A' }} className="text-center">Online Learning Platform</p>
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-area"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
              </label>
            </div>
            <button
              style={{ width: '100%', borderRadius: '50px' }}
              type="submit"
              className="mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-64"
            >
              Login
            </button>
             
            {errorMessage && isVisible && (
             
             <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
             <svg
               className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 20 20"
             >
               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
             </svg>
             <span className="sr-only">Danger</span>
             <div>
               <span className="font-medium">Ensure that these requirements are met:</span>
               <ul className="mt-1.5 list-disc list-inside">
                 <li>At least 10 characters (and up to 100 characters)</li>
                 <li>At least one lowercase character</li>
                 <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
               </ul>
             </div>
             <button
               type="button"
               className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 "
               aria-label="Close"
               onClick={handleClose}
             >
               <span className="sr-only">Close</span>
               <svg
                 className="w-3 h-3"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 14 14"
               >
                 <path
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                 />
               </svg>
             </button>
           </div>
           
            )}
          </form>

        </div>
      </div>
    </div>
  );
};

export default Loginform;
