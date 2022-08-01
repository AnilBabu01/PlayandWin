import React, { useState } from "react";
import Verifyotp from "../login/quicklogin/Verifyotp";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";
import { Link } from "react-router-dom";
import Alert from "../../Alert/Alert";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import "../login/quicklogin/Quicklogin.css";
const Signup = () => {
  let navigate = useNavigate();
  const [showpropress, setshowpropress] = useState(false);
  const [credentials, setCredentials] = useState({
    number: "",
    otpcode: "",
    password: "",
  });
  const [sms, setsms] = useState("");
  const [showalert, setshowalert] = useState(false);
  const { otpcode, number, password } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { otpcode, number, password } = credentials;
      if ((otpcode, number, password)) {
        const response = await axios.put(
          "https://v1.fiewin.luckywin999.in/api/verifyOtpAndRegister",
          {
            mobile_no: number,
            password: password,
            otp: otpcode,
          }
        );
        if (response.data.status === true) {
          setsms(response.data.msg);
          setshowalert(true);

          setTimeout(() => {
            navigate("/login");
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
        console.log("red data ", response);
      }
    } catch (error) {
      setsms("Internal server errror");
      setshowalert(true);

      setTimeout(() => {
        setshowalert(false);
      }, 2000);
    }
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
              <h2 className="imgtext">Register</h2>
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
                  placeholder="Password (>/Charectors)"
                />
                <li
                  className="showpassworddsignup"
                  onClick={() => setshowpropress(!showpropress)}
                >
                  {showpropress ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </li>
              </div>

              <div>
                <button className="logbtn">Register</button>
              </div>
            </form>
            <div className="otpbtn-div">
              <Verifyotp
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

export default Signup;
