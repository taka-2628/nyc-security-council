import { useState } from "react";
import '../../stylesheets/Contribute.css';
import Image from "./Image";

function GeolocateAddress(){
  const [ whichForm, setWhichForm ] = useState("image");

  function handleSwitch(){
    setIsGeolocate(!isGeolocate);
  }

  return(
    <div id="upload-form-cont" className="four-ten">
      
      {
        (whichForm === "image") ?
        <Image /> : 
        null
      }
      {
        (whichForm === "type") ?
        <Image /> : 
        null
      }
      {
        (whichForm === "other") ?
        <Other /> : 
        null
      }

      <ProgressBtn/>
    </div>
  )
}

export default GeolocateAddress;