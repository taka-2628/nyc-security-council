function Other( { formData, handleChange, handleSwitch } ){

  return (
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
  )
}

export default Other;