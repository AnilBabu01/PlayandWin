import React from "react";
import "./CommonOrder.css";
const CommonOrder = () => {
  return (
    <>
      <div className="main-order-div-my">
        <div className="time-period-div">
          <p>Period 22056664458</p>
          <p dir="rtl">07/12 22:39:30</p>
        </div>
        <div className="point-result-div">
          <div>
            <p>Select</p>
            <button className="red-btn-my">RED</button>
          </div>
          <div>
            <p className="padd">Ponit Result</p>
            <div>
              <p className="padd">₹10</p>
            </div>
          </div>
          <div>
            <p className="padd">Amount</p>
            <p className="padd green-p-my">+₹4.92</p>
          </div>
        </div>
        <div className="delivery-div-my">
          <div>
            <p className="padd">Delivery: ₹9.80</p>
            <p className="padd">Free: ₹0.20</p>
          </div>
          <div>
            <button className="border-btn-blue">To Verify</button>
          </div>
          <div>
            <button className="border-btn-blue">Complaint</button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default CommonOrder;
