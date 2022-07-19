import React from "react";
import "./Quicklogin.css";
import axios from "axios";

const VerifyQuickOtp = ({ number, setsms, setshowalert }) => {
  const getotp = async () => {
    try {
      const response = await axios.post(
        "https://v1.fiewin.luckywin999.in/api/quick-login",
        {
          mobile_no: number,
        }
      );
      if (response.data.status === true) {
        setsms("OTP Send Successfully");
        setshowalert(true);

        setTimeout(() => {
          setshowalert(false);
        }, 2000);
      }
      if (response.data.status === false) {
        setsms("OTP Not Send");
        setshowalert(true);

        setTimeout(() => {
          setshowalert(false);
        }, 2000);
      }
      console.log(number, response.data.msg);
    } catch (error) {
      setsms("Internal server error");
      setshowalert(true);

      setTimeout(() => {
        setshowalert(false);
      }, 2000);
    }
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
};

export default VerifyQuickOtp;
