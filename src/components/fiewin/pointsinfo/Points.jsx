import React from "react";
import Task from "../../../images/CheckV1.png";
import Check from "../../../images/TaskV1.png";
import { useNavigate } from "react-router-dom";
import "./Points.css";
const Points = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="centerpointsinfo1">
        <div  className="cen-div-info">
          <div className="centerpointsinfo">
            <div>
              <p className="text1">Points</p>
              <h2 className="text2">
                73.430
                <span className="subtext">
                  <sub>rupee</sub>
                </span>
              </h2>
              <p className="text1">ID:5512279</p>
            </div>
            <div className="posbtn">
              <button
                onClick={() => navigate("/recharge")}
                className="rechargebtn"
              >
                Recharge
              </button>
              <button
                onClick={() => navigate("/withdraw")}
                className="withdrawbtn"
              >
                Withdraw
              </button>
            </div>
          </div>
          <div className="centerpointsinfo">
            <div onClick={() => navigate("/task")} className="checkcenter">
              <img className="imgsizes" src={Task} alt="task" />{" "}
              <p className="textim">Task reward</p>
            </div>
            <div onClick={() => navigate("/check")} className="checkcenter">
              <img className="imgsizes1" src={Check} alt="check" />{" "}
              <p className="textim1">Check in</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Points;
