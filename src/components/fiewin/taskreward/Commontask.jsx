
import React,{useEffect}from "react";
import { useNavigate } from "react-router-dom";
import "./Taks.css";
var hide = false;
const Commontask = ({ img, h, rupee, p, setchangebtn, changebtn, btntext,goto}) => {
  useEffect(() => {
    setchangebtn(localStorage.getItem(btntext));
  }, [])
  const navigate = useNavigate();
  console.log(hide)
  return (
    <>
      <div className="mobile-main-task">
        <div className="img-div-task">
          <img src={img} alt="img" />
          <div className="recharge-div-task">
            <div className="recharge-div-task1">
              <h2>{h}</h2>
              <p>{p}</p>
            </div>
            <div className="red-rask-div-h">
              <h2 className="red-taks">+₹{rupee}</h2>
            </div>
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
         
          {changebtn?<>
            <button onClick={() => navigate(goto)} className="change-btn-style">{btntext}</button>
          </>:''}
          {!changebtn?<>
            <button
                className="unchange-btn-stylev"
                onClick={() => {
                  setchangebtn(true);
                  localStorage.setItem(btntext, changebtn);
                
                }}
              >
                Start Task
              </button>
          </>:''}
         
        </div>
      </div>
      <div className="bottom-div"></div>
    </>
  );
};

export default Commontask;
