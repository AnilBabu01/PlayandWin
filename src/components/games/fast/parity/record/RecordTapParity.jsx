import React, { useState } from "react";
import Record from "./RecordParity";
import "./RecordTap.css";
const RecordTap = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="container1">
        <div className="bloc-tabs2">
          <button
            disabled='true'
            className={toggleState === 1 ? "tabs3 " : "tabs4"}
            onClick={() => toggleTab(1)}
          >
            Continuous
          </button>
          <button
            className={toggleState === 2 ? "tabs3 " : "tabs4"}
            onClick={() => toggleTab(2)}
          >
            Record
          </button>
          <button
           disabled='true'
            className={toggleState === 3 ? "tabs3 " : "tabs4"}
            onClick={() => toggleTab(3)}
          >
            Probability
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            ajsdhjkasdhjasda
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Record/>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordTap;
