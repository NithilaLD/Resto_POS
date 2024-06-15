import React from 'react'
import Menu from "./Menu";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";
import AdminNav from '../components/AdminNav';

function AdminDashboard() {
  return (
    <div className="bg-whit w-full h-screen flex p-3 space-x-3">
      <AdminNav/>
      <div className="flex flex-col w-full">
        {/* <TopBar /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard