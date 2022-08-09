import React from "react";
import TapSecond from "./TapSecond";
import start from '../../../../images/boomStart.png';
import './Gamesecond.css'
const Gamesecond = () => {
  return (
    <>
      <div className="alllcen-in-game">
        <div className="game-scrollbar">
        <div className="main-game-mine">
          <div className="main-game-mine-content">
            <div className="game-screen-div2">
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <div className="game-div-click2"></div>
              <img className="img-click-start2" src={start} alt="img"/>
            </div>
            <div className="banner-div">
              <h2>Check the boxes that you think have</h2>
              <h2> no mines to get a bonus</h2>
            </div>
            <div>
              <TapSecond/>
             
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Gamesecond;
