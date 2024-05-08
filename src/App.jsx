import './App.css';
import React,{useState, useEffect} from 'react';
import ClockIn from './Pages/ClockIn';
import Login from './Pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LoginContext} from './context/LoginContext'

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
      <LoginContext.Provider value = {{employeeName,setEmployeeName,employeeId, setEmployeeId}}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/clockin" element={<ClockIn />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </>
  );
}

export default App
