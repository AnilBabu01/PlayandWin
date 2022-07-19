import React from "react";
import "./Alert.css";
const Alert = ({sms,showalert}) => {
 return (
    <>
      <div className={!showalert?"hidee":"alert-div"}>
        <div className="alert-text">
          <p>{sms}</p>
        </div>
      </div>
    </>
  );
};

export default Alert;
