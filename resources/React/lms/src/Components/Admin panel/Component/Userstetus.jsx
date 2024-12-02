import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Badge from '@mui/material/Badge';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import './Component.scss'


function Userstetus() {

  const [studentdata, setStudentdata] = useState([]);
  const [logdata, setLogdata] = useState([]);


  const StyledBadge = styled(Badge)(({ theme }) => ({


    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  const StyledBadged = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: 'red',
      color: 'red',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));


  useEffect(() => {
    fetchUserDetails();
    GetallLoginUsers();
  }, []);


  const fetchUserDetails = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/getdataregister');

      setStudentdata(response.data.userdetails);


    } catch (error) {
      console.error("Error fetching user details:", error);
    }


  };

  const GetallLoginUsers=async()=>{
      try{
        const response = await axios.post('http://127.0.0.1:8000/api/getlogin-details');
        setLogdata(response.data.logindetails);
      }
      catch(error){
        console.error("Error Details:", error);
      }
  }
  



  return (
    <div>

      <div style={{ backgroundColor: '#ffffff' }} className='stetus m-4  p-5 ' id='demo'>

        <p style={{ fontWeight: 'bold', paddingBottom: '7px', fontSize: '18px', color: '#5d5f61' }}><span style={{ padding: '10px' }}><PeopleAltIcon /></span> Online Users</p>
       
        {studentdata.map((user) => (
        <div className='ste'>
       
            <div key={user.id}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src="src/assets/OIP.jpeg" />
              </StyledBadge>
              <span style={{ margin: '25px', color: 'rgb(100, 97, 97)' }}>{user.fname}</span>
            
            </div>
         
        </div>
 ))}

      </div>


    </div>
  )
}

export default Userstetus