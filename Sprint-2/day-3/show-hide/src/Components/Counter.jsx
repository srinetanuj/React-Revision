
import React from 'react';
import { useState,useEffect } from 'react';


const Counter = () => {
    const [count,setCount] =useState(10);

    useEffect(()=>{
       const intervalId = setInterval(()=>{
        console.log(new Date())
           setCount((prevCount)=>{
            if(prevCount===1){
                clearInterval(intervalId);
                return 0;
            }else{
              return (prevCount-1)
            }
           })
        },1000)
    },[])

  return (
    <div>
      <h1>CountDown : {count}</h1>
    </div>
  )
}

export default Counter
