import React from "react";
import Typography from "@material-ui/core/Typography";
const Redrecord = () => {
  return (
    <>
      <div className="record-main-no">
        <Typography style={{ fontSize: "10px",marginLeft: "10px" }} justifyContent="center">
          1:55
        </Typography>
        <div
       
          style={{
            background: "red",
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

export default Redrecord;
