import React from 'react'
import { useState,useEffect } from 'react';

const Timer = () => {

    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount((pervCount)=>pervCount+1);
        },1000)

        const cleanUp =()=>{
            clearInterval(intervalId);
        }

        return cleanUp;

    },[])

  return (
    <div>
      <h1>Timer : {count}</h1>
    </div>
  )
}

export default Timer
