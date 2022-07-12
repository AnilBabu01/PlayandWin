import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homeimg from "../../images/home.png";
import homeimg1 from "../../images/home1png.png";
import share1 from "../../images/share1.png";
import share from "../../images/share.png";
import mine1 from "../../images/mine1.png";
import mine from "../../images/mine.png";
import rechar from "../../images/recharge.png";
import rechar1 from "../../images/recharge1.png";
import "./BoottomNavbar.css";
const BottomNavBar = (props) => {
  let navigate = useNavigate();

  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
      case "/fiewin":
        navigate("/fiewin");
        break;
      case "invite":
        navigate("/invite");
        break;
      case "recharge":
        navigate("/recharge");
        break;
      case "my":
        navigate("/my");
        break;
      default:
        navigate("/fiewin");
        break;
    }
  }, [activeTabs, navigate]);

  return (
    <>
      <div className="center-bottom-nav">
        <div className="bottom-nav">
          <div className="bn-tab">
            {activeTabs === "fiewin" ? (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={homeimg}
                    alt="home"
                    onClick={() => setActiveTabs("fiewin")}
                  />
                  <p className="activetext">FieWin</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={homeimg1}
                    alt="home1"
                    onClick={() => setActiveTabs("fiewin")}
                  />
                  <p className="notactivetext">FieWin</p>
                </div>
              </>
            )}
          </div>
          <div className="bn-tab">
            {activeTabs === "invite" ? (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={share}
                    alt="share"
                    onClick={() => setActiveTabs("invite")}
                  />
                  <p className="activetext">Invite</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={share1}
                    alt="share1"
                    onClick={() => setActiveTabs("invite")}
                  />
                  <p className="notactivetext">Invite</p>
                </div>
              </>
            )}
          </div>
          <div className="bn-tab">
            {activeTabs === "recharge" ? (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={rechar}
                    alt="rechar"
                    onClick={() => setActiveTabs("recharge")}
                  />
                  <p className="activetext">Recharge</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={rechar1}
                    alt="rechar"
                    onClick={() => setActiveTabs("recharge")}
                  />
                  <p className="notactivetext">Recharge</p>
                </div>
              </>
            )}
          </div>
          <div className="bn-tab">
            {activeTabs === "my" ? (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={mine}
                    alt="mine"
                    onClick={() => setActiveTabs("my")}
                  />
                  <p className="activetext">My</p>
                </div>
              </>
            ) : (
              <>
                <div className="centericon">
                  <img
                    className="imgsize"
                    src={mine1}
                    alt="mine1"
                    onClick={() => setActiveTabs("my")}
                  />
                  <p className="notactivetext">My</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavBar;
