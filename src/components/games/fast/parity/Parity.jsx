import React from "react";
import "../fastparity/FastParity.css";
import RecordTapParity from "../parity/record/RecordTapParity";
import EveryOneTapParity from "../parity/order/OrderTapParity";
import "./Parity.css";
const Parity = () => {
  return (
    <>
      <div className="allcenter">
        <div className="scrollbar-indiv ">
          <div className="cenperiod">
            <div>
              <p className="per">Period</p>
              <p className="pernum">21224646466</p>
            </div>
            <div>
              <p className="Cout">Cout Down</p>
              <p className="countset">
                <span className="coutdown">0</span>
                <span className="coutdown">0</span>:
                <span className="coutdown">0</span>
                <span className="coutdown">1</span>
              </p>
            </div>
          </div>

          <div className="center-nav">
            <div className="">
              <div className="join1">
                <span>Join Green</span>
              </div>
              <div className="blow">1:2</div>
            </div>
            <div>
              <div className="voilet1">
                <span>Join Violet</span>
              </div>
              <div className="blow">1:4.5</div>
            </div>
            <div>
              <div className="red1">
                <span>Join Red</span>
              </div>
              <div className="blow">1:2</div>
            </div>
          </div>

          <div className="center-nav">
            <div>
              <div className="setnum-parity">
                <div className="tablenum1"> 1</div>
                <div className="tablenum1"> 2</div>
                <div className="tablenum1"> 3</div>
                <div className="tablenum1"> 4</div>
                <div className="tablenum1"> 5</div>
              </div>
              <div className="setnum-parity">
                <div className="tablenum1"> 6</div>
                <div className="tablenum1"> 7</div>
                <div className="tablenum1"> 8</div>
                <div className="tablenum1"> 9</div>
                <div className="tablenum1"> 0</div>
              </div>
              <div className="texttable">1:9</div>
            </div>
          </div>
          <RecordTapParity />
          <EveryOneTapParity />
        </div>
      </div>
    </>
  );
};

export default Parity;
