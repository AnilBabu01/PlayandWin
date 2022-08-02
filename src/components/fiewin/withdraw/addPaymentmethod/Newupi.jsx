import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
const Newupi = () => {
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
            <h3 className="task-midle3">My UPI</h3>
          </div>
          <div className="pay-div">
            <p>Actual name</p>
            <input type="text" placeholder="Please input name" />
          </div>
          <div className="pay-div">
            <p>UPI address</p>
            <input type="text" placeholder="Please input UPI Account" />
          </div>
          <div className="pay-div">
            <p>Confirm UPT address</p>
            <input type="text" placeholder="Please input Confirm UPT Account" />
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

export default Newupi;
