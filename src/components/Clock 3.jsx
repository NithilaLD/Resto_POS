import React, { useState, useEffect } from "react";
function Clock3() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  const tick = () => {
    setDate(new Date());
  };
  return (
    <>
      <p className="text-white text-7xl font-semibold">
        {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </p>

      {/*
  <br></br><p className="text-white text-2xl font-semibold">      {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
*/}
    </>
  );
}
export default Clock3;
