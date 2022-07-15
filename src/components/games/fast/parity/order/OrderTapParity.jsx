import React,{useState} from 'react'
import EveryOneOrder from './EveryOneOrderParity';
import MyOrder from './MyOrderParity';
import './OrderTap.css'
const OrderTap = () => {

    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <>
    
    <div className="container1">
        <div className="bloc-tabs2">
          <button
           
            className={toggleState === 1 ? "tabs6 " : "tabs5"}
            onClick={() => toggleTab(1)}
          >
             EveryoOne's Orders     
          </button>
          <button
            className={toggleState === 2 ? "tabs6 " : "tabs5"}
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
            <EveryOneOrder/>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <MyOrder/>
          </div>
        
        </div>
      </div>
  </>
  )
}

export default OrderTap