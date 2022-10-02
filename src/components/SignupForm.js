import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../stylesheets/LoginSignup.css';

function SignupForm( { /*setCurrentUser*/ handleSwitch } ){
  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState("");

  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");

  const [phone, setPhone] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [citizenship, setCitizenship] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState([]);

  const [ survLevel, setSurvLevel ] = useState("low");

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();  
    setErrors([]);
    
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        email,
        fullname,
        phone,
        address_1: addressOne,
        address_2: addressTwo,
        city,
        state,
        zipcode,
        date_of_birth: dob,
        gender,
        occupation,
        citizenship
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          //setCurrentUser(user);
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }

  return (
    <div id="signup" className="five-nine">
      <div className="login-signup-container">

        <div className="title-hr-div">
          <div>
            <div className="title-wrapper l-s-not-selected">
              <h4 onClick={handleSwitch}>Sign in</h4>
            </div>
            <hr/>
          </div>
          <div>
            <div className="title-wrapper">
              <h4>Register</h4>
            </div>
            <hr  id="right" />
          </div>
        </div>

        <div className="title-hr-div">
          <div>
            <p>Surveillance Level</p>
          </div>
          <div className="s-levels">
            <div>
              <span 
                className={ (survLevel === "low") ? "s-l-active" : ""}
                onClick={() => setSurvLevel("low")}
              >
                Low
              </span>
              <span
                className={ (survLevel === "medium") ? "s-l-active" : ""}
                onClick={() => setSurvLevel("medium")}
              >
                Medium
              </span>
              <span
                className={ (survLevel === "high") ? "s-l-active" : ""}
                onClick={() => setSurvLevel("high")}
              >
                High
              </span>
            </div>
          </div>
          <hr />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-scrollable">
            { 
              (survLevel === "medium" || survLevel === "high") ?
              <div className="input-group-wrapper">
                <input
                  type="text"
                  id="fullname"
                  value={fullname}
                  placeholder="Full Name"
                  onChange={(e) => setFullname(e.target.value)}
                />
                <input
                  type="text"
                  id="dob"
                  value={dob}
                  placeholder="Date of Birth"
                  onChange={(e) => setDob(e.target.value)}
                />
                {
                  (survLevel === "high") ?
                  <>
                    <input
                      type="text"
                      id="gender"
                      value={gender}
                      placeholder="Gender"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <input
                      type="text"
                      id="occupation"
                      value={occupation}
                      placeholder="Occupation"
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </> :
                  null
                }
              </div> :
              null
            }

            {
              (survLevel === "high") ?
              <div className="input-group-wrapper">
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  id="addressOne"
                  value={addressOne}
                  placeholder="Address Line 1"
                  onChange={(e) => setAddressOne(e.target.value)}
                />
                <input
                  type="text"
                  id="addressTwo"
                  value={addressTwo}
                  placeholder="Address Line 2"
                  onChange={(e) => setAddressTwo(e.target.value)}
                />
                <input
                  type="text"
                  id="city"
                  value={city}
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  id="state"
                  value={state}
                  placeholder="State"
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  type="text"
                  id="zipcode"
                  value={zipcode}
                  placeholder="Zipcode"
                  onChange={(e) => setZipcode(e.target.value)}
                />
                <input
                  type="text"
                  id="citizenship"
                  value={citizenship}
                  placeholder="Citizenship"
                  onChange={(e) => setCitizenship(e.target.value)}
                />
              </div> :
              null
            }
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
          </div>
          
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