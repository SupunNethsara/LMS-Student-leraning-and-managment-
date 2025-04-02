
import React, { useState } from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Searchinglogo from './Component/Searchinglogo';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AdminProfileavtar from './Component/Profileavtar';




function Admindashboard() {
  const [registerDetails, setRegisterDetails] = useState(false);
  const [classdetails, setClassDetails] = useState(false);

  const handleLogout = async () => {

    try {

      const response = await axios.post('http://localhost:8000/api/logout');
      alert(response.data.message);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error.response?.data || error.message);
      alert('Logout failed. Please try again.');
    }
  };;

  function toggleRegisterDetails() {
    setRegisterDetails(!registerDetails);
  }

  function toggleClassDetails() {
    setClassDetails(!classdetails);
  }

  return (
    <div>

      <nav style={{ background: '#ffffff', position: "sticky" }} className="fixed top-0 z-50 w-full border-b ">
        <div style={{ padding: '5px' }} className="px-2  lg:px-5 lg:pl-1">
          <div className="flex items-center justify-between">
            <Searchinglogo />
            <div className="flex items-center">

              <div style={{ marginRight: '10px' }} className="flex items-center ms-3">

                <IconButton size="large" aria-label="show 4 new mails" style={{ color: "black" }}>
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>

                <IconButton size="large" aria-label="show 17 new notifications" style={{ color: "black" }}>
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <AdminProfileavtar />

              </div>
            </div>
          </div>
        </div>
      </nav >
      <aside className="fixed text-sm top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-gray-200 shadow-sm">
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 mt-16">
            {/* Dashboard */}
            <li>
              <NavLink
                to="/adminpanel/dashboard"
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg group ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`
                }
              >
                <span className="flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </span>
                <span className="ml-3 font-medium">Dashboard</span>
              </NavLink>
            </li>

            {/* Student Details */}
            <li>
              <button
                onClick={toggleRegisterDetails}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-gray-50 group"
              >
                <div className="flex items-center">
                  <span className="flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </span>
                  <span className="ml-3 font-medium">Student Details</span>
                </div>
                <svg 
                  className={`w-4 h-4 transition-transform ${registerDetails ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {registerDetails && (
                <ul className="py-1 space-y-1 ml-9">
                  <li>
                    <NavLink
                      to="registration"
                      className={({ isActive }) => 
                        `flex items-center p-2 pl-4 rounded-lg text-sm ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`
                      }
                    >
                      <span className="mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                        </svg>
                      </span>
                      Register Student
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="Addpayment"
                      className={({ isActive }) => 
                        `flex items-center p-2 pl-4 rounded-lg text-sm ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`
                      }
                    >
                      <span className="mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </span>
                      Add Payment
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Task Manager */}
            <li>
              <NavLink
                to="taskupload"
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg group ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`
                }
              >
                <span className="flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </span>
                <span className="ml-3 font-medium">Task Manager</span>
              </NavLink>
            </li>

            {/* Class Activity */}
            <li>
              <button
                onClick={toggleClassDetails}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-gray-50 group"
              >
                <div className="flex items-center">
                  <span className="flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </span>
                  <span className="ml-3 font-medium">Class Activity</span>
                </div>
                <svg 
                  className={`w-4 h-4 transition-transform ${classdetails ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {classdetails && (
                <ul className="py-1 space-y-1 ml-9">
                  <li>
                    <NavLink
                      to="uploadquiz"
                      className={({ isActive }) => 
                        `flex items-center p-2 pl-4 rounded-lg text-sm ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`
                      }
                    >
                      <span className="mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                        </svg>
                      </span>
                      Quiz
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="assignments"
                      className={({ isActive }) => 
                        `flex items-center p-2 pl-4 rounded-lg text-sm ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`
                      }
                    >
                      <span className="mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </span>
                      Assignments
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Recording Upload */}
            <li>
              <NavLink
                to="recording-upload"
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg group ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`
                }
              >
                <span className="flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </span>
                <span className="ml-3 font-medium">Recording Upload</span>
              </NavLink>
            </li>

            {/* Sign Out - Bottom aligned */}
            <li className="mt-auto pt-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-50 group"
              >
                <span className="flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                </span>
                <span className="ml-3 font-medium">Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div style={{ height: 'auto', backgroundColor: '#ededed' }} className="sm:ml-64">
        <div className="p-4 mt-auto ">
          <div style={{ backgroundColor: '#ffffff', height: '100vh', borderRadius: '10px' }} className="grid grid-cols-1 gap-4 mb-4">
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Admindashboard