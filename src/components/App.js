import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../stylesheets/App.css';
import Home from "./Home";
import About from "./About";
import Map from "./Map";
import SigninSignup from "./SigninSignup";
import Contribute from "./Contribute";

function App() {
  return (
    <BrowserRouter basename={'/nyc-security-council'}>
      <div className="App">
        <main>
          <Routes>
            <Route exact path="/" element={
                <Home />
              }
            />
            <Route exact path="/about" element={
                <About />
              }
            />
            <Route exact path="/Map" element={
                <Map />
              }
            />
            <Route exact path="/signin" element={
                <SigninSignup />
              }
            />
            <Route exact path="/contibute" element={
                <Contribute />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
