import React, { useState } from "react";
import "./OrderTap.css";
const OrderTap = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="container">
        <div className="main-scroller-div">
            
          <div className="bloc-tabs10">
            <div className="under-line10">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Quick Login
              </button>
              <div
                className={
                  toggleState === 1 ? "under-line-div" : "under-line-div1"
                }
              ></div>
            </div>

            <div className="under-line10">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Quick Login
              </button>
              <div
                className={
                  toggleState === 1 ? "under-line-div" : "under-line-div1"
                }
              ></div>
            </div>
            <div className="under-line10">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Quick Login
              </button>
              <div
                className={
                  toggleState === 1 ? "under-line-div" : "under-line-div1"
                }
              ></div>
            </div>
            <div className="under-line10">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Quick Login
              </button>
              <div
                className={
                  toggleState === 1 ? "under-line-div" : "under-line-div1"
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
            shxjashcjscz
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            xgzhcghzxcz
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTap;
