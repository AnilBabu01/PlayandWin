import React from "react";
import Typography from "@material-ui/core/Typography";
const Greenrecod = () => {
  return (
    <>
      <div className="record-main-no">
        <Typography style={{fontSize: "10px",marginLeft: "10px" }} justifyContent="center">
          55
        </Typography>
        <div
      
          style={{
            background: "green",
            borderRadius: "50%",
            width: "2em",
            height: "2em",
            color: "white",

            textAlign: "center",
          }}
        >
          <p style={{ marginTop: "10px" }}>1</p>
        </div>
      </div>
    </>
  );
};

export default Greenrecod;
