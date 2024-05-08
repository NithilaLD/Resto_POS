import React, { useState,useContext } from 'react';
import './Login.css';
import Clock1 from '../components/Clock 1';
import Clock2 from '../components/Clock 2';
import Device from '../components/Device';
import { staffAuth } from '../Services/StaffAuth';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

function Login(){
  const {setEmployeeName} = useContext(LoginContext);
  const {setEmployeeId} = useContext(LoginContext);

  const navigate = useNavigate();
  const [password, setPassword] = useState("")
  const [divBgColor, setDivBgColor] = useState('#070005');
  const [round,setRound]=useState(0);
  const [spanBgColor1, setSpanBgColor1] = useState('#070005');
  const [spanBgColor2, setSpanBgColor2] = useState('#070005');
  const [spanBgColor3, setSpanBgColor3] = useState('#070005');
  const [spanBgColor4, setSpanBgColor4] = useState('#070005');
  const handleButtonClick1 = async(num) => 
  {
    const digit = num.toString();
    await setPassword((pre)=>pre + digit);
    setDivBgColor('#003cff');
    setRound((prev)=>prev+1);
    if(round===0){setSpanBgColor1('white');setSpanBgColor2('#8B7500');setSpanBgColor3('#8B7500');setSpanBgColor4('#8B7500');}
    else if(round===1){setSpanBgColor1('white');setSpanBgColor2('white');setSpanBgColor3('#8B7500');setSpanBgColor4('#8B7500');}
    else if(round===2){setSpanBgColor1('white');setSpanBgColor2('white');setSpanBgColor3('white');setSpanBgColor4('#8B7500');}
    else if(round===3){setSpanBgColor1('white');setSpanBgColor2('white');setSpanBgColor3('white');setSpanBgColor4('white');
    try {
      const data = await staffAuth(password+digit);
      console.log(data);
      if(data){
        setEmployeeId(data.employerId);
        setEmployeeName(data.employerName);
        navigate("/clockin");}
      else{
        console.log("no data");
        handleButtonClick2();
      }
    } catch (err) {
      console.error("error: " + err);
    }
  }

  }
  const handleButtonClick2 = () => 
  {
    setPassword("");
    setDivBgColor('#070005');
    setRound(0);
    setSpanBgColor1('#070005');
    setSpanBgColor2('#070005');
    setSpanBgColor3('#070005');
    setSpanBgColor4('#070005');
    
  };
  return (
    <div className="w-full h-screen flex flex-col" style={{ backgroundColor: divBgColor }}>
      <div className="h-14 w-full -mb-5">
        <Clock1/>
        <Device/>
      </div>
      <div className="flex flex-1">
        <div className="w-1/2 background-img">
          <br></br><Clock2/>
          <br></br><p className="text-white text-2xl font-semibold">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Clock In/Out</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="flex gap-10">
            <span className="h-4 w-4 rounded-full border-2 border-white" style={{ backgroundColor: spanBgColor1 }}></span>
            <span className="h-4 w-4 rounded-full border-2 border-white" style={{ backgroundColor: spanBgColor2 }}></span>
            <span className="h-4 w-4 rounded-full border-2 border-white" style={{ backgroundColor: spanBgColor3 }}></span>
            <span className="h-4 w-4 rounded-full border-2 border-white" style={{ backgroundColor: spanBgColor4 }}></span>
          </div>
          <div className="my-10"></div>
          <div className="grid grid-cols-3 gap-8">
            <button className="text-white text-3xl rounded-full w-20 h-20 flex justify-center items-center active:border-white active:border-2 cursor-pointer" onClick={()=>{handleButtonClick1(1)}}>
              1
            </button>
            <button className="text-white text-3xl rounded-full w-20 h-20 flex justify-center items-center active:border-white active:border-2 cursor-pointer" onClick={()=>{handleButtonClick1(2)}}>
              2
            </button>
            <button className="text-white text-3xl rounded-full w-20 h-20 flex justify-center items-center active:border-white active:border-2 cursor-pointer" onClick={()=>{handleButtonClick1(3)}}>
              3
            </button>
            <button className="text-white text-3xl rounded-full w-20 h-20 flex justify-center items-center active:border-white active:border-2 cursor-pointer" onClick={()=>{handleButtonClick1(4)}}>
              4
            </button>
            <button className="text-white text-3xl rounded-full w-20 h-20 flex justify-center items-center active:border-white active:border-2 cursor-pointer" onClick={()=>{handleButtonClick1(5)}}>
              5
            </button>
            <button className="text-white text-3xl rounded-full w-20 h-20 flex justify-center items-center active:border-white active:border-2 cursor-pointer" onClick={()=>{handleButtonClick1(6)}}>
              6
            </button>
            <button className="text-white text-3xl rounded-full w-20 h-20 flex justify-center items-center active:border-white active:border-2 cursor-pointer" onClick={()=>{handleButtonClick1(7)}}>
              7
            </button>
            <button className="text-white text-3xl rounded-full w-20 h-20 flex justify-center items-center active:border-white active:border-2 cursor-pointer" onClick={()=>{handleButtonClick1(8)}}>
              8
            </button>
            <button className="text-white text-3xl rounded-full w-20 h-20 flex justify-center items-center active:border-white active:border-2 cursor-pointer" onClick={()=>{handleButtonClick1(9)}}>
              9
            </button>
            <button></button>
            <button className="text-white justify-center items-center active:text-yellow-500 hover:text-yellow-100 cursor-pointer" onClick={handleButtonClick2}>
            Cancel Clock In/Out
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;