import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import close from "../../../images/cLoseBtn.png";
import Withdrawalchekcin from "../../../images/withdrawalCheckin.png";
import WithdrawalTask from "../../../images/withdrawalTask.png";
import Withdrawrecord from "./Withdrawrecord";
import AddIcon from "@material-ui/icons/Add";


import "./Withdraw.css";
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
    width: "400px",
    position: "relative",
    borderRadius: "15px",
  },
}));

const Withdraw = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [amout, setamout] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onchenge = (e) => {
    setamout(e.target.value);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    handleOpen();
    console.log("hello ", amout);
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
              <p className="txt-pop">
                The account balance is too few and needs to be
              </p>
              <p className="txt-pop">more than ₹30</p>

              <button onClick={() => navigate("/check")} className="with-btn2">
                <img src={WithdrawalTask} alt="img" /> Check In Reward
              </button>
              <button onClick={() => navigate("/task")} className="with-btn2">
                <img src={Withdrawalchekcin} alt="img" />
                Task Reward
              </button>
              <p className="txt-pop" onClick={handleClose}>
                Later
              </p>
              <img
                onClick={handleClose}
                className="top-close-icon"
                src={close}
                alt="img"
              />
            </div>
          </Fade>
        </Modal>
      </div>

      <div className="allcen">
        <div className="task-main">
          <div className="task-top">
            <ArrowBackIosIcon
              onClick={() => navigate("/fiewin")}
              style={{ marginLeft: "15px" }}
            />
            <h3 className="task-midle2">Withdraw</h3>
          </div>
          <div className="scroll">
            <div className="point-div">
              <p>My Point</p>
              <h2>
                ₹ <spna className="point-h2">1.000</spna>
              </h2>
            </div>
            <div
              onClick={() => navigate("/payment-method")}
              className="add-main"
            >
              <div className="add-pay-method">
                <AddIcon style={{ height: "40px", width: "auto" }} />{" "}
                <p> Add Payment Method</p>
              </div>
            </div>
            <form onSubmit={onsubmit}>
              <div className="add-main">
                <div className="add-pay-method1">
                  <h2>Withdrawal Amount</h2>

                  <input
                    onChange={onchenge}
                    value={amout}
                    name="amout"
                    type="text"
                    placeholder="₹ Please input"
                  />
                </div>
              </div>
              <div className="add-main">
                <div className="add-pay-method2">
                  <div>
                    <p>{`Amount<₹1500,fee ₹30`}</p>
                    <p>{`Amount>=₹1500,fee 2%`}</p>
                  </div>
                  <div>
                    <p>Maximum:₹1</p>
                    <p>Minimum:₹35</p>
                  </div>
                </div>
              </div>
              <div className="add-main1">
                <button
                  disabled={amout ? false : true}
                  className={amout ? "with-btn1" : "with-btn"}
                >
                  Withdraw
                </button>
              </div>
            </form>
            <div className="add-main">
              <div className="add-pay-method1">
                <h2>Withdrawal Records</h2>

               <Withdrawrecord/>
               <Withdrawrecord/>
               <Withdrawrecord/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
