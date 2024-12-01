import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ResponsiveDateCalendar = () => {
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{background:'#ffffff'}} className=' m-3'>
        <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
          
            padding: '5px',
            width: isSmallScreen ? '100%' : 'auto',
            '.MuiPickersCalendarHeader-root': {
              flexDirection: isSmallScreen ? 'column' : 'row',
            },
            '.MuiPickersDay-root': {
              margin: isSmallScreen ? '2px' : '4px',
            },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
    </div>
  );
    
    
};

export default ResponsiveDateCalendar;


