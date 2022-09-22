import { useState } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import CloseBtn from "./Buttons/CloseBtn";
import ReturnBtn from "./Buttons/ReturnBtn";

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
