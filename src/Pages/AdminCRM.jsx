import React, { useState, useEffect } from "react";
import'../darkcolor.css'
import { getAllCustomers } from "../Services/CustomerService";
import AdminEditCustomerPopup from "../components/AdminEditCustomerPopup";

function AdminCRM() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState({})
  const [update, setUpdate] = useState(false)

  // Popup stat Management
  const [isNewCustomerPopupOpen, setIsNewCustomerPopupOpen] = useState()
  const [isEditCustomerPopupOpen, setIsEditCustomerPopupOpen] = useState()

  // Edit customer handlers
  const handleOpenEditCustomerPopup = () => {
    setIsEditCustomerPopupOpen(true);
  }
  const handleCloseEditCustomerPopup = () => {
    setIsEditCustomerPopupOpen(false);
  };

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const customersValue = await getAllCustomers();
        console.log(customersValue);
        setCustomers(customersValue);
      } catch (error) {
        console.error("Error fetching cusomers:", error);
      }
    };

    fetchBills();
  }, [update]);

  const handlUpdate = () => {
    if(update){
      setUpdate(false)
    }else{
      setUpdate(true);
    }
    
  }

  return (
    <div className="flex flex-col w-full !text-black">
      {/* <span className="text-black w-full text-3xl">Customer Management</span> */}
      <div className="flex flex-row justify-end w-full">
        <button className="bg-blue-bg-color text-white w-fit py-2 px-4 rounded-lg">
          New Customer
        </button>
      </div>
      <div
        className="mt-5 flex overflow-y-auto scrollbar-hide"
        style={{ height: "80vh" }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-lite-bg-color py-2 font-normal text-black">
                Firs Name
              </th>
              <th className="border border-lite-bg-color font-normal text-black">
                Last Name
              </th>
              <th className="border border-lite-bg-color font-normal text-black">
                Email
              </th>
              <th className="border border-lite-bg-color font-normal text-black">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    console.log("click");
                    setSelectedCustomer(item);
                    handleOpenEditCustomerPopup();
                  }}
                >
                  <td className="pl-2 py-1.5 border  border-lite-bg-color text-black">
                    {item.first_name}
                  </td>
                  <td className="pl-2 pr-2 border border-lite-bg-color text-black">
                    {item.last_name}
                  </td>
                  <td className="pl-2 pr-2 border border-lite-bg-color text-black">
                    {item.email}
                  </td>
                  <td className="pl-2 pr-2 border border-lite-bg-color text-black">
                    {item.phone}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-2">
                  No bills found
                </td>
              </tr>
            )}
            {isEditCustomerPopupOpen && <AdminEditCustomerPopup onClose={handleCloseEditCustomerPopup} customer={selectedCustomer} update={handlUpdate} />}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCRM