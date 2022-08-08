import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const AddID = () => {
    const navigate = useNavigate();
  return (
    <>
    
    <div className="allcenter">
        <div className="mickname-main">
          <div className="modify-top10">
            <h3>Add inviterId</h3>
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
              <p>inviterId</p>
            <input type="text" placeholder="Please enter Id"/>
            <p className="orange-p">*add your inviterId</p>
            <div className="upi-div10">
              <button>Add</button>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default AddID