import React from "react";
import Avatar from "@material-ui/core/Avatar";
import MycircleRed from "./MycircleRed";
import MycirGreen from "./MycirGreen";
const Myrow = () => {
  return (
    <>
      <tr className="table-everyone-order-row">
        <td>224886644</td>
        <td className="my-avtor2">
          <MycircleRed />
        </td>
        <td className="my-rupee">₹10</td>
        <td className="my-avtor">
          <MycirGreen />
        </td>
        <td>₹9.80</td>
      </tr>
    </>
  );
};

export default Myrow;
