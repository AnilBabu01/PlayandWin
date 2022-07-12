import React from "react";
import "./Games.css";
import crashEnter from "../../../images/crashEnter.png";
import fastParityEnter from "../../../images/fastParityEnterV2.png";
import holindexEnter from "../../../images/hiloIndexEnter.png";
import mineSweeperEnterV2 from "../../../images/mineSweeperEnterV2.png";
const Games = () => {
  return (
    <>
      <div className="gamecen">
        <div className="gamediv">
          <img className="gameimg" src={fastParityEnter} alt="fast" />
          <img className="gameimg" src={mineSweeperEnterV2} alt="fast" />
          <img className="gameimg" src={holindexEnter} alt="fast" />
          <img className="gameimg" src={crashEnter} alt="fast" />
        </div>
      </div>
    </>
  );
};

export default Games;
