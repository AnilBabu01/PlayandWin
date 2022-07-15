import React from "react";
import fastTypeBg from "../../../../images/fastTypeBg.png";
import zero from "../../../../images/fastNum0.png";
import one from "../../../../images/fastNum1.png";
import two from "../../../../images/fastNum2.png";
import three from "../../../../images/fastNum3.png";
import four from "../../../../images/fastNum4.png";
import five from "../../../../images/fastNum5.png";
import six from "../../../../images/fastNum6.png";
import seven from "../../../../images/fastNum7.png";
import eight from "../../../../images/fastNum8.png";
import nine from "../../../../images/fastNum9.png";
import "./FastParity.css";
import RecordTap from "./record/RecordTap";
import OrderTap from "./order/OrderTap";

const FastParity = () => {
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
              <div className="join">
                <img src={fastTypeBg} alt="img" width={"40px"} />
                <span className="mo">Join Green</span>
              </div>
              <div className="blow">1:2</div>
            </div>
            <div>
              <div className="voilet">
                <img src={fastTypeBg} alt="img" width={"40px"} />
                <span className="mo">Join Violet</span>
              </div>
              <div className="blow">1:4.5</div>
            </div>
            <div>
              <div className="red">
                <img src={fastTypeBg} alt="img" width={"40px"} />
                <span className="mo">Join Red</span>
              </div>
              <div className="blow">1:2</div>
            </div>
          </div>

          <div className="center-nav">
            <div>
              <div>
                <img className="tablenum" src={one} alt="now" />
                <img className="tablenum" src={two} alt="now" />
                <img className="tablenum" src={three} alt="now" />
                <img className="tablenum" src={four} alt="now" />
                <img className="tablenum" src={five} alt="now" />
              </div>
              <div>
                <img className="tablenum" src={six} alt="now" />
                <img className="tablenum" src={seven} alt="now" />
                <img className="tablenum" src={eight} alt="now" />
                <img className="tablenum" src={nine} alt="now" />
                <img className="tablenum" src={zero} alt="now" />
              </div>
              <div className="texttable">1:9</div>
            </div>
          </div>

          <RecordTap />

          <OrderTap />
        </div>
      </div>
    </>
  );
};

export default FastParity;
