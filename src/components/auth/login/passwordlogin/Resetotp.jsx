import React from "react";
import axios from "axios";
const Resetotp = ({ number, setsms, setshowalert }) => {
  axios.defaults.xsrfCookieName = "csrftoken";
  const getotp = async () => {
    const response = await axios.post(
      "https://v1.fiewin.luckywin999.in/api/sendResetForgetOtp",
      {
        mobile_no: number,
      }
    );
    if (response.data.status===true) {
      setsms(response.data.msg);
      setshowalert(true);

      setTimeout(() => {
        setshowalert(false);
      }, 2000);
    }
    if (response.data.status===false) {
      setsms(response.data.msg);
      setshowalert(true);

      setTimeout(() => {
        setshowalert(false);
      }, 2000);
    }
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
};

export default Resetotp;
