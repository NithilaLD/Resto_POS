import React, { useState } from "react";

function TipPopup({ tip, onClose }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTip = () => {
    const intValue = parseInt(inputValue, 10);
    if (!isNaN(intValue)) {
      tip(intValue);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div
      className="z-0 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
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
        <div className="flex w-full h-80 flex-col p-2  justify-between">
          <div className="flex flex-row justify-between">
            <span className="text-2xl">Tip</span>
            <input
              className="w-40 bg-lite-bg-color text-2xl p-2 flex text-right rounded-lg"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button
            className="flex w-full flex-row font-medium bg-blue-bg-color justify-center py-3 rounded-lg mt-2"
            onClick={ ()=>{
              handleAddTip();
              onClose();
            }}
          >
            Add Tip
          </button>
        </div>
      </div>
    </div>
  );
}

export default TipPopup;
