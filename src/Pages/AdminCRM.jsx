import React from 'react'
import'../color.css'

function AdminCRM() {
  return (
    <div className="flex flex-col w-full !text-black">
      {/* <span className="text-black w-full text-3xl">Customer Management</span> */}
      <div className="flex flex-row justify-end w-full">
        <button className="bg-blue-bg-color w-fit py-2 px-4 rounded-lg">
          New Customer
        </button>
      </div>
      <div className="mt-5">
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
            {/* {bills.length > 0 ? (
              bills.map((item) => (
                <tr key={item.id}>
                  <td className="pl-2 py-1.5 border  border-lite-bg-color text-black">
                    {item.id}
                  </td>
                  <td className="text-right pr-2 border border-lite-bg-color text-black">
                    {item.subtotal}
                  </td>
                  <td className="text-right pr-2 border border-lite-bg-color text-black">
                    {item.tip}
                  </td>
                  <td className="text-right pr-2 border border-lite-bg-color text-black">
                    {item.total}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-2">
                  No bills found
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCRM