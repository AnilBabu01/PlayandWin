import React from "react";
import "./Points.css";
import Task from "../../../images/CheckV1.png";
import Check from "../../../images/TaskV1.png";
const Points = () => {
  return (
    <>
      <div className="centerpointsinfo">
        <div>
          <p className="text1">Points</p>
          <h2 className="text2">
            73.430<span className="subtext"><sub>rupee</sub></span>
          </h2>
          <p className="text1">ID:5512279</p>
        </div>
        <div className="posbtn">
          <button className="rechargebtn">Recharge</button>
          <button className="withdrawbtn">Withdraw</button>
        </div>
      </div>
      <div className="centerpointsinfo">
        <div className="checkcenter">
          <img className="imgsizes" src={Task} alt="task" />{" "}
          <p className="textim">Task reward</p>
        </div>
        <div className="checkcenter">
          <img className="imgsizes1" src={Check} alt="check" />{" "}
          <p className="textim1">Check in</p>
        </div>
      </div>
    </>
  );
};

export default Points;
