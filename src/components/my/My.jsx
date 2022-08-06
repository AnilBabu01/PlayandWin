import React, { useState } from "react";
import BottomNavBar from "../boottomnavbar/BoottomNavbar";
import Avatar from "@material-ui/core/Avatar";
import order from "../../images/orderIcon.png";
import intro from "../../images/introductionIcon.png";
import mail from "../../images/mailIcon.png";
import share from "../../images/shareIcon.png";
import details from "../../images/detailIcon.png";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";
import "./My.css";
const My = () => {
  const navigate = useNavigate();
  const [sms, setsms] = useState("");
  const [showalert, setshowalert] = useState(false);
  const logout = () => {
    localStorage.removeItem("tokenAuth");
    setshowalert(true);
    setsms("you have login Successfully");
    setTimeout(() => {
      setshowalert(false);
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <div className="alert-div-my">
        <div style={{width:"200px"}}>
        <Alert sms={sms} showalert={showalert} />
        </div>
      
      </div>
      <div className="maindivman">
        <div>
          <div className="my-div">
            <p>My</p>
          </div>
          <div className="modify-div">
            <div className="avtar-div">
              <div>
                <Avatar
                  style={{ width: "80px", height: "80px" }}
                  alt="Remy Sharp"
                />
              </div>
              <div className="id-div">
                <h2>ID:5512279</h2>
                <p>Phone:7454808301</p>
                <p>NickName: </p>
              </div>
            </div>
            <div className="modify-divv">
              <p>Modify</p>
              <ArrowForwardIosIcon/>
            </div>
          </div>


          <div className="order-main-div">
            <div onClick={()=>  navigate("/order")} className="option-man">
              <div className="option-icon-div">
                <img src={order} alt="order" /> <p>Order Record</p>
              </div>
              <div className="arrowcenter-div">
                <ArrowForwardIosIcon/>
               
              </div>
            </div>
            
            <div className="option-man">
              <div className="option-icon-div">
                <img src={details} alt="order" /> <p>Financial Details</p>
              </div>

              <div className="arrowcenter-div">
              <ArrowForwardIosIcon/>
              </div>
            </div>
          </div>
          
          <div className="order-main-di">
            <div className="option-man">
              <div className="option-icon-div">
                <img src={intro} alt="order" /> <p>About Us</p>
              </div>
              <div className="arrowcenter-div">
              <ArrowForwardIosIcon/>
              </div>
            </div>
            <div className="option-man">
              <div className="option-icon-div">
                <img src={mail} alt="order" /> <p>Support</p>
              </div>
              <div className="arrowcenter-div">
              <ArrowForwardIosIcon/>
              </div>
            </div>
            <div className="option-man">
              <div className="option-icon-div">
                <img src={share} alt="order" /> <p>Follows</p>
              </div>
              <div className="arrowcenter-div">
              <ArrowForwardIosIcon/>
              </div>
            </div>
          </div>

          <div onClick={logout} className="logout-div">
            <p>Sing out</p>
          </div>
          <BottomNavBar name="my" />
        </div>
      </div>
    </>
  );
};

export default My;
