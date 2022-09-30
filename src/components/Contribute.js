import { useState } from "react";
import { Outlet, useParams } from 'react-router-dom';

import '../stylesheets/Contribute.css';

import CloseBtn from "./Buttons/CloseBtn";
import ReturnBtn from './Buttons/ReturnBtn';
import GeolocateAddress from './Forms/GeolocateAddress';

import Image from "./Forms/Image";
import Type from "./Forms/Type";
import Other from "./Forms/Other";

function Contribute(){
  const [step, setStep] = useState(0);

  function onStepChange(){
    setStep(step + 1)
  }

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
  
  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return <GeolocateAddress coordinates={coordinates} setCoordinates={setCoordinates} formData={formData} handleChange={handleChange} onStepChange={onStepChange}/>;
      case 1:
        return <Image formData={formData} handleChange={handleChange} onStepChange={onStepChange} />;
      case 2:
        return <Type formData={formData} handleChange={handleChange} onStepChange={onStepChange} />;
      case 3:
        return <Other formData={formData} handleChange={handleChange} onStepChange={onStepChange} />;
      default:
        return <GeolocateAddress coordinates={coordinates} setCoordinates={setCoordinates} formData={formData} handleChange={handleChange} onStepChange={onStepChange}/>;
    }
  }

  return(
    <div id="contribute" className="grid-container">
      <CloseBtn />
      <ReturnBtn />

      {conditionalComponent()}
      
    </div>
  )
}

export default Contribute;
