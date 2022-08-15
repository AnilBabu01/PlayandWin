import React ,{useState}from "react";
import Tapthird from "./Tapthird";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { useNavigate } from "react-router-dom";
import close from "../../../../images/cLoseBtn.png";
import Choicerecharge from "../2x2/Choicerecharge";
import start from '../../../../images/boomStart.png';
import './Gamethirth.css';

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
    padding: theme.spacing(2, 4, 3),
    "&:focus": {
      outline: "none",
    },
    width: "300px",
    position: "relative",
    borderRadius: "15px",
  },
}));
const Gamethirth = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [startgame, setstartgame] = useState(true);
  const [amount, setamount] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

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
            <div className="game-screen-div3">
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <div className={startgame ? "game-div-click3" : "anilmation3"}></div>
              <img 
                 onClick={handlestart}
                 className={
                   startgame ? "img-click-start3" : "img-click-start-hide"
                 }
              
              src={start} alt="img"/>
            </div>
            <div className="banner-div">
              <h2>Check the boxes that you think have</h2>
              <h2> no mines to get a bonus</h2>
            </div>
            <div>
              <Tapthird/>
             
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Gamethirth;
