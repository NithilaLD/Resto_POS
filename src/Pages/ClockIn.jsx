import React, { useContext } from "react";
import { useState } from "react";
import { LoginContext } from "../context/LoginContext";
import BlueButton from "../components/Button";
import Clock3 from "../components/Clock 3";
import Clock1 from "../components/Clock 1";

function ClockIn() {
  const { employeeName } = useContext(LoginContext);
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const handleClockIn = () => {
    setIsClockedIn(true);
    setStartTime(new Date());
    console.log("Clock In button clicked at: ", new Date());
  };
  return (
    <>
      {/* <div>ClockIn as : {employeeName}</div> */}
      <div className="bg-black flex flex-col" style={{ height: "100vh" }}>
        <Clock1 />
        <h4 className="text-white ">&nbsp;Server: {employeeName}</h4>
        <div
          className="bg-neutral-900 flex flex-col"
          style={{ height: "100vh" }}
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 5 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />{" "}
            </svg>
          </button>
          <div className="flex items-center justify-center ">
            <h1 className="text-white text-7xl">{employeeName}</h1>
          </div>
          <div className="flex items-center justify-center ">
            <Clock3 />
          </div>

          <br />
          <br />
          <div className="flex items-center justify-center ">
            <p className="text-slate-50">No shifts scheduled for today</p>
          </div>
          <div className="flex items-center justify-center ">
            <p className="text-slate-50">No shifts worked so far today</p>
          </div>

          <div className="flex items-center justify-center text-white">
            <button
              onClick={handleClockIn}
              style={{
                width: "800px",
                margin: "20px 0",
                padding: "10px 20px",
                background: "blue",
                borderRadius: "12px",
              }}
            >
              Clock In
            </button>
          </div>
          {isClockedIn && (
            <>
              <div className="flex items-center justify-center text-white">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "200px",
                  }}
                >
                  <h2>Select job role</h2>
                  <BlueButton label="Server" />
                  <BlueButton label="Bartender" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ClockIn;
