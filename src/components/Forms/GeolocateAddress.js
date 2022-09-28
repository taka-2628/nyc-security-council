import { useState } from "react";
import '../../stylesheets/Contribute.css';

function GeolocateAddress({ coordinates, setCoordinates, formData, handleChange }){
  const [coordiError, setCoordiError] = useState(null);

  const [ isGeolocate, setIsGeolocate ] = useState(true);

  function handleSwitch(){
    setIsGeolocate(!isGeolocate);
  }

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

  return(
    <>
      { 
        isGeolocate ?

        <div id="upload-form-cont" className="four-ten">
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
        </div> :

        <div id="upload-form-cont" className="four-ten">
          <div className='upload-form-wrapper'>
            <div className="title-hr-div">
              <div>
                <div className="title-wrapper l-s-not-selected">
                  <h4 onClick={handleSwitch}>Geolocate Current Location</h4>
                </div>
                <hr/>
              </div>
              <div>
                <div className="title-wrapper">
                  <h4>Manually Input Location</h4>
                </div>
                <hr id="right"/>
              </div>
            </div>
            <div className="form-wrapper">
              <form>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  placeholder="Address"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <input
                  type="text"
                  name="intersection"
                  value={formData.intersection}
                  placeholder="Intersection"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <input
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  placeholder="Zicode"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <input
                  type="text"
                  name="borough"
                  value={formData.borough}
                  placeholder="Borough"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default GeolocateAddress;