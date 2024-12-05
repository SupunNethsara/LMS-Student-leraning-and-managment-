import React from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
function AdminNestedlistregister() {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <div>
            <List
                sx={{ width: '100%' }}
                component="nav"
                aria-labelledby="nested-list-subheader"

            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Student Details" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Link to="registration">
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    < TaskAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="Register Student" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Link>
                <Link to="AddPayment">
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                 <AttachMoneyIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Add Payment" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Link>
               

            </List>
        </div>
    )
}

export default AdminNestedlistregister