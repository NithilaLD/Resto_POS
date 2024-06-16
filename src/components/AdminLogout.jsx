import React from 'react';
import { useNavigate } from "react-router-dom";

function AdminLogout({ onClose }) {
    const navigate = useNavigate();
  return (
    <div
      className="z-0 fixed inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className="z-10 w-2/6 h-fit bg-white p-2 rounded-xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-full flex justify-end">
          <i
            className="fi fi-rr-cross p-3 cursor-pointer order-last"
            onClick={() => {
              onClose();
            }}
          ></i>
        </div>
        <div className="flex flex-col items-center p-2">
          <h3 className="text-xl">Do you want to logout?</h3>
          <div className="flex flex-row justify-end w-full mt-4">
            <button
              className="text-white flex px-5 flex-row font-medium bg-red-500 justify-center py-3 rounded-lg mt-2 "
              onClick={() => {
                navigate("/");
              }}
            >
              Logout
            </button>
            <button className="text-white flex px-5 ml-2 flex-row font-medium bg-lite-bg-color justify-center py-3 rounded-lg mt-2 "
             onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogout