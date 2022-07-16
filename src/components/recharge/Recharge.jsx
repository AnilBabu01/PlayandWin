import React, { useState } from "react";
import BottomNavBar from "../boottomnavbar/BoottomNavbar";
import security from "../../images/securityIcon.png";
import fast from "../../images/fastIcon.png";
import "./Recharge.css";
const Recharge = () => {
  const [amount, setamount] = useState("");
  return (
    <>
      <div className="maindivman">
        <div>
          <div className="help-div">
            <p>Rcords</p>
            <h2>Recharge</h2>
            <p>Help</p>
          </div>

          <div className="blance-div">
            <p>Blance</p>
            <h2>₹8.730</h2>
          </div>

          <div className="amout-div">
            <h2>Amount</h2>
          </div>
          <div className="input-div">
            <h2>₹</h2>
            <input value={amount} type="text" placeholder="29~50000" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <div className="btn-recharge-div">
              <button onClick={() => setamount("65")}>₹65</button>
              <button onClick={() => setamount("300")}>₹300</button>
              <button onClick={() => setamount("500")}>₹500</button>
            </div>
            <div className="btn-recharge-div">
              <button onClick={() => setamount("3500")}>₹3,500</button>
              <button onClick={() => setamount("10000")}>₹10,000</button>
              <button onClick={() => setamount("50000")}>₹50,000</button>
            </div>
            <div className="recharbtn-div">
              <button className="recharge-btn">Recharge</button>
            </div>
          </div>
          <div className="security-icon-div">
            <img src={security} alt="sucurity" />
            <img src={fast} alt="fast" />
          </div>
          <BottomNavBar name="recharge" />
        </div>
      </div>
    </>
  );
};

export default Recharge;
