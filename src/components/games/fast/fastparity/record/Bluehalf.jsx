import React from "react";
import Typography from "@material-ui/core/Typography";

import './Record.css'
const Bluehalf = () => {
  return (
    <>
      <div  className="record-main-no" >
        <Typography style={{fontSize: "10px",marginLeft: "10px" }} justifyContent="center">
          15

        </Typography>
        <div
       
          style={{
            background:
              "linear-gradient(90deg, rgba(184,122,86,1) 0%, rgba(173,89,180,1) 0%, rgba(28,16,236,1) 0%, rgba(12,128,247,1) 50%, rgba(0,212,255,1) 50%)",
            borderRadius: "50%",
            width: "2em",
            height: "2em",
            color: "white",

            textAlign: "center",
          }}
        >
          <p style={{ marginTop: "10px" }}>2</p>
        </div>
      </div>
    </>
  );
};

export default Bluehalf;
