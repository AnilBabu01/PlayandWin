import React,{useState} from 'react'
import EveryoneSecond from './everyoneSecondorder/EveryoneSecond';
import MyorderSecond from './myordersecond/MyorderSecond';

const TapSecond = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <>
        
    <div className="container20">
        <div className="bloc-tabs24">
          <button
           
            className={toggleState === 1 ? "tabs23 " : "tabs22"}
            onClick={() => toggleTab(1)}
          >
             EveryoOne's Orders     
          </button>
          <button
            className={toggleState === 2 ? "tabs23 " : "tabs22"}
            onClick={() => toggleTab(2)}
          >
            My Orders
          </button>
         
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
          <EveryoneSecond/>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
          <MyorderSecond/>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default TapSecond