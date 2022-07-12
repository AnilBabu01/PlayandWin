import React,{useState} from 'react'
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useNavigate } from "react-router-dom";
const Passwordlogin = () => {
    const [showpropress, setshowpropress] = useState(false);
    let navigate = useNavigate();
  return (
    <>
     <div>
        <form>
          <div className="numberdiv">
             <span className="num1">+91</span>
             
            <input className="inputlog" type="text" placeholder="Input Mobile Phone Number" />
          </div>
          <div className="numberdiv">
                <span className="num1">
                  <LockIcon />
                </span>
                <input
                  className="inputlog"
                  type={showpropress ? "text" : "password"}
                  placeholder="Password (>/Charectors)"
                />
                <li
                  className="showpassworddsignup"
                  onClick={() => setshowpropress(!showpropress)}
                >
                  {showpropress ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </li>
              </div>
           
          <div>
            <button onClick={() => navigate("/fiewin")} className="logbtn">Login</button>
          </div>
        </form>
      </div>
     </>
  )
}

export default Passwordlogin