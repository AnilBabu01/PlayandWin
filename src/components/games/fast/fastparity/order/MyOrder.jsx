import React from "react";
import Myrow from "./Myrow";
import "./Myorder.css";
const MyOrder = () => {
  return (
    <>
      <table className="table-everyone-order">
        <tr className="table-everyone-order-heading">
          <td>Period</td>
          <td>Select</td>
          <td>Point</td>
          <td>Result</td>
          <td>Amount</td>
        </tr>
        <Myrow />
        <Myrow />
        <Myrow />
        <Myrow />
      </table>
    </>
  );
};

export default MyOrder;
