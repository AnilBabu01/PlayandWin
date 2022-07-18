import React from "react";
import "./Quicklogin.css";
const Verifyotp = ({number}) => {
 const getotp=()=>{
  console.log(number)
 }
  return (
    <>
      <div>
       
          <button onClick={getotp} className="otpbtn">Get Verifucation Code</button>
    
      </div>
    </>
  );
};

export default Verifyotp;
