import { useState } from "react";
import { Outlet } from 'react-router-dom';

import '../stylesheets/Contribute.css';

import CameraSubmitForm from "./CameraSubmitForm";
import CloseBtn from "./Buttons/CloseBtn";
import ReturnBtn from './Buttons/ReturnBtn';
import GeolocateAddress from './Forms/GeolocateAddress';

function Contribute(){

  const [ viewState, setViewState ] = useState("geo-add");

  const [coordinates, setCoordinates] = useState(null);
  const [formData, setFormData] = useState(
    {
      address: "",
      intersection: "",
      zipcode: "",
      borough: "",
    }
  );

  function handleChange(key, value){
    setFormData({
      ...formData, 
      [key]: value,
    })
  }

  return(
    <div id="contribute" className="grid-container">
      <CloseBtn />
      <ReturnBtn />
      {/*<Outlet />*/}

      {
        (viewState === "geo-add") ? 
        <GeolocateAddress coordinates={coordinates} setCoordinates={setCoordinates} formData={formData} handleChange={handleChange} /> : 
        null 
      }
      {
        
      }
      
      
    </div>
  )
}

export default Contribute;
