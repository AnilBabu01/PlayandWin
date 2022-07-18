import React, { useState } from "react";
import Verifyotp from "../login/quicklogin/Verifyotp";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import "./Signup.css";
import "../login/quicklogin/Quicklogin.css";
const Signup = () => {
  const [showpropress, setshowpropress] = useState(false);
  const [credentials, setCredentials] = useState({
    number: "",
    otpcode: "",
    password: "",
  });
  const { otpcode, number, password } = credentials;
  const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    const { otpcode, number, password} = credentials;

    console.log("red data ", otpcode, number, password)
  
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
              <div className='otpdiv'>
            <input 
              onChange={onChange}
              value={otpcode}
              name="otpcode"
            className='otpinput' type='text' placeholder='Input verification Code'/>
          
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
            <Verifyotp  number={number} />
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
