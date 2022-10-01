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
      image_url: "",
      description: "",
    }
  );
  
  function handleChange(key, value){
    setFormData({
      ...formData, 
      [key]: value,
    })
  }

  const [typeCheckedState, setTypeCheckedState] = useState( [true, false, false] );

  function handleOnChangeType(position){
    const clickedState = typeCheckedState[position];

    const updatedCheckedState = clickedState ? typeCheckedState : typeCheckedState.map((item, index) => index === position ? !item : false);
    
    console.log(updatedCheckedState);
    setTypeCheckedState(updatedCheckedState);
  };

  const [onwerCheckedState, setOwnerCheckedState] = useState( [true, false, false] );

  function handleOnChangeOwner(position){
    const clickedState = onwerCheckedState[position];

    const updatedCheckedState = clickedState ? onwerCheckedState : onwerCheckedState.map((item, index) => index === position ? !item : false);
    
    console.log(updatedCheckedState);
    setOwnerCheckedState(updatedCheckedState);
  };
  
  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return <GeolocateAddress coordinates={coordinates} setCoordinates={setCoordinates} formData={formData} handleChange={handleChange} onStepChange={onStepChange}/>;
      case 1:
        return <Image handleChange={handleChange} onStepChange={onStepChange} />;
      case 2:
        return <Type typeCheckedState={typeCheckedState} handleOnChangeType={handleOnChangeType} onStepChange={onStepChange} />;
      case 3:
        return <Other onwerCheckedState={onwerCheckedState} handleOnChangeOwner={handleOnChangeOwner} formData={formData} handleChange={handleChange} onStepChange={onStepChange} />;
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
