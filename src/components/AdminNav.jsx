import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminNav() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-blue-bg-color h-full w-fit rounded-lg flex flex-col justify-between items-start pb-2 ">
        <div className="bg-blue-bg-color h-full w-fit rounded-lg flex flex-col items-start space-y-4 py-3">
          <i
            className={`fi cursor-pointer text-white text-2xl mx-3 ${
              isOpen ? "fi-rr-bars-staggered w-60" : "fi-rr-menu-burger w-fit"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          ></i>
          <Link to="/admin/home">
            <i className="fi fi-rr-house-chimney text-2xl text-white mx-3 "></i>
          </Link>

          <Link to="/admin/access">
            <i className="fi fi-rr-user-trust text-2xl text-white mx-3 "></i>
          </Link>

          <Link to="/admin/crm">
            <i className="fi fi-rr-users-alt text-2xl text-white mx-3 "></i>
          </Link>

          <Link to="/admin/bill">
            <i className="fi fi-rr-receipt text-2xl text-white mx-3 "></i>
          </Link>

          <Link to="/admin/report">
            <i className="fi fi-rr-checklist-task-budget text-2xl text-white mx-3 "></i>
          </Link>
        </div>
        <div>
          <i className="fi fi-rr-sign-out-alt text-2xl text-white mx-3 "></i>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AdminNav;
