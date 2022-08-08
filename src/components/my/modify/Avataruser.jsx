import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import defaultimg from "../../../images/myDefault.png";
const Avataruser = () => {
  const navigate = useNavigate();
  const [image, setimage] = useState("");
  const handlechange = (e) => {
    setimage(e.target.files[0]);
  };

  const onSubmit=(e)=>{
       e.preventDefault();
  }
  return (
    <>
      <div className="allcenter">
        <div className="task-main">
          <div className="modify-top10">
            <h3>Change Avatar</h3>
            <div>
              <div className="midify-arrow">
                <ArrowBackIosIcon
                  onClick={() => navigate("/modify")}
                  style={{ marginLeft: "15px" }}
                />
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit}>
          <div className="avatar-upload">
            <div className="avatar-img-div">
              <img
                className="img-avatar-size"
                src={image ? URL.createObjectURL(image) : defaultimg}
                alt="img"
              />
              <div className="input-overlay">
                <input
                  className="file-input"
                  onChange={handlechange}
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="upi-div11">
              <button>Update Avatar</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Avataruser;
