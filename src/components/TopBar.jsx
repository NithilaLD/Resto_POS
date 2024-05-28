import React from 'react'
import { useState, useEffect } from "react";
//import { LoginContext } from "../context/LoginContext";

function TopBar() {
    //const { employeeName } = useContext(LoginContext);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); // Update time every second

      return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    const formatTime = (date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0"); // Zero-pad minutes

      const amPm = hours >= 12 ? "PM" : "AM";
      const adjustedHours = hours % 12 || 12; // Adjust for 12-hour format

      return `${adjustedHours}:${minutes} ${amPm}`;
    };
  return (
    <div className="text-white w-full flex flex-row  items-center justify-between bg-secondry-bg-color rounded-xl">
      <div></div>
      <div className="flex flex-row items-center">
        <span className="text-lg px-3 font-normal">Shahan Weerakoon</span>
        <div className="p-1.5 bg-lite-bg-color m-2 rounded-lg">
          <span className="text-lg px-3 font-normal tracking-wide">
            {formatTime(currentTime)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar