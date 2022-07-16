import React from "react";
import BottomNavBar from "../boottomnavbar/BoottomNavbar";
import agent from "../../images/agentPlanEnter.png";
import link from "../../images/linkNew1.png";
import privilege from "../../images/Privilege.png";
import ranking from "../../images/rankingIcon.png";
import goright from "../../images/goRight.png";
import "./Invite.css";
const Invite = () => {
  return (
    <>
      <div className="maindivman">
        <div>
          <div className="invite-text">
            <p>Invite</p>
          </div>
          <div className="imgdiv">
            <div className="withdiv">
              <div>
                <p>Agent Amount</p>
                <h2>₹0</h2>
              </div>
              <div>
                <button className="withbtn">Withdraw</button>
              </div>
            </div>
            <div className="linkdiv">
              <img className="linkimg" src={privilege} alt="link" />
              <img className="linkimg" src={link} alt="link" />
              <img className="linkimg" src={ranking} alt="link" />
            </div>
          </div>
          <div className="agent-img-div">
            <img className="agentimg" src={agent} alt="agent" />
          </div>

          <div className="invitedivv">
            <div className="todaydiv">
              <div>
                <p>Invited today</p>
              </div>
              <div>
                <h2>0</h2>
              </div>
              <div className="totalcen">
                <p>Total 0</p> <img src={goright} alt="goright" />
              </div>
            </div>
            <div className="todaydiv">
              <div>
                <p>Today's Income</p>
              </div>
              <div>
                <h2>₹0</h2>
              </div>
              <div className="totalcen">
                <p>Total ₹0</p> <img src={goright} alt="goright" />
              </div>
            </div>
          </div>
          <div className="invitelinkdiv">
            <div className="incom-details">
              <div>
                <p>Income details</p>
              </div>
              <div>
                <p style={{ color: "gray" }}>More</p>
              </div>
            </div>

            <div className="invite-now-div">
              <p>No Income</p>
              <button className="invitebtn">Invite now</button>
            </div>
          </div>
          <BottomNavBar name="invite" />
        </div>
      </div>
    </>
  );
};

export default Invite;
