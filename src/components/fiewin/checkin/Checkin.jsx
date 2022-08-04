import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import coin from "../../../images/Coin.png";
import gift from "../../../images/giftlock.png";
import treasure from "../../../images/Treasure_s.png";
import arrow from "../../../images/Arrow.png";
import "./Checkin.css";

const Checkin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-checkin">
        <div className="img-div-checkin">
          <div className="check-top">
            <ArrowBackIosIcon
              onClick={() => navigate("/fiewin")}
              style={{ marginLeft: "15px" }}
            />
            <h3 className="check-midle">Check in</h3>
          </div>

          <div className="main-coin">
            <div className="coin-div">
              <div className="flex-div-icon">
                <p>Day</p>
                <img src={coin} alt="coin" />
                <p className="gray">+1</p>
              </div>
              <div className="flex-div-icon">
                <p>Day</p>
                <img src={coin} alt="coin" />
                <p className="gray">+1</p>
              </div>
              <div className="flex-div-icon">
                <p>Day</p>
                <img src={coin} alt="coin" />
                <p className="gray">+1</p>
              </div>
              <div className="flex-div-icon">
                <p>Day</p>
                <img src={coin} alt="coin" />
                <p className="gray">+1</p>
              </div>
            </div>
            <div className="coin-div">
              <div className="flex-div-icon">
                <p>Day</p>
                <img src={coin} alt="coin" />
                <p className="gray">+1</p>
              </div>
              <div className="flex-div-icon">
                <p>Day</p>
                <img src={coin} alt="coin" />
                <p className="gray">+1</p>
              </div>
              <div className="flex-div-icon">
                <p>Day</p>

                <img src={coin} alt="coin" />
                <p className="gray">+1</p>
              </div>
              <div className="flex-div-icon">
                <div className="arrow-div">
                  <img src={arrow} alt="coin" />
                  <img src={treasure} style={{ width: "50px" }} alt="coin" />
                </div>
              </div>
            </div>
            <button className="checkin-btn">CheckIn</button>
          </div>
          <div className="key-div">
            <div className="text-div">
              <p>
                Check in for 7 consecutive days to get the key, use the{" "}
                <img
                  src={
                    "https://res.cloudinary.com/fiewin/image/upload/images/Key_s.png"
                  }
                  alt="img"
                />{" "}
                <br></br>
                key treasure box, and receive mysterious prizes!
              </p>
            </div>
          </div>

          <div className="gift-div">
            <img src={gift} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkin;
