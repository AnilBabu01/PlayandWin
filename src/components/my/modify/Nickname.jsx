import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const Nickname = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="allcenter">
        <div className="mickname-main">
          <div className="modify-top10">
            <h3>Change Nickname</h3>
            <div>
              <div className="midify-arrow">
                <ArrowBackIosIcon
                  onClick={() => navigate("/modify")}
                  style={{ marginLeft: "15px" }}
                />
              </div>
            </div>
          </div>

          <div className="changenikname">
            <div className="nink-main-content">
              <p>Nickname</p>
            <input type="text" placeholder="Maximum 20 Characters"/>
            <p className="orange-p">*Nicknames can only be changed once a month</p>
            <div className="upi-div10">
              <button>Modify</button>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Nickname;
