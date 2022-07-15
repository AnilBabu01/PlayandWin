import React, { useState } from "react";
import fastimg from "../../../images/fastImg.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import question from "../../../images/question.png";
import FastParity from "../fast/fastparity/FastParity";
import "./FastParityTap.css";
import Parity from "../fast/parity/Parity";
const FastParityTap = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
        <div  className="mobilewidth" >
        <div className="container1">
        <div className="bloc-tabs1">
          <div className="center-arrow2">
            <Link to="/fiewin">
              <ArrowBackIosIcon style={{ cursor: "pointer" }} />
            </Link>
          </div>
          <button
            className={toggleState === 1 ? "tabs2 " : "tabs1"}
            onClick={() => toggleTab(1)}
          >
            <img className="fasti" src={fastimg} alt="fast" />
            Fast-Parity
          </button>
          <button
            className={toggleState === 2 ? "tabs2 " : "tabs1"}
            onClick={() => toggleTab(2)}
          >
            Parity
          </button>
          <div className="rule-left1">
            <img src={question} alt="question" /> <span className="ruleleft"> Rule</span> 
          </div>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <FastParity/>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Parity/>
          </div>
        </div>
      </div>
        </div>
     
    </>
  );
};

export default FastParityTap;
