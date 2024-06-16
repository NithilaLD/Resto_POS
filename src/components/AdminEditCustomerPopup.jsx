import React,{useState, useEffect} from 'react'
import '../darkcolor.css'
import { deleteCustomer, updateCustomer } from '../Services/CustomerService';

function AdminEditCustomerPopup({customer,update,onClose}) {

  

  const [firstName, setFirstName] = useState(customer.first_name);
  const [lastName, setLastName] = useState(customer.last_name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);

  const handleCustomerUpdate = () => {
    const value = {
      "firstName":firstName,
      "lastName":lastName,
      "email":email,
      "phone":phone
    };
    console.log(customer.customer_id);
    updateCustomer(customer.customer_id, value);
    update();
    onClose();
  };

  const handleCustomerDelete = () => {
    deleteCustomer(customer.customer_id);
    update();
  }

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
        <div className="p-2">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex w-full justify-between px-3 py-5">
          <button className="bg-red-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Delete
          </button>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             onClick={()=>{
              handleCustomerUpdate();
             }}
            >
              Update
            </button>
            <button className="bg-white text-slate-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminEditCustomerPopup