import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// Import AuthProvider
import Loginform from './Components/Login/Loginform';
import Admindashboard from './Components/Admin panel/Admindashboard';
import Dashboardpanel from './Components/Dashboards/Dashboardpanel';
import Student_activity from './Components/Dashboards/Components/Student_activity';
import Taskboard from './Components/Dashboards/Components/Taskboard';
import Dashboard_content from './Components/Dashboards/Components/Dashboard_content';
import Recordings from './Components/Dashboards/Components/Recordings';
import Statics from './Components/Admin panel/Component/Routing/Statics';
import Registration from './Components/Admin panel/Component/Routing/Registration';

import EmailRegister from './Components/Admin panel/Component/Routing/EmailRegister';
import Task from './Components/Admin panel/Component/Routing/Task';




function App() {

  return (

    <div className='App-section'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginform />}></Route>
          <Route path='/adminpanel' element={<Admindashboard />}>
            <Route index element={<Statics />} />
            <Route path="dashboard" element={<Statics />} />
            <Route path="taskupload" element={<Task/>} />
            <Route path="registration" element={<Registration />} />
            <Route path="emails" element={<EmailRegister />} />
          </Route>
          <Route path='/dashboard' element={<Dashboardpanel />}>
            <Route index element={<Dashboard_content />} />
            <Route path="student" element={<Student_activity />} />
            <Route path="taskboard" element={<Taskboard />} />
            <Route path="recording" element={<Recordings />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
