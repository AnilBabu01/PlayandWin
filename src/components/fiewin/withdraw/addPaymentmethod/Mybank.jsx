import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
const Mybank = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="allcenter">
        <div className="task-main">
          <div className="task-top">
            <ArrowBackIosIcon
              onClick={() => navigate("/payment-method")}
              style={{ marginLeft: "15px" }}
            />
            <h3 className="task-midle4">My Bank Account</h3>
          </div>
          <div className="pay-div">
            <p>Actual name</p>
            <input type="text" placeholder="Please input name" />
          </div>
          <div className="pay-div">
            <p>IFSC code</p>
            <input type="text" placeholder="Please input IFSC" />
          </div>
          <div className="pay-div">
            <p>Account Number</p>
            <input type="text" placeholder="Please input Account Number" />
          </div>
          <div className="upi-div1">
            <button >Save</button>
            <button  className="paytm-btn">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mybank;
