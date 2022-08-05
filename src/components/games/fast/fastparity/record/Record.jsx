import React from "react";
import Redrecord from "./Redrecord";
import Greenrecod from "./Greenrecod";
import Bluehalf from "./Bluehalf";
import "./Record.css";
const Record = () => {
  return (
    <>
     <div>
        {/*  here is 1 file  ciecles*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "3px" }}></div>

          <Redrecord />

          <div style={{ width: "3px" }}></div>
          <Redrecord />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />

          <div style={{ width: "3px" }}></div>
          <Bluehalf />

          <div style={{ width: "3px" }}></div>
          <Bluehalf />

          <div style={{ width: "3px" }}></div>
          <Bluehalf />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />
        </div>
        {/*  here is 2 file  ciecles*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "3px" }}></div>

          <Redrecord />

          <div style={{ width: "3px" }}></div>
          <Redrecord />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />

          <div style={{ width: "3px" }}></div>
          <Bluehalf />

          <div style={{ width: "3px" }}></div>
          <Bluehalf />

          <div style={{ width: "3px" }}></div>
          <Bluehalf />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />

          <div style={{ width: "3px" }}></div>
          <Greenrecod />
        </div>
      </div>
    </>
  );
};

export default Record;
