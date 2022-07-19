import React, { useState } from "react";
import axios from "axios";
import Resetotp from "./Resetotp";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import Alert from "../../../Alert/Alert";
const Resetpassword = () => {
  const [showpropress, setshowpropress] = useState(false);
  const [showconfirmpassword, setshowconfirmpassword] = useState(false);
  const [credentials, setCredentials] = useState({
    number: "",
    otpcode: "",
    password: "",
    confirmpassword: "",
  });
  const [sms, setsms] = useState("");
  const [showalert, setshowalert] = useState(false);
  const { otpcode, number, password, confirmpassword } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { otpcode, number, password, confirmpassword } = credentials;
    const response = await axios.post(
      "https://v1.fiewin.luckywin999.in/api/VerifyOtpAndChangePassword",
      {
        mobile_no: number,
        otp: otpcode,
        confirmPassword: confirmpassword,
        newPassword: password,
      }
    );
    if (response.data.status === true) {
      setsms("Your Password Chnaged Successfully");
      setshowalert(true);

      setTimeout(() => {
        setshowalert(false);
      }, 2000);
    }
    if (response.data.status === false) {
      setsms("Enter Valid OTP");
      setshowalert(true);

      setTimeout(() => {
        setshowalert(false);
      }, 2000);
    }
    console.log("red data ", response.data);
  };

  return (
    <>
      <div className="main">
        <div className="contentdiv">
          <div className="imgcen">
            <div className="register">
              {/* < img src={login} className='loginimg' alt='login'/>
               */}
              <p className="winP">Fiewin</p>
              <h2 className="imgtext">Reset Password</h2>
            </div>
          </div>
          <div className="form-divv">
            <form onSubmit={handleSubmit}>
              <div className="numberdiv">
                <span className="num1">+91</span>

                <input
                  onChange={onChange}
                  value={number}
                  name="number"
                  className="inputlog"
                  type="text"
                  placeholder="Input Mobile Phone Number"
                />
              </div>
              <Alert sms={sms} showalert={showalert} />
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
              <div className="numberdiv">
                <span className="num1">
                  <LockIcon />
                </span>
                <input
                  onChange={onChange}
                  value={password}
                  name="password"
                  className="inputlog"
                  type={showpropress ? "text" : "password"}
                  placeholder="New Password"
                />
                <li
                  className="showpassworddsignup"
                  onClick={() => setshowpropress(!showpropress)}
                >
                  {showpropress ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </li>
              </div>
              <div className="numberdiv">
                <span className="num1">
                  <LockIcon />
                </span>
                <input
                  onChange={onChange}
                  value={confirmpassword}
                  name="confirmpassword"
                  className="inputlog"
                  type={showconfirmpassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                />
                <li
                  className="showpassworddsignup"
                  onClick={() => setshowconfirmpassword(!showconfirmpassword)}
                >
                  {showconfirmpassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </li>
              </div>

              <div>
                <button className="logbtn">Reset</button>
              </div>
            </form>
            <div className="otpbtn-div2">
              <Resetotp
                number={number}
                setsms={setsms}
                setshowalert={setshowalert}
              />
            </div>
          </div>
          <div className="cengoregister">
            <div>
              <p>
                Registered account?
                <span>
                  <Link to="/">Login</Link>
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="facebook1">
            <p>feedback</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
