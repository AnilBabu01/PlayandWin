import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import "./Order.css";
import OrderTap from "./OrderTap";
const Order = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ordermain-div">
        <div className="ordermain-div-content">
          <div className="title-main-div">
            <div className="title-div-arrow">
              {" "}
              <ArrowBackIosIcon
                onClick={() => navigate("/my")}
                style={{ marginLeft: "15px" }}
              />
            </div>
            <div className="title-div">Order</div>
          </div>
          
          <div>
           
              <OrderTap/>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
