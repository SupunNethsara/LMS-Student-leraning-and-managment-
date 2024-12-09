import * as React from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SchoolIcon from '@mui/icons-material/School';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
export default function AdminNestedliststudent() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, }}
      component="nav"
      aria-labelledby="nested-list-subheader"
 
    >
  
 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Class Activity" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
     <Link to ="activities">
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <TaskAltIcon  />
            </ListItemIcon>
            <ListItemText primary="Quizz" />
          </ListItemButton>
        </List>
      </Collapse>
      </Link>
   
    </List>
  );
}
