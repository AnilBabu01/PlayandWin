import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./EveryOne.css";
const EveryOne = () => {
  return (
    <>
      <tr className="info-td-game">
        <td>08:52</td>
        <td className="avatar-td-game">
          <Avatar src="/static/images/avatar/1.jpg" /> <span className="no-span">***689</span>
          <spna className="no-span">2x2</spna>
        </td>
        <td className="no-select">16</td>
        <td>₹10.25</td>
      </tr>
    </>
  );
};

export default EveryOne;
