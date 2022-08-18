import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import "../fastparity/FastParity.css";
import RecordTapParity from "../parity/record/RecordTapParity";
import EveryOneTapParity from "../parity/order/OrderTapParity";
import "./Parity.css";
import Timer1 from "./Timer1";
const Parity = () => {
  const [period, setperiod] = useState("");
  const [startingtime, setstartingtime] = useState("");
  const [currenttime, setcurrenttime] = useState("");
  axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenAuth"
  )}`;

  
  axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
    "tokenAuth"
  )}`;

  const gettime = async () => {
    const response = await axios.get(
      "https://v1.fiewin.luckywin999.in/api/parity/games"
    );

   
   if(response.data)
   {
    setperiod(()=>response.data.period);
    setstartingtime(()=>response.data.startTime);
    setcurrenttime(()=>response.data.currentTime);
   }
    console.log("hello")
};

useEffect(() => {
  if(period==="")
  {
    console.log("hi")
    gettime();
  }
 
},[])
  return (
    <>
      <div className="allcenter">
        <div className="scrollbar-indiv ">
          <div className="cenperiod">
            <div>
              <p className="per">Period</p>
              <p className="pernum">{period}</p>
            </div>
            <div>
              <p className="Cout">Cout Down</p>
              <Timer1 startingtime={startingtime} currenttime={currenttime} onTimeOut={ () => alert('ok') }/>
             
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
