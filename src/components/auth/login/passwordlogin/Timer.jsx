import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  
 
 
  let [sec, setsec] = useState("60")
    let inti = parseInt(sec)
  
    setTimeout(()=>{
        setsec(inti-1);
    },1000)
 
  return (
    <div>
      <h1>{sec}S</h1>
    </div>
  );
};

export default Timer;
