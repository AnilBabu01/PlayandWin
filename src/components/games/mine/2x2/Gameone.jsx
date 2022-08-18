import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { useNavigate } from "react-router-dom";
import close from "../../../../images/cLoseBtn.png";
import Tapone from "./everyoneorder/Tapone";
import start from "../../../../images/boomStart.png";
import "./Gameone.css";
import Choicerecharge from "./Choicerecharge";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:focus": {
      outline: "none",
    },
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    border: "none",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: theme.shadows[5],
   
    "&:focus": {
      outline: "none",
    },
   
    position: "relative",
    borderRadius: "15px",
  },
}));
const Gameone = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [startgame, setstartgame] = useState(true);
  const [stopgame, setstopgame] = useState(true)
  const [amount, setamount] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
console.log("stop is ",stopgame)
  const handleClose = () => {
    setOpen(false);
  };
  const handlestart = () => {
    if (amount) {
      setstartgame(false);
    }
    if (!amount) {
      handleOpen();
    }
  };
  return (
    <>
      <div>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Choicerecharge />
            </div>
          </Fade>
        </Modal>
      </div>
      <div className="alllcen-in-game">
        <div className="game-scrollbar">
          <div className="main-game-mine">
            <div className="main-game-mine-content">
              <div className="game-screen-div">
                <div  className="game-div-click-main1">
                  <div
                    onClick={()=>setstopgame(false)} 
                    className={startgame || !stopgame? "game-div-click" : "anilmation1"}
                  ></div>
                </div>
                <div className="game-div-click-main1">
                  <div
                  onClick={()=>setstopgame(false)} 
                    className={startgame || !stopgame? "game-div-click" : "anilmation1"}
                  ></div>
                </div>

                <div className="game-div-click-main1">
                  <div
                  onClick={()=>setstopgame(false)} 
                    className={startgame || !stopgame ? "game-div-click" : "anilmation1"}
                  ></div>
                </div>

                <div className="game-div-click-main1">
                  <div
                  onClick={()=>setstopgame(false)} 
                    className={startgame || !stopgame? "game-div-click" : "anilmation1"}
                  ></div>
                </div>

                <img
                  onClick={handlestart}
                  className={
                    
                    startgame &&stopgame ? "img-click-start" : "img-click-start-hide"
                  }
                  src={start}
                  alt="img"
                />
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
