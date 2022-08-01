import React from 'react'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import Commontask from '../taskreward/Commontask'
import task100 from '../../../images/task100orders.png';
import './Withdraw.css';
const Withdraw = () => {
  const navigate = useNavigate();
  return (
    <>
    
    <div className="allcenter">
        <div className="task-main">
          <div className="task-top">
            <ArrowBackIosIcon onClick={() => navigate("/fiewin")} style={{marginLeft: "15px"}} />
            <h3 className="task-midle">Withdraw</h3>
          </div>
          <div className="scroll">
             
                
                <Commontask img={task100} h={"More than 100 orders"}/>
                
          </div>
        </div>
      </div>
    
    
    
    
    </>
  )
}

export default Withdraw