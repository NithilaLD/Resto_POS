import React from 'react'

function BillItem(props) {
  return (
    <div className="flex flex-row w-full h-fit bg-lite-bg-color p-2 rounded-lg justify-between">
      <div className="flex flex-col">
        <span className="text-lg">{props.itemName}</span>
        <span className="text-sm text-gray-400">
          Unite Price:{props.unitPrice}
        </span>
        <span className="text-sm text-gray-400">Units:{props.units}</span>
      </div>
      <span className="text-lg">{props.amount}</span>
    </div>
  );
}

export default BillItem