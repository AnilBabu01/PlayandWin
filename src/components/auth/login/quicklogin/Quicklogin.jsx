import React, {useState} from "react";
import VerifyQuickOtp from "./VerifyQuickOtp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Quicklogin.css";
const Quicklogin = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    number: "",
    otpcode:""
  });
  const {number,otpcode} = credentials;
  const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    const { number,otpcode} = credentials;
        if(number&&otpcode)
        {

          const response = await axios.post(
            "https://v1.fiewin.luckywin999.in/api/quickLoginPro",
            {
              mobile_no: number,
              otp : otpcode
            }
          );
          console.log(number, response);
          setTimeout(() => {
            navigate("/fiewin")
          }, 2000);
         
        }
    console.log("log data ", number,otpcode)
  
  };
  return (
    <>
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
          <div className='otpdiv'>
            <input 
               onChange={onChange}
               value={otpcode}
               name="otpcode"
            className='otpinput' type='text' placeholder='Input verification Code'/>
           
            </div>
          <div>
            <button className="logbtn">
              Login
            </button>
          </div>
        </form>
         <div className="otpbtn-div1">
            <VerifyQuickOtp  number={number} />
            </div>
      </div>
    </>
  );
};

export default Quicklogin;
