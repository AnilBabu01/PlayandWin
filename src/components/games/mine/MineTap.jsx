import React, { useState } from "react";
import fastimg from "../../../images/fastImg.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import question from "../../../images/question.png";
import './MineTap.css'
import Gameone from "./2x2/Gameone";
import Gamesecond from "./4x4/Gamesecond";
import Gamethirth from "./8x8/Gamethirth";
const MineTap = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <>
     <div  className="mobilewidth" >
        <div className="container1">
        <div className="bloc-tabs20">
          <div className="center-arrow20">
            <Link to="/fiewin">
              <ArrowBackIosIcon style={{ cursor: "pointer",color:'gray' }} />
            </Link>
          </div>
          <button
            className={toggleState === 1 ? "tabs21 " : "tabs20"}
            onClick={() => toggleTab(1)}
          >
           
            2 x 2
          </button>
          <button
            className={toggleState === 2 ? "tabs21 " : "tabs20"}
            onClick={() => toggleTab(2)}
          >
            4 x 4
          </button>
          <button
            className={toggleState === 3 ? "tabs21 " : "tabs20"}
            onClick={() => toggleTab(3)}
          >
            8 x 8
          </button>
          <div className="rule-left20">
            <img src={question} alt="question" /> <span className="ruleleft"> Rule</span> 
          </div>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
           <Gameone/>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
           <Gamesecond/>
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
           <Gamethirth/>
          </div>
        </div>
      </div>
        </div>
    
    
    </>
  )
}

export default MineTap