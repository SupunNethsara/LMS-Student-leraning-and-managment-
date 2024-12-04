import React from 'react'
import Jumbotron from './Jumbotron'
import ResponsiveDateCalendar from '../../Admin panel/Component/ResponsiveDateCalendar'

import Userstetus from '../../Admin panel/Component/Userstetus'

function Dashboard_content() {
  return (
    <div>
      <div className='main flex w-full h-full justify-between'>
        <div className='main-content w-[75%]'>
             <Jumbotron/>

        </div>
        <div style={{backgroundColor:'#edf0f2' ,borderRadius:'20px' }} className='side=content w-[25%] m-3 h-full'>
          <ResponsiveDateCalendar/>
       <Userstetus/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard_content