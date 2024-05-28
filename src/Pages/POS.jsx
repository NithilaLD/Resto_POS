import React from 'react'
import BillItem from '../components/BillItem';

function POS() {
  return (
    <div className="w-full h-full mt-3 flex flex-row space-x-3">
      <div className="basis-9/12 h-full bg-secondry-bg-color rounded-lg">
        <div className="grid grid-cols-4 grid-rows-8  w-full h-full">
          <div className="bg-red-500 col-start-1 col-end-1 row-start-1 row-end-3 flex text-xl p-4 cursor-pointer">
            Appetizers
          </div>
          <div className="bg-green-500 col-start-2 col-end-3 row-start-1 row-end-3 flex text-xl p-4 cursor-pointer">
            Mains
          </div>
          <div className="bg-purple-500 col-start-3 col-end-4 row-start-1 row-end-2 flex text-xl p-4 cursor-pointer">
            Salads
          </div>
          <div className="bg-yellow-500 col-start-3 col-end-4 row-start-2 row-end-3 flex text-xl p-4 cursor-pointer">
            Sides
          </div>
          <div className="bg-gray-500 col-start-3 col-end-4 row-start-3 row-end-4 flex text-xl p-4 cursor-pointer">
            Desserts
          </div>
          <div className="bg-cyan-500 col-start-4 col-end-4 row-start-1 row-end-4 flex text-xl p-4 cursor-pointer">
            Beverages
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 justify-between basis-3/12 h-full bg-secondry-bg-color rounded-lg">
        {/* bill Items area */}
        <div className="w-full h-full flex flex-col">
          <BillItem itemName="Fresh Lime Juice" unitPrice="200.00" units="2" amount="400.00" />
        </div>

        {/* bill amount area */}
        <div className="flex flex-col bg-lite-bg-color rounded-lg">
          <div className="flex flex-col p-3 pt-4 ">
            <div className="flex flex-row justify-between">
              <span>Sub Total</span>
              <span>00.00</span>
            </div>
            <div className="flex flex-row justify-between ">
              <span>Offers</span>
              <span className="text-red-500">00.00</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Tip</span>
              <span>00.00</span>
            </div>
            <div className="flex flex-row justify-between mt-5">
              <span className="text-2xl">Total</span>
              <span className="text-2xl">00.00</span>
            </div>
          </div>
          <button className="flex flex-row bg-blue-bg-color justify-center py-3 rounded-lg mt-2">
            View Checks
          </button>
        </div>
      </div>
    </div>
  );
}

export default POS