import React from 'react'
import Nav from '../components/Nav';
import Menu from './Menu';
import TopBar from '../components/TopBar';
import {Outlet} from 'react-router-dom'





function Dashboard() {
  return (
    <div className="bg-main-bg-color w-full h-screen flex p-3 space-x-3">
      <Nav />
      <div className="flex flex-col w-full">
        <TopBar />
        <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard