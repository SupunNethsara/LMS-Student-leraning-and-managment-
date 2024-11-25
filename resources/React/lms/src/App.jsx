import { useState } from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Loginform from './Components/Login/Loginform'
import Admindashboard from './Components/Admin panel/Admindashboard';
import Dashboardpanel from './Components/Dashboards/Dashboardpanel';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='App-section'>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Loginform />}></Route>
  <Route path='/adminpanel' element={<Admindashboard />}></Route>
  <Route path='/dashboard' element={<Dashboardpanel />}></Route>
  </Routes>
  </BrowserRouter>

  </div>
    </>
  )
}

export default App
