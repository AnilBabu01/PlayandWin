import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import hide from "../../../images/hidePwd.png";
import show from "../../../images/showPwd.png";
import pass from '../../../images/passwordIcon.png'
import { useNavigate } from "react-router-dom";

const Changepassword = () => {
  const navigate = useNavigate();
  const [showpropress, setshowpropress] = useState(false);
  const [password, setpassword] = useState("");
  const onchange = (e) => {
    setpassword(e.target.value);
  };
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
              <div>
                    <div className="number-div-update">
                    <h2>+91 <span className="gray-number">7505786956</span></h2>
                    </div>
                  
                <form>
                  <div className="numberdiv10">
                    <span className="num10">
                     <img className="showpass-icon" src={pass} alt="img"/>
                    </span>
                    <input
                      onChange={onchange}
                      value={password}
                      name="password"
                    
                      type={showpropress ? "text" : "password"}
                      placeholder="New Password"
                    />
                    <li
                      className="showpassworddsignup10"
                      onClick={() => setshowpropress(!showpropress)}
                    >
                      {showpropress ? (
                        <img className="showpass-icon"  src={hide} alt="img"/>
                      ) : (
                        <img className="showpass-icon"  src={show} alt="img"/>
                      )}
                    </li>
                  </div>
                  <div className="upi-div10">
                    <button>Change Password</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Changepassword;
