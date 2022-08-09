import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import learn from "../../../../images/learnToRecharge.png";
import "./LearnRecharge.css";
import LearnTap from "./LearnTap";
const LearnRecharge = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="allcen">
        <div className="task-main">
          <div className="modify-top10">
            <h3>Learn to recharge</h3>
            <div>
              <div className="midify-arrow">
                <ArrowBackIosIcon
                  onClick={() => navigate("/task")}
                  style={{ marginLeft: "15px" }}
                />
              </div>
            </div>
          </div>
           <div className="scroll">
            <img className="learn-to-img" src={learn} alt="img" />

             <div className="tap-div-center">
                <LearnTap/>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnRecharge;
