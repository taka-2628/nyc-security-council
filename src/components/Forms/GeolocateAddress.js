import { useState } from "react";
import '../../stylesheets/Contribute.css';

import Geolocate from "./Geolocate";
import ProgressBtn from "../Buttons/ProgressBtn";
import Address from "./Address";

function GeolocateAddress({ coordinates, setCoordinates, formData, handleChange }){
  const [ isGeolocate, setIsGeolocate ] = useState(true);

  function handleSwitch(){
    setIsGeolocate(!isGeolocate);
  }

  return(
    <div id="upload-form-cont" className="four-ten">
      
      {
        isGeolocate ?
        <Geolocate coordinates={coordinates} setCoordinates={setCoordinates} handleSwitch={handleSwitch} /> :
        <Address formData={formData} handleChange={handleChange} handleSwitch={handleSwitch} />
      }
      <ProgressBtn/>
    </div>
  )
}

export default GeolocateAddress;