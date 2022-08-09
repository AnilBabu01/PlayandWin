import React,{useState} from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import learntask from '../../../images/learn.png';
import fisrtinvitation from '../../../images/first.png'
import RechargeOrder from '../../../images/rechargeOrder.png';
import task100 from '../../../images/task100orders.png';
import task1000 from '../../../images/task1000orders.png';
import task10000 from '../../../images/task10000orders.png';
import "./Taks.css";
import Commontask from "./Commontask";
const Task = () => {
  const navigate = useNavigate();
  const [changebtn1, setchangebtn1] = useState(false)
  const [changebtn2, setchangebtn2] = useState(false)
  const [changebtn3, setchangebtn3] = useState(false)
  const [changebtn4, setchangebtn4] = useState(false)
  const [changebtn5, setchangebtn5] = useState(false)
  const [changebtn6, setchangebtn6] = useState(false)
  return (
    <>
      <div className="allcen">
        <div className="task-main">
          <div className="task-top">
            <ArrowBackIosIcon onClick={() => navigate("/fiewin")} style={{marginLeft: "15px"}} />
            <h3 className="task-midle">Task</h3>
          </div>
          <div className="scroll">
               
                <Commontask  goto={"/learnrecharge"} btntext={"Go"} changebtn={changebtn1} setchangebtn={setchangebtn1} img={learntask} h={"Learn to recharge"} rupee={"2"} p={"Check the recharge help and answer the questions correctly"}/>
                <Commontask  btntext={"Go to recharge"} changebtn={changebtn2} setchangebtn={setchangebtn2}  img={ RechargeOrder} h={"First recharge"} rupee={"5"} p={"You  can  receive  it  after completing completing   the first recharge"}/>
                <Commontask  btntext={"Go to invite"} changebtn={changebtn3} setchangebtn={setchangebtn3}  img={fisrtinvitation} h={"First invitation"} rupee={"5"} p={"After inviting users to complete download registration and purchase points, they can receive"}/>
                <Commontask  btntext={"Go order"} changebtn={changebtn4} setchangebtn={setchangebtn4}  img={task100} h={"More than 100 orders"} rupee={"20"} p={"Complete Parity orders and Dice orders, more than 100 times"}/>
                <Commontask  btntext={"Go order"} changebtn={changebtn5} setchangebtn={setchangebtn5}  img={task1000} h={"More than 1000 orders"} rupee={"100"} p={"Complete Parity orders and Dice orders, more than 1000 times"}/>
                <Commontask  btntext={"Go order"} changebtn={changebtn6} setchangebtn={setchangebtn6}  img={task10000} h={"More than 10000 orders"} rupee={"1000"} p={"Complete Parity orders and Dice orders, more than 10000 times"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
