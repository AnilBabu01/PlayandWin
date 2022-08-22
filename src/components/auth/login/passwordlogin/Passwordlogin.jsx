import React, { useState } from "react";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "../../../Alert/Alert";
import axios from "axios";
const Passwordlogin = () => {
  let navigate = useNavigate();
  const [showpropress, setshowpropress] = useState(false);
  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
  });
  const [sms, setsms] = useState("");
  const [showalert, setshowalert] = useState(false);
  const { number, password } = credentials;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    try {
      if (number && password) {
        const response = await axios.post(
          "https://v1.fiewin.luckywin999.in/api/login",
          {
            mobile_no: number,
            password: password,
          }
        );
        if (response.data.status === true) {
          setsms("you have login Successfully");
          setshowalert(true);
          
          setTimeout(() => {
            navigate("/fiewin")
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
        localStorage.setItem("tokenAuth",response.data.token);
        console.log("red data ", response.data);

        
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
      <div>
        <form onSubmit={handleSubmit}>
          <div className="numberdiv">
            <span className="num1">+91</span>

            <input
              className="inputlog"
              onChange={onChange}
              value={number}
              name="number"
              type="text"
              placeholder="Input Mobile Phone Number"
            />
          </div>
          <Alert sms={sms} showalert={showalert} />
          <div className="numberdiv">
            <span className="num1">
              <LockIcon />
            </span>
            <input
              className="inputlog"
              name="password"
              value={password}
              onChange={onChange}
              type={showpropress ? "text" : "password"}
              placeholder="Password (>/Character)"
            />
            <li
              className="showpassworddsignup"
              onClick={() => setshowpropress(!showpropress)}
            >
              {showpropress ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </li>
          </div>


          <div>
            <button 
             disabled={number &&password ? false : true}
             className={number &&password  ? "logbtn1" : "logbtn"}
            
           >Login</button>
          </div>
        </form>
        <Link className="res-link" to="/reset-password">Reset Password</Link>
      </div>
    </>
  );
};

export default Passwordlogin;
