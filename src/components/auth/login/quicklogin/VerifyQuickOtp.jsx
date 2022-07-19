import React from "react";
import "./Quicklogin.css";
import axios from "axios";

const VerifyQuickOtp = ({number}) => {
  
  axios.defaults.xsrfCookieName = 'csrftoken'
  const getotp = async () => {
    const response = await axios.post(
      "https://v1.fiewin.luckywin999.in/api/quick-login",
      {
        mobile_no: number,
      }
    );
    console.log(number, response);
  };
  return (
    <>
      <div>
        <button onClick={getotp} className="otpbtn">
          Get Verifucation Code
        </button>
      </div>
    </>
  );
}

export default VerifyQuickOtp