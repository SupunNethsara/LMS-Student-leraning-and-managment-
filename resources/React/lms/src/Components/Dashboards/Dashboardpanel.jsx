import React, { useState } from 'react'
import './Dashboard.scss'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink, Outlet, useLocation ,Link } from 'react-router-dom';
import './Dashboard.scss'
import Profileavtar from './Profileavtar';
function Dashboardpanel() {


  return (
    <>


      <nav style={{ background: '#0f6af2', border: "1px solid #0f6af2" ,position:"sticky" }} class="fixed top-0 z-50 w-full border-b ">
        <div style={{padding:'5px'}} class="px-2  lg:px-5 lg:pl-1">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <a  class="flex ml-2 md:mr-24">
                <img src="hq720-removebg-preview.png" class="h-12 mr-15" alt="FlowBite Logo" />
                <span class="self-center text-xl font-semibold sm:text-xl whitespace-nowrap dark:text-white mr-14">VLE BIT</span>
              </a>
            </div>
            <div class="flex items-center">

              <div style={{marginRight:'10px'}} class="flex items-center ms-3">

                <IconButton size="large" aria-label="show 4 new mails" style={{ color: "white" }}>
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>

                <IconButton size="large" aria-label="show 17 new notifications" style={{ color: "white" }}>
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Profileavtar />

              </div>
            </div>
          </div>
        </div>
      </nav >

      <aside style={{backgroundColor:'#f7f9fa'}} id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <div style={{backgroundColor:'#f7f9fa'}} class="h-full px-2 pb-4 overflow-y-auto bg-white mt-0 ">
          <ul style={{ fontSize: '14px' }} class="space-y-6 font-medium">
          <Link to="/dashboard">
          <li>
              <a href="#" class="icon-text">
                <svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            </Link>
         
            <Link  to="taskboard">
            <li>
              <a href="#" class="icon-text">
                <svg class="icon">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Task Management</span>

              </a>
            </li>
            </Link>
            <Link to="student">
            <li>
            <a href="#" class="icon-text">
                <svg class="icon" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            </Link> 
            <Link to="recording">
            <li>
              <a href="#" class="icon-text">
                <svg class="icon" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Seassion Reacordings</span>
              </a>
            </li>
            </Link>
            <li className=' mt-0 '>
              <a href="#" class="icon-text">
                <svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Sign out</span>
              </a>
            </li>

          </ul>
        </div>
      </aside>

      <div style={{height:'auto' ,backgroundColor:'#f0f1f2'}} class="sm:ml-64">
        <div class="p-4 mt-auto">
          <div style={{backgroundColor:'#ffffff',height:'100vh',borderRadius:'10px'}} class="grid grid-cols-3 gap-4 mb-4">
          <Outlet/>
          </div>
        </div>
      </div>


    </>

  )
  
}

export default Dashboardpanel