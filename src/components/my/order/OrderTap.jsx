import React, { useState } from "react";
import CrashOrder from "./crashorder/CrashOrder";
import FastfarityOrder from "./fastparityorder/FastfarityOrder";
import HiloOrder from "./hiloorder/HiloOrder";
import MineOrder from "./minesweeperorder/MineOrder";
import "./OrderTap.css";
const OrderTap = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="container10">
        <div className="main-scroller-div">
            
          <div className="bloc-tabs10">
            <div className="under-line10">
              <button
                className={toggleState === 1 ? "tabs10 active-tabs" : "tabs10"}
                onClick={() => toggleTab(1)}
              >
                fast-parity
              </button>
              <div
                className={
                  toggleState === 1 ? "under-line-div10" : "under-line-div11"
                }
              ></div>
            </div>

            <div className="under-line10">
              <button
                className={toggleState === 2 ? "tabs10 active-tabs" : "tabs10"}
                onClick={() => toggleTab(2)}
              >
                MineSweeper
              </button>
              <div
                className={
                  toggleState === 2 ? "under-line-div10" : "under-line-div11"
                }
              ></div>
             
            </div>
            <div className="under-line10">
              <button
                className={toggleState === 3? "tabs10 active-tabs" : "tabs10"}
                onClick={() => toggleTab(3)}
              >
                Crash
              </button>
              <div
                className={
                  toggleState === 3 ? "under-line-div10" : "under-line-div11"
                }
              ></div>
             
            </div>
            <div className="under-line10">
              <button
                className={toggleState === 4 ? "tabs10 active-tabs" : "tabs10"}
                onClick={() => toggleTab(4)}
              >
                Hilo
              </button>
              <div
                className={
                  toggleState === 4 ? "under-line-div10" : "under-line-div11"
                }
              ></div>
             
            </div>



          </div>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
             <FastfarityOrder/>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <MineOrder/>
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <CrashOrder/>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
          <HiloOrder/>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTap;
