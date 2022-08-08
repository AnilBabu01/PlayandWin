import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Avatar from "@material-ui/core/Avatar";
import { useNavigate } from "react-router-dom";
import "./Modify.css";

const Modify = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="allcenter">
        <div className="task-main">
          <div className="modify-top">
            <h3>Modify Personal Information</h3>
            <div>
              <div className="midify-arrow">
                <ArrowBackIosIcon
                  onClick={() => navigate("/my")}
                  style={{ marginLeft: "15px" }}
                />
              </div>
            </div>
          </div>

          <div className="pay-div1">
            <Avatar
              className="avater-style"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <div onClick={() => navigate("/avataruser")} className="arrow-div-my">
              <p>Change avatar</p>
              <ChevronRightIcon />
            </div>
          </div>
          <div onClick={() => navigate("/update-nickname")}  className="pay-div1">
            <input type="text" placeholder="name" />
            <div className="arrow-div-my">
              <p>Change nickName</p>
              <ChevronRightIcon />
            </div>
          </div>
          <div  onClick={() => navigate("/update-password")}  className="pay-div1">
            <input type="password" placeholder="password" />
            <div className="arrow-div-my">
              <p>Change password</p>
              <ChevronRightIcon />
            </div>
          </div>
          <div onClick={() => navigate("/add-id")}  className="pay-div1">
            <input type="text" placeholder="Inviter ID:null" />
            <div className="arrow-div-my">
              <p>Add</p>
              <ChevronRightIcon />
            </div>
          </div>
           <div className="bottom-div-modify"></div>
        </div>
      </div>
    </>
  );
};

export default Modify;
