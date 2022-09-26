import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../stylesheets/LoginSignup.css';

function SignupForm( { /*setCurrentUser*/ handleSwitch } ){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");

  const [websiteUrl, setWebsiteUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();  
    setErrors([]);
    /*
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        profile_image: imageUrl,
        intro,
        website: websiteUrl,
        github: githubUrl
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    */
  }

  return (
    <div id="signup" className="five-nine">
      <div className="login-signup-container">
        <div className="title-hr-div">
          <div>
            <div className="title-wrapper l-s-not-selected">
              <h4 onClick={handleSwitch}>Sign up</h4>
            </div>
            <hr/>
          </div>
          <div>
            <div className="title-wrapper">
              <h4>Sign up</h4>
            </div>
            <hr  id="right" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="username"
            autoComplete="off"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            placeholder="Re-Enter Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          {/*
          <input
            type="text"
            id="websiteUrl"
            value={websiteUrl}
            placeholder="URL for your website"
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
          <input
            type="text"
            id="githubUrl"
            value={githubUrl}
            placeholder="URL for your GitHub"
            onChange={(e) => setGithubUrl(e.target.value)}
          />
          */}
          <div className="submit-cont">
            <div>
              <input 
                type="submit" 
                value="&#x203A;"
                className={ ( username && password && passwordConfirmation && email ) ? "active-submit" : ""}
              />
            </div>
          </div>
        </form>

        <div className="error-div">
          {errors.map((err) => (
              <p key={err} >{err}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignupForm;