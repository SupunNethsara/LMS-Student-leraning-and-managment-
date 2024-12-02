import React from 'react'
import Anlyzeboxes from './Anlyzeboxes'
import './Adminpanel.scss'
import ResponsiveDateCalendar from '../ResponsiveDateCalendar'
import Charttable from '../charttable'
import Userstetus from '../Userstetus'



function Statics() {
  return (
    <div className='main'>
      <div className='left_sec'>
      <Anlyzeboxes/>
   <Charttable/>
      </div>
      <div className='right_sec'>
    <ResponsiveDateCalendar/>
    <Userstetus/>
      </div>
        
        
    </div>
  )
}

export default  Statics