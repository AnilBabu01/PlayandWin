import React, { useState, useEffect } from "react";
import VerifyQuickOtp from "./VerifyQuickOtp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../../../Alert/Alert";
import "./Quicklogin.css";
const Quicklogin = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    otpcode: "",
  });
  const [sms, setsms] = useState("");
  const [showalert, setshowalert] = useState(false);
  const token = localStorage.getItem("tokenAuth");
  const { number, otpcode } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (token) {
      navigate("/fiewin");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { number, otpcode } = credentials;
      if (number && otpcode) {
        const response = await axios.post(
          "https://v1.fiewin.luckywin999.in/api/quickLoginPro",
          {
            mobile_no: number,
            otp: otpcode,
          }
        );
        if (response.data.status === true) {
          setsms("you have login Successfully");
          setshowalert(true);

          setTimeout(() => {
            navigate("/fiewin");
            setshowalert(false);
          }, 2000);
        }
        if (response.data.status === false) {
          setsms(response.data.msg);
          setshowalert(true);

          setTimeout(() => {
            setshowalert(false);
          }, 2000);
        }
        localStorage.setItem("tokenAuth", response.data.token);
        console.log(number, response.data.token);
      }
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
      <Alert sms={sms} showalert={showalert} />
      <div className="form-divv">
        <form onSubmit={handleSubmit}>
          <div className="numberdiv">
            <p className="num">+91</p>
            <input
              onChange={onChange}
              value={number}
              name="number"
              className="inputlog"
              type="text"
              placeholder="Input Mobile Phone Number"
            />
          </div>

          <div className="otpdiv">
            <input
              onChange={onChange}
              value={otpcode}
              name="otpcode"
              className="otpinput"
              type="text"
              placeholder="Input verification Code"
            />
          </div>
          <div>
            <button
              disabled={number && otpcode ? false : true}
              className={number && otpcode ? "logbtn1" : "logbtn"}
            >
              Login
            </button>
          </div>
        </form>
        <div className="otpbtn-div1">
          <VerifyQuickOtp
            number={number}
            setsms={setsms}
            setshowalert={setshowalert}
          />
        </div>
      </div>
    </>
  );
};

export default Quicklogin;
