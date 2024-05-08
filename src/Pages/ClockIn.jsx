import React,{useContext} from 'react'
import { LoginContext } from '../context/LoginContext'


function ClockIn() {
  const { employeeName } = useContext(LoginContext);
  return (
    <div>ClockIn as : {employeeName}</div>
  )
}

export default ClockIn