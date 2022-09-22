import { useState } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import CloseBtn from "./CloseBtn";
import ReturnBtn from "./ReturnBtn";

function LoginSignup(){
  const [ isLogin, setIsLogin ] = useState(true);

  function handleSwitch(){
    console.log('login')
    setIsLogin(!isLogin);
  }

  return(
    <div id="login-signup" className="width-75">
      <CloseBtn />
      <ReturnBtn />
      { isLogin ? <LoginForm handleSwitch={handleSwitch}/> : <SignupForm handleSwitch={handleSwitch}/> }
    </div>
  )
}

export default LoginSignup;
