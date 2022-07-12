import React from "react";
import BottomNavBar from "../boottomnavbar/BoottomNavbar";
import Wininfo from "./wininfo/Wininfo";
import "./Fiewin.css";
import Points from "./pointsinfo/Points";
import Games from "./games/Games";
const Fiewin = () => {
  return (
    <>
      <div className="maindivman">
        <div>
           <Wininfo/>
           <Points/>
            <Games/>
          <BottomNavBar name="fiewin" />
        </div>
      </div>
    </>
  );
};

export default Fiewin;
