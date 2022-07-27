import React from "react";
import "./Taks.css";
const Commontask = ({ img, h}) => {
  return (
    <>
      <div className="mobile-main-task">
        <div className="img-div-task">
          <img src={img} alt="img" />
          <div className="recharge-div-task">
            <div className="recharge-div-task1">
              <h2>{ h}</h2>
              <p>Check the recharge help and answer the questions correctly</p>
            </div>
            <h2 className="red-taks">+₹2</h2>
          </div>
        </div>
        <div className="mettter-top-div">
          <div className="main-meter">
            <div></div>
          </div>
        </div>
        <div className="percent-div">
          <p>0%</p> <p>100%</p>
        </div>
        <div className="task-start-btn">
          <button>Start Task</button>
        </div>
       
      </div>
      <div className="bottom-div"></div>
    </>
  );
};

export default Commontask;
