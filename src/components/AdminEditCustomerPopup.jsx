import React from 'react'
import '../color.css'

function AdminEditCustomerPopup({customer,onClose}) {
  return (
    <div
      className="z-0 fixed inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20"
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
            className="fi fi-rr-cross p-3 cursor-pointer order-last text-black"
            onClick={() => {
              onClose();
            }}
          ></i>
        </div>
        <div className="">
            <div><h1 className="">hello</h1></div>
        </div>
      </div>
    </div>
  );
}

export default AdminEditCustomerPopup