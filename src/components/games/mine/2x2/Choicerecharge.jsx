import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./Choicerecharge.css";
const Choicerecharge = () => {
  const [amount, setamount] = useState("");
  const addd = () => {
    let num = parseInt(amount);
    setamount(num + 10);
  };
  const min = () => {
    let num = parseInt(amount);
    setamount(num - 10);
  };
  return (
    <>
      <div className="main-choice-div-recharge">
        <div className="choice-hd">
          <h2>Chooce game amount</h2>
        </div>
        <div className="recharge-choice-div-point">
          <div className="recharge-choice-div-point-inner">
            <p>Point</p>
            <input type="text" placeholder="₹9.730" />
          </div>
          <button>Recharge</button>
        </div>
        <div className="flex-div-choice">
          <div onClick={() => setamount("20")} className={amount==="20"?"div-circle-black":"div-circle"}>
            ₹20
          </div>
          <div onClick={() => setamount("100")} className={amount==="100"?"div-circle-black":"div-circle"}>
            ₹100
          </div>
          <div onClick={() => setamount("1000")} className={amount==="1000"?"div-circle-black":"div-circle"}>
            ₹1000
          </div>
          <div onClick={() => setamount("10000")} className={amount==="10000"?"div-circle-black":"div-circle"}>
            ₹10000
          </div>
        </div>
        <div>
          <div className="add-div">
            <RemoveIcon onClick={min} />
            {amount}
            <AddIcon onClick={addd} />
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
