import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./Choicerecharge.css";
const Choicerecharge = () => {
  return (
    <>
      <div>
        <div className="choice-hd">
          <h2>Choice game amount</h2>
        </div>
        <div className="recharge-choice-div-point">
          <div className="recharge-choice-div-point-inner">
            <p>Point</p>
            <input type="text" placeholder="₹29.36" />
          </div>
          <button>Recharge</button>
        </div>
        <div className="flex-div-choice">
          <div className="div-circle">₹20</div>
          <div className="div-circle">₹100</div>
          <div className="div-circle">₹1000</div>
          <div className="div-circle">₹10000</div>
        </div>
        <div>
          <div className="add-div">
            <RemoveIcon />
            20
            <AddIcon />
          </div>
        </div>
        <div className="ok-btns">
          <button>OK</button>
        </div>
      </div>
    </>
  );
};

export default Choicerecharge;
