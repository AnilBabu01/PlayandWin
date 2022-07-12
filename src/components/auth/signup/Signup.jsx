import React, { useState } from "react";
import Verifyotp from "../login/quicklogin/Verifyotp";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const [showpropress, setshowpropress] = useState(false);
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
          <div>
            <form>
              <div className="numberdiv">
                <span className="num1">+91</span>

                <input
                  className="inputlog"
                  type="text"
                  placeholder="Input Mobile Phone Number"
                />
              </div>

              <Verifyotp />
              <div className="numberdiv">
                <span className="num1">
                  <LockIcon />
                </span>
                <input
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
                <button className="logbtn">Login</button>
              </div>
            </form>
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
