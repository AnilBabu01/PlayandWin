import React from "react";
import Tapone from "./everyoneorder/Tapone";
import start from '../../../../images/boomStart.png';
import "./Gameone.css";
const Gameone = () => {
  return (
    <>
      <div className="alllcen-in-game">
        <div className="game-scrollbar">
        <div className="main-game-mine">
          <div className="main-game-mine-content">
            <div className="game-screen-div">
              <div className="game-div-click"></div>
              <div className="game-div-click"></div>
              <div className="game-div-click"></div>
              <div className="game-div-click"></div>
              <img className="img-click-start" src={start} alt="img"/>
            </div>
            <div className="banner-div">
              <h2>Check the boxes that you think have</h2>
              <h2> no mines to get a bonus</h2>
            </div>
            <div>
              <Tapone />
              
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Gameone;
