import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import './LearnTap.css'
const LearnTap = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <>
    
    <div  className="mobilewidth" >
        <div className="container1">
        <div className="bloc-tabs202">
          
          <button
            className={toggleState === 1 ? "tabs25 " : "tabs24"}
            onClick={() => toggleTab(1)}
          >
           
            UPI PAY
          </button>
          <button
            className={toggleState === 2 ? "tabs25 " : "tabs24"}
            onClick={() => toggleTab(2)}
          >
            QR code
          </button>
        
          
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
          dfdfd
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
         cxcvx
          </div>
        
        </div>
      </div>
        </div>
    
    
    </>
  )
}

export default LearnTap