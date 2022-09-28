import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import Home from "./Home";
import About from "./About";
import MapContainer from "./MapContainer";
import LoginSignup from "./LoginSignup";
import Contribute from "./Contribute";


const MAPBOX_TOKEN = 'pk.eyJ1IjoidGgtdGgiLCJhIjoiY2t3N2Q1YmNxOW8wajMxczE4ZndqaDRuNCJ9.UWfb1rN9Hl6lBXJGLC6Vrw'; 

function App() {
  return (
    <BrowserRouter basename={'/nyc-security-council'}>
      <div className="app">
        <main>
          <Routes>
            <Route  path="/" element={ <Home /> } />
            <Route exact path="/about" element={ <About /> } />
            <Route exact path="/Map" element={ <MapContainer MAPBOX_TOKEN={MAPBOX_TOKEN}/> } />
            <Route exact path="/signin" element={ <LoginSignup /> } />
            <Route path="/contribute" index element={ <Contribute /> } >
              {/*<Route path="/initial" element={ <p>initial</p> }/>*/}
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
