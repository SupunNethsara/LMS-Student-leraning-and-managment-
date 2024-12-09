import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// Import AuthProvider
import Loginform from './Components/Login/Loginform';
import Admindashboard from './Components/Admin panel/Admindashboard';
import Dashboardpanel from './Components/Dashboards/Dashboardpanel';

import Taskboard from './Components/Dashboards/Components/Taskboard';
import Dashboard_content from './Components/Dashboards/Components/Dashboard_content';
import Recordings from './Components/Dashboards/Components/Recordings';
import Statics from './Components/Admin panel/Component/Routing/Statics';
import Registration from './Components/Admin panel/Component/Routing/Registration';


import Task from './Components/Admin panel/Component/Routing/Task';
import Payment from './Components/Admin panel/Component/Payments/Payment';
import Activities from './Components/Admin panel/Component/Assignments/Activities';
import Quiz from './Components/Admin panel/Component/Assignments/Quiz';
import StudentQuiz from './Components/Dashboards/Components/Quiz/StudentQuiz';




function App() {

  return (

    <div className='App-section'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginform />}></Route>
          <Route path='/adminpanel' element={<Admindashboard />}>
            <Route index element={<Statics />} />
            <Route path="dashboard" element={<Statics />} />
            <Route path="taskupload" element={<Task />} />
            <Route path="registration" element={<Registration />} />
            <Route path="Addpayment" element={<Payment />} />
            <Route path="activities" element={<Activities />} />
          </Route>
          <Route path='/dashboard' element={<Dashboardpanel />}>
            <Route index element={<Dashboard_content />} />
            <Route path="taskboard" element={<Taskboard />} />
            <Route path="recording" element={<Recordings />} />
            <Route path="quiz" element={<StudentQuiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
