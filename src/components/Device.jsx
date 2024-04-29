import React, { useState, useEffect } from 'react';
function Device()
{
  const [deviceName, setDeviceName] = useState('');
  useEffect(() => {
    const getDeviceName = () => 
    {
      const device = navigator.userAgent;
      setDeviceName(device);
    };
    getDeviceName();
    return () =>{};
  }, []);
  return(<p className="text-xs text-white font-sans font-bold">&ensp;{deviceName}</p>);
}
export default Device;