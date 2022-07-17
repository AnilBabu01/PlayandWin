import React,{useState} from 'react'
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useNavigate } from "react-router-dom";
const Passwordlogin = () => {
    let navigate = useNavigate();
    const [showpropress, setshowpropress] = useState(false);
    const [credentials, setCredentials] = useState({
      number: "",
      password: "",
    });
  
  const {number,password}= credentials; 
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
       console.log("login data is ",number,password)
  
    };
  return (
    <>
     <div>
        <form onSubmit={handleSubmit}>
          <div className="numberdiv">
             <span className="num1">+91</span>
             
            <input className="inputlog" onChange={onChange} value={number} name="number" type="text" placeholder="Input Mobile Phone Number" />
          </div>
          <div className="numberdiv">
                <span className="num1">
                  <LockIcon />
                </span>
                <input
                  className="inputlog"
                  name="password"
                  value={password}
                  onChange={onChange}
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