import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Dashboard.scss'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import FiberDvrIcon from '@mui/icons-material/FiberDvr';
import Searchinglogo from './Components/Searchinglogo';
import Profile from './Components/RoutingDash/Profile';






function Dashboardpanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [openTaskBox, setOpenTaskBox] = useState(false);
  const [profile, setProfile] = useState('');
  const [loading, setLoading] = useState(true);
  const [openClassActivity, setOpenClassActivity] = useState(false);
  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };
  const toggleDownProfile = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
    setLoading(false);
  }, []);

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



  return (
    <>


      <nav style={{ background: '#ffffff', position: "sticky" }} className="fixed top-0 z-50 w-full border-b ">
        <div style={{ padding: '5px' }} className="px-2  lg:px-5 lg:pl-1">
          <div className="flex items-center justify-between">
            <Searchinglogo />
            <div className="flex items-center">

              <div style={{}} className="flex items-center ms-3">

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
                <div
                  onClick={toggleProfile}
                  className="relative m-1 cursor-pointer group"
                >
                  {/* Profile Picture with Hover Effect */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 group-hover:ring-4 group-hover:ring-indigo-100 group-hover:scale-110">
                    {profile.profile ? (
                      <img
                        src={profile.profile}
                        alt="Profile"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                        {profile.fname?.charAt(0)}{profile.lname?.charAt(0)}
                      </div>
                    )}
                  </div>

                  
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>



                </div>
                {isOpen && (
                  <Profile toggleDownProfile={toggleDownProfile} />
                )}





              </div>
            </div>
          </div>
        </div>
      </nav >

      <aside
        id="logo-sidebar"
        className="text-sm fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-gray-50 border-r border-gray-200"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/* Dashboard */}
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg group ${isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>

            {/* Task Box - Collapsible */}
            <li>
              <button
                onClick={() => setOpenTaskBox(!openTaskBox)}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100 group"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <span className="ml-3">Task Box</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${openTaskBox ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openTaskBox && (
                <ul className="py-1 space-y-1 ml-11">
                  <li>
                    <NavLink
                      to="taskboard"
                      className={({ isActive }) =>
                        `flex items-center p-2 pl-4 rounded-lg text-sm ${isActive
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-100'
                        }`
                      }
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Task
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Class Activity - Collapsible */}
            <li>
              <button
                onClick={() => setOpenClassActivity(!openClassActivity)}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100 group"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  <span className="ml-3">Class Activity</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${openClassActivity ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openClassActivity && (
                <ul className="py-1 space-y-1 ml-11">
                  <li>
                    <NavLink
                      to="quiz"
                      className={({ isActive }) =>
                        `flex items-center p-2 pl-4 rounded-lg text-sm ${isActive
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-100'
                        }`
                      }
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Quiz
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Session Recordings - Non-collapsible */}
            <li>
              <NavLink
                to="recording"
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg group ${isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <FiberDvrIcon className="w-5 h-5" />
                <span className="ml-3">Session Recordings</span>
              </NavLink>
            </li>

            {/* Sign Out - Bottom aligned */}
            <li className="mt-auto pt-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                <span className="ml-3">Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div style={{ height: 'auto', backgroundColor: '#f5f5f5' }} className="sm:ml-64">
        <div className="p-4 mt-auto">
          <div style={{ backgroundColor: '#ffffff', height: '100vh', borderRadius: '10px' }} className="grid grid-cols- gap-4 mb-4">
            <Outlet />
          </div>
        </div>
      </div>


    </>

  )

}

export default Dashboardpanel