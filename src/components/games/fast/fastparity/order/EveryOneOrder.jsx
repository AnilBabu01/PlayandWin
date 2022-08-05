import React from "react";
import Rowrecord from "./Rowrecord";
import "./EveryOneOrder.css";
const EveryOneOrder = () => {
  return (
    <>
      <table className="table-everyone-order">
        <tr className="table-everyone-order-heading">
          <td>Period</td>
          <td>User</td>
          <td>Select</td>
          <td>Point</td>
        </tr>
       <Rowrecord/>
       <Rowrecord/>
       <Rowrecord/>
       <Rowrecord/>
      </table>
    </>
  );
};

export default EveryOneOrder;
