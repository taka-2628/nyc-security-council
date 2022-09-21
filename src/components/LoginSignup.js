import { useState } from "react";

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
    <div id="login-signup" className="width-60">
      {/*<NavBar />*/}
      { isLogin ? <LoginForm handleSwitch={handleSwitch}/> : <SignupForm handleSwitch={handleSwitch}/> }
    </div>
  )
}

export default LoginSignup;
