
import React, { useState, useEffect } from "react";
import { allBills } from "../Services/BillService";

function AdminBilll() {
  const [bills, setBills] = useState([]);
  useEffect(() => {
    const fetchBills = async () => {
      try {
        const billValue = await allBills();
        console.log(billValue);
        setBills(billValue);
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    };

    fetchBills();
  }, []);

  return (
    <div className="text-black">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-lite-bg-color py-2 font-normal text-black">
              ID
            </th>
            <th className="border border-lite-bg-color font-normal text-black">
              Subtotal
            </th>
            <th className="border border-lite-bg-color font-normal text-black">
              Offers
            </th>
            <th className="border border-lite-bg-color font-normal text-black">
              Tip
            </th>
            <th className="border border-lite-bg-color font-normal text-black">
              Total
            </th>
            <th className="border border-lite-bg-color font-normal text-black w-96">
              Billed Date & Time
            </th>
          </tr>
        </thead>
        <tbody>
          {bills.length > 0 ? (
            bills.map((item) => (
              <tr key={item.id}>
                <td className="pl-2 py-1.5 border  border-lite-bg-color text-black">
                  {item.id}
                </td>
                <td className="text-right pr-2 border border-lite-bg-color text-black">
                  {item.subtotal}.00
                </td>
                <td className="text-right pr-2 border border-lite-bg-color text-black">
                  {item.offers}.00
                </td>
                <td className="text-right pr-2 border border-lite-bg-color text-black">
                  {item.tip}.00
                </td>
                <td className="text-right pr-2 border border-lite-bg-color text-black">
                  {item.total}.00
                </td>
                <td className="text-right pr-2 border border-lite-bg-color text-black">
                  {item.created_at}
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
        </tbody>
      </table>
    </div>
  );
}

export default AdminBilll;
