
import React, { useState } from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Searchinglogo from './Component/Searchinglogo';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AdminProfileavtar from './Component/Profileavtar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemText from '@mui/material/ListItemText';
import AdminNestedList from './Component/AdminNestedList';
import FiberDvrIcon from '@mui/icons-material/FiberDvr';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AdminNestedliststudent from './Component/AdminNestedliststudent';
import AdminNestedlistregister from './Component/AdminNestedlistregister';
function Admindashboard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/signup', {
        email,
        password,
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }

    //  
  };
  return (
    <div>

      <nav style={{ background: '#ffffff', position: "sticky" }} class="fixed top-0 z-50 w-full border-b ">
        <div style={{ padding: '5px' }} class="px-2  lg:px-5 lg:pl-1">
          <div class="flex items-center justify-between">
            <Searchinglogo />
            <div class="flex items-center">

              <div style={{ marginRight: '10px' }} class="flex items-center ms-3">

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
      <aside style={{ backgroundColor: '#f7f9fa' }} id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <div style={{ backgroundColor: '#f7f9fa' }} class=" h-full px-2 pb-4 overflow-y-auto bg-white mt-0 ">

          <ul style={{ fontSize: '14px' }} class="navlink  font-medium">
            <Link to="/adminpanel/dashboard">
              <ListItemButton> <ListItemIcon>< DashboardIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>

         
             <AdminNestedlistregister/>
            
            <AdminNestedList />
            <AdminNestedliststudent />


            <Link to="#">
              <ListItemButton >
                <ListItemIcon>
                  <FiberDvrIcon />
                </ListItemIcon>
                <ListItemText primary="Recording Uploded" />
              </ListItemButton>
            </Link>

            <ListItemButton >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>

          </ul>
        </div>
      </aside>

      <div style={{ height: 'auto', backgroundColor: '#ededed' }} class="sm:ml-64">
        <div class="p-4 mt-auto ">
          <div style={{ backgroundColor: '#ffffff', height: '100vh', borderRadius: '10px' }} class="grid grid-cols-1 gap-4 mb-4">
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Admindashboard