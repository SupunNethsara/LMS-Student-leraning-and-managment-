
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
    <div>

      <nav style={{ background: '#ffffff', position: "sticky" }}  className="fixed top-0 z-50 w-full border-b ">
        <div style={{ padding: '5px' }}  className="px-2  lg:px-5 lg:pl-1">
          <div  className="flex items-center justify-between">
            <Searchinglogo />
            <div  className="flex items-center">

              <div style={{ marginRight: '10px' }}  className="flex items-center ms-3">

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
      <aside style={{ backgroundColor: '#f7f9fa' }} id="logo-sidebar"  className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <div style={{ backgroundColor: '#f7f9fa' }}  className=" h-full px-2 pb-4 overflow-y-auto bg-white mt-0 ">

          <ul style={{ fontSize: '14px' }}  className="navlink  font-medium">
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

            <ListItemButton onClick={handleLogout} >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>

          </ul>
        </div>
      </aside>

      <div style={{ height: 'auto', backgroundColor: '#ededed' }}  className="sm:ml-64">
        <div  className="p-4 mt-auto ">
          <div style={{ backgroundColor: '#ffffff', height: '100vh', borderRadius: '10px' }} className="grid grid-cols-1 gap-4 mb-4">
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Admindashboard