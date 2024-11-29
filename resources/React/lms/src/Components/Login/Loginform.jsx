import React, { useState } from 'react'
import './Login.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const userRole = response.data.role;
        const userProfile = response.data.profile;

        localStorage.setItem('userProfile', JSON.stringify(userProfile));

        if (userRole === 'admin') {
          navigate('/adminpanel');
        } else {
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    //main-class
    <div>
      <div className='main-section'>
        <div className="side-pic">
          <img style={{ width: '80%' }} className='' src="side-pic.png" alt="" />
        </div>
        <div className="form-section">


          <form onSubmit={handleSubmit} className="login-form max-w-sm mx-auto mt-10">
            <div className=' m-5 '>
              <h2 style={{ color: '#483C3C' }} className='text-center font-bold text-2xl uppercase '>Welcome to UCSC </h2>
              <p style={{ color: '#827A7A' }} className="text-center">Online Learning Platform</p>

            </div>
            <div className="mb-2">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder='user name' required />
            </div>
            <div className="mb-5">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password-area" placeholder='Password' required />
            </div>

            <div className="flex items-start mb-5">
              <div classname="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
            <button style={{ width: '100%', borderRadius: '50px' }}
              type="submit"
              className="mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-64">Login
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Loginform