import React, { useState } from "react";

function OrderMethodPopup({ orderMethod , onClose }) {
  const [orderMethodValue, setOrderMethodValue] = useState('takeaway');
  const [tableSelectionShow, setTableSelectionShow] = useState(false);
  const [tableSet, setTableSet] = useState([
    "Table 01",
    "Table 02",
    "Table 03",
    "Table 04",
    "Table 05",
    "Table 06",
    "Table 07",
    "Table 08",
    "Table 09",
    "Table 10",
    "Table 11",
    "Table 12",
    "Table 13",
    "Table 14",
    "Table 15",
    "Table 16",
    "Table 17",
    "Table 18",
    "Table 19",
    "Table 20",
  ]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if(value == 'dining'){
      setTableSelectionShow(true);
    }else{
      setTableSelectionShow(false)
      orderMethod(orderMethodValue)
    }
    setOrderMethodValue(()=>{return value})
    console.log(orderMethodValue);

  }
  
  const handleOderMethod = () => {
    console.log(orderMethodValue);
  }
  return (
    <div
      className="z-0 fixed inset-0 flex h-full w-full items-center justify-center bg-white bg-opacity-50"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className="z-10 w-3/6 h-fit bg-secondry-bg-color p-2 rounded-xl"
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
        <div className="w-full flex flex-col h-80 px-3 justify-between">
          <div className="">
            <div className="flex flex-row justify-between">
              <span>Order Method :</span>
              <select
                name="orderMethod"
                id="method"
                className="px-4 py-1 bg-lite-bg-color rounded-lg"
                onChange={handleSelectChange}
              >
                <option value="takeaway">Takeaway</option>
                <option value="dining">Dining</option>
              </select>
            </div>
            {tableSelectionShow && (
              <div className="w-full h-44 flex flex-col overflow-y-auto scrollbar-hide mt-3">
                {tableSet.map((table) => {
                  return (
                    <div className=" active:bg-slate-200 ">
                      {table}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <button
            className="flex w-full flex-row font-medium bg-blue-bg-color justify-center py-3 rounded-lg mt-2"
            onClick={handleOderMethod}
          >
            Add Method
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderMethodPopup;
