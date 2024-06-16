
import React,{useState, useEffect} from 'react';
import ClockIn from './Pages/ClockIn';
import Login from './Pages/Login'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {LoginContext} from './context/LoginContext'
import Dashboard from './Pages/Dashboard';
import Menu from './Pages/Menu';
import POS from './Pages/POS';
import Home from './Pages/Home';
import AdminDashboard from './Pages/AdminDashboard';
import AdminHome from './Pages/AdminHome';
import AdminUserAccess from './Pages/AdminUserAccess';
import AdminCRM from './Pages/AdminCRM';
import AdminBilll from './Pages/AdminBilll';
import AdminReport from './Pages/AdminReport';

function App() {
  const [employeeName, setEmployeeName] = useState(()=>{
    const getEmployeeName = sessionStorage.getItem("employeeName")
    return getEmployeeName !== null ? JSON.parse(getEmployeeName) : '';
  })
  const [employeeId, setEmployeeId] = useState(()=>{
    const getEmployeeId = sessionStorage.getItem('employeeId');
    return getEmployeeId !== null ? JSON.parse(getEmployeeId) : ''
  })

  useEffect(()=>{
    sessionStorage.setItem("employeeName",JSON.stringify(employeeName));
  },[employeeName]);

  useEffect(()=>{
    sessionStorage.setItem("employeeId",JSON.stringify(employeeId));
  },[employeeId]);
  
  return (
    <>
      <LoginContext.Provider
        value={{ employeeName, setEmployeeName, employeeId, setEmployeeId }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/clockin" element={<ClockIn />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="home" element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="pos" element={<POS />} />
            </Route>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="home" element={<AdminHome/>} />
              <Route path="access" element={<AdminUserAccess/>} />
              <Route path="crm" element={<AdminCRM/>} />
              <Route path="bill" element={<AdminBilll/>} />
              <Route path="report" element={<AdminReport/>} />
            </Route>
          </Routes>
        </Router>
      </LoginContext.Provider>
    </>
  );
}

export default App
