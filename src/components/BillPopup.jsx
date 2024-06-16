import React from 'react'
import { billService } from "../Services/BillService";

function BillPopup({bill,onClose,newBill}) {

  const billSend = () =>{
    billService(bill)
    newBill();
    onClose();
  }
    
  return (
    <div
      className="z-0 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="z-10 w-3/6 h-fit bg-secondry-bg-color p-2 rounded-xl">
        <div className="w-full flex justify-end">
          <i
            className="fi fi-rr-cross p-3 cursor-pointer order-last"
            onClick={() => {
              onClose();
            }}
          ></i>
        </div>
        <div className="w-full h-64 bg-secondry-bg-color overflow-y-auto scrollbar-hide">
          <table className="w-full border-collapse   ">
            <thead>
              <tr>
                <th className="border border-lite-bg-color py-2 font-normal">
                  Item Name
                </th>
                <th className="border border-lite-bg-color font-normal">
                  Unit Price
                </th>
                <th className="border border-lite-bg-color font-normal">Qte</th>
                <th className="border border-lite-bg-color font-normal">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {bill.billItems.map((item) => {
                return (
                  <tr>
                    <td className="pl-2 py-1.5 border border-l-0 border-lite-bg-color">
                      {item.name}
                    </td>
                    <td className="text-right pr-2 border border-lite-bg-color">
                      {item.unitPrice.toFixed(2)}
                    </td>
                    <td className="text-right pr-2 border border-lite-bg-color">
                      {item.unitCount}
                    </td>
                    <td className="text-right pr-2 border border-lite-bg-color">
                      {item.amount.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className=" w-full  flex flex-col justify-between h-fit">
          <div className="">
            <div className="flex flex-col p-3 pt-4">
              <div className="flex flex-row justify-between">
                <span>Sub Total</span>
                <span>{bill.billDescription.subTotal}.00</span>
              </div>
              <div className="flex flex-row justify-between ">
                <span>Offers</span>
                <span className="text-red-500">
                  {bill.billDescription.offers}.00
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Tip</span>
                <span>{bill.billDescription.tip}.00</span>
              </div>
              <div className="h-full"></div>
              <div className="flex flex-row justify-between mt-5">
                <span className="text-2xl">Total</span>
                <span className="text-2xl">
                  {bill.billDescription.total}.00
                </span>
              </div>
            </div>
          </div>
          <button
            className="flex w-full flex-row font-semibold bg-blue-bg-color justify-center py-3 rounded-lg mt-2"
            onClick={() => {
              billService(bill);
            }}
          >
            Create Bill
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillPopup