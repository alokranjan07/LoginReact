import React,{useState} from 'react'
import './Auth.css'

function Auth() {
    const[isLogin,setisLogin]=useState(true);
  return (
    
         <div className="form-container">
            <div className="form-toggle">
            <button className={isLogin?'active':" "} onClick={()=>setisLogin(true) }>Login </button>
            <button className={!isLogin?'active':" "} onClick={()=>setisLogin(false)} >Signup </button>

          </div>
           
          {isLogin? <>
          <div className="login-container">
          <input type="text" placeholder="enter your email"/>
          <input type="password" placeholder="password"/>
          <br/>
          <a href="#" className="link">forgot password</a>
          <button>Login</button>

          </div>
           
            
          </>:" "}
       

          {!isLogin?<>
          <div className="signup-container"> 
            <form>
          <input type="text" placeholder="enter your email"/>
          <input type="text" placeholder="enter your  Name"/>
          <input type="text" placeholder="enter your  phone number"/>
          <button>Submit</button>
          </form>
          </div>
          </>:""}

          
       
         
    </div>
  )
}

export default Auth