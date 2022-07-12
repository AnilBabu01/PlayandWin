import React, { useEffect } from "react";
import Verifyotp from "./Verifyotp";
import { useNavigate } from "react-router-dom";
import "./Quicklogin.css";
const Quicklogin = () => {
  let navigate = useNavigate();

  return (
    <>
      <div>
        <form>
          <div className="numberdiv">
            <p className="num">+91</p>
            <input
              className="inputlog"
              type="text"
              placeholder="Input Mobile Phone Number"
            />
          </div>
          <Verifyotp />
          <div>
            <button onClick={() => navigate("/fiewin")} className="logbtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Quicklogin;
