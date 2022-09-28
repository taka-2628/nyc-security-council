import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CameraSubmitForm( { /*currentUser*/ } ){
  const [title, setTitle] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [coordiError, setCoordiError] = useState(null);

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveLocation);
    } else { 
      setCoordiError("Geolocation is not supported by this browser.");
    }
  }

  function saveLocation(position) {
    let coordinates = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }
    console.log(coordinates)
    setCoordinates(coordinates);
    setCoordiError(null);
  }

  function handleSubmit(e){
    e.preventDefault();  
    setErrors([]);
    
    /*
    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        title,
        description,
        image,
        genres: selectedGenres,
        technologies: selectedTechs
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((project) => {
          setProjects([...projects, project])
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    */
  }

  return (
    <div id="submit-camera" className="upload-form-wrapper ">
      <h3>Submit Surveillance Camera</h3>

      <form onSubmit={handleSubmit}>
        
        <div id="location-info">
          <div id="geo-locator-cont">
            <span>Are you on-site?</span>
            <button id="geo-btn"onClick={() => getLocation()}>Get Your Geolocation</button>
            <div className="lat-long-cont"><p>Latitude: {coordinates ? <span>{coordinates.latitude}</span> : null}</p><hr/></div> 
            <div className="lat-long-cont"><p>Longitude: {coordinates ? <span>{coordinates.longitude}</span> : null}</p><hr/></div> 
            { coordiError ? <span>{coordiError}</span> : null}
          </div>
          <div id="address">
            <span>Or provide address or intersection, or street:</span>
            <input 
              type="text"
              id="address"
              name="address"
              placeholder="Address, intersection or street.."
            />
          </div>
        </div>

        <fieldset id="nbhd-selection">
          <label htmlFor="neighborhoods">Choose a neighborhood:</label>
          <select name="neighborhoods" id="neighborhoods">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </fieldset>

        <div className="half-width div-right">
          <input 
            type="text" 
            id="p-image" 
            name="image"
            value={image}
            placeholder="URL for an image.."
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        
        <div className="half-width div-right">
          <input 
            id="c-desc" 
            name="description"
            value={description}
            placeholder="Describe the surveillance camera.."
            onChange={(e) => setDescription(e.target.value)}
          >
          </input>
        </div>
      
        <input type="submit" value="Submit"/>
      </form>
      <div className="error-div">
        {errors.map((err) => (
            <p key={err} >{err}</p>
        ))}
      </div>
    </div>
  )
}

export default CameraSubmitForm;