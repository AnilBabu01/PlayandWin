import React from 'react'
import login from '../../../images/login.png'
import Taps from '../../tap/Taps'
import {Link} from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <>
      
      <div className='main'>
          <div className='contentdiv'>
            <div className='imgcen'>
               <div>
                < img src={login} className='loginimg' alt='login'/>
                
                 {/* <h2 className='imgtext'>Play and Win</h2> */}
                </div> 
            </div>
            <div>
                <Taps/>
            </div>
            <div className='cengoregister1'>
                <div>
                  <p>Don't have a account? <span><Link to='/signup'>Register</Link></span> </p>
                </div>
             </div>
             <div className='facebook'>
                <p>feedback</p>
             </div>
            
          </div>
      </div>
     </>
  )
}

export default Login