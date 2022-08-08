import React from "react";
import Tapone from "./everyoneorder/Tapone";
import "./Gameone.css";
const Gameone = () => {
  return (
    <>
      <div className="alllcen-in-game">
        <div className="main-game-mine">
          <div className="main-game-mine-content">
            <div className="game-screen-div"></div>
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
    </>
  );
};

export default Gameone;
