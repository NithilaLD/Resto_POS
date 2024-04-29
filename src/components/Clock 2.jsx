import React, { useState, useEffect } from 'react';
function Clock2()
{
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {  clearInterval(timerID); };
  }, []);
  const tick = () => { setDate(new Date()); };
  return (
    <>
      <p className="text-white text-2xl font-semibold">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
      <br></br><p className="text-white text-2xl font-semibold">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
    </>
  );
}
export default Clock2;