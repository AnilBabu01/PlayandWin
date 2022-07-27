import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import Effective from '../../../images/Effective.png';
import learntask from '../../../images/Effective.png';
import RechargeOrder from '../../../images/rechargeOrder.png';
import task100 from '../../../images/task100orders.png';
import task1000 from '../../../images/task1000orders.png';
import task10000 from '../../../images/task10000orders.png';
import "./Taks.css";
import Commontask from "./Commontask";
const Task = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="allcenter">
        <div className="task-main">
          <div className="task-top">
            <ArrowBackIosIcon onClick={() => navigate("/fiewin")} style={{marginLeft: "15px"}} />
            <h2 className="task-midle">Task</h2>
          </div>
          <div className="scroll">
               
                <Commontask img={learntask } h={"Learn to recharge"}/>
                <Commontask img={ RechargeOrder} h={"First recharge"}/>
                <Commontask img={task100} h={"More than 100 orders"}/>
                <Commontask img={task1000} h={"More than 1000 orders"}/>
                <Commontask img={task10000} h={"More than 10000 orders"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
