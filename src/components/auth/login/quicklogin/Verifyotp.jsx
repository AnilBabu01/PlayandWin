import React from "react";
import "./Quicklogin.css";
import axios from "axios";
const Verifyotp = ({ number, setsms, setshowalert }) => {
  axios.defaults.xsrfCookieName = "csrftoken";
  const getotp = async () => {
    try {
      if (number) {
        const response = await axios.post(
          "https://v1.fiewin.luckywin999.in/api/register",
          {
            mobile_no: number,
          }
        );

        if (response.data.status === false) {
          setsms("Mobile No Already Exist");
          setshowalert(true);

          setTimeout(() => {
            setshowalert(false);
          }, 2000);
        }
        console.log(number, response);
      }
    } catch (error) {
      setsms("Internal server");
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

export default Verifyotp;
