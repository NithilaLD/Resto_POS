import './App.css'
import ClockIn from './Pages/ClockIn';
import Login from './Pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/clockin" element={<ClockIn/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
