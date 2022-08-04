import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
const PaymentMethods = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="allcenter">
        <div className="task-main">
          <div className="task-top">
            <ArrowBackIosIcon
              onClick={() => navigate("/withdraw")}
              style={{ marginLeft: "15px" }}
            />
            <h3 className="task-midle1">Payment methods</h3>
          </div>
          <div className="upi-div">
            <button  onClick={() => navigate("/new-upi")}>+ New UPI</button>
            <button onClick={() => navigate("/mybank-upi")} >+ New Bank Account</button>
            <button onClick={() => navigate("/paytm")} className="paytm-btn">+ New Paytm wallet Account</button>
         </div>
        </div>

        
      </div>
    </>
  );
};

export default PaymentMethods;
