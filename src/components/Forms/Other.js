import ProgressBtn from "../Buttons/ProgressBtn";

function Other( { formData, handleChange, onStepChange } ){

  return (
    <div id="upload-form-cont" className="four-ten">
      <div className='upload-form-wrapper'>
        <div className="title-hr-div">
          <div className="three-parts">
            <hr/>
          </div>
          <div className="three-parts">
            <hr/>
          </div>
          <div className="three-parts">
            <div className="title-wrapper">
              <h4>Other</h4>
            </div>
            <hr className="selected-hr"/>
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
      <ProgressBtn onStepChange={onStepChange}/>
    </div>
  )
}

export default Other;