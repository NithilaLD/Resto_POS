import React, { useState, useEffect } from 'react';
function Clock1()
{
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {  clearInterval(timerID); };
  }, []);
  const tick = () => { setDate(new Date()); };
  return (<p className="text-xs text-white font-sans font-bold">&ensp;{date.toLocaleTimeString()+" "+date.toLocaleDateString()}</p>);
}
export default Clock1;