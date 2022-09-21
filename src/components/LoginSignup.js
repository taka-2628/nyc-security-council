import { useState } from "react";
import { NavLink } from "react-router-dom";

import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginSignup(){
  const [ isLogin, setIsLogin ] = useState(true);

  function handleSwitch(){
    console.log('login')
    setIsLogin(!isLogin);
  }

  return(
    <div id="login-signup" className="width-75">
      {/*<NavBar />*/}
      <>
      <NavLink
        to="/about"
        exact="true"
        id="back-arrow-btn"
      >
        &#8592;
      </NavLink>
      
      </>
      { isLogin ? <LoginForm handleSwitch={handleSwitch}/> : <SignupForm handleSwitch={handleSwitch}/> }
    </div>
  )
}

export default LoginSignup;
