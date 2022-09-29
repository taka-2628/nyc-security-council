import { useState } from "react";

function Geolocate( { coordinates, setCoordinates, handleSwitch } ){
  const [coordiError, setCoordiError] = useState(null);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveLocation);
    } else { 
      setCoordiError("Geolocation is not supported by this browser.");
    }
  }

  function saveLocation(position) {
    let coordinates = [position.coords.longitude, position.coords.latitude]
    console.log(coordinates)
    setCoordinates(coordinates);
    setCoordiError(null);
  }

  return (
    <div className='upload-form-wrapper'>
      <div className="title-hr-div">
        <div>
          <div className="title-wrapper">
            <h4>Geolocate Current Location</h4>
          </div>
          <hr id="left" />
        </div>
        <div>
          <div className="title-wrapper l-s-not-selected">
            <h4 onClick={handleSwitch}>Manually Input Location</h4>
          </div>
          <hr/>
        </div>
      </div>
      <div className="form-wrapper">
        <div id="geo-locator-cont">
          <button id="geo-btn" onClick={() => getLocation()}>GEOLOCATE</button>
          { coordiError ? <span>{coordiError}</span> : null}
        </div>
        <div id="coordinates">
          <div className="lat-long-cont left"><p>Latitude: {coordinates ? <span>{coordinates[1]}</span> : null}</p><hr/></div> 
          <div className="lat-long-cont right"><p>Longitude: {coordinates ? <span>{coordinates[0]}</span> : null}</p><hr/></div> 
        </div>
      </div>
    </div>
  )
}

export default Geolocate;