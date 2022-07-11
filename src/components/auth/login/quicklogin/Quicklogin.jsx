import React from "react";
import './Quicklogin.css'
import Verifyotp from "./Verifyotp";
const Quicklogin = () => {
  return (
    <>
      <div>
        <form>
          <div className="numberdiv">
             <p className="num">+91</p>
            <input className="inputlog" type="text" placeholder="Input Mobile Phone Number" />
          </div>
            <Verifyotp/>
          <div>
            <button className="logbtn">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Quicklogin;
