import React from "react";
import crashEnter from "../../../images/crashEnter.png";
import fastParityEnter from "../../../images/fastParityEnterV2.png";
import holindexEnter from "../../../images/hiloIndexEnter.png";
import mineSweeperEnterV2 from "../../../images/mineSweeperEnterV2.png";
import { useNavigate } from "react-router-dom";
import "./Games.css";
const Games = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="gamecen">
        <div className="gamediv">
          <img  onClick={()=>navigate('/games/fast-parity')} className="gameimg" src={fastParityEnter} alt="fast" />
          <img className="gameimg" src={mineSweeperEnterV2} alt="fast" />
          <img className="gameimg" src={holindexEnter} alt="fast" />
          <img className="gameimg" src={crashEnter} alt="fast" />
        </div>
      </div>
    </>
  );
};

export default Games;
