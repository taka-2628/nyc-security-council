import ProgressBtn from "../Buttons/ProgressBtn";

import cameraType1 from "../../assets/sv-type1.png";
import cameraType2 from "../../assets/sv-type2.png";
import cameraType3 from "../../assets/sv-type3.png";

function Type( { typeCheckedState, handleOnChangeType, onStepChange } ){
  
  return (
    <div id="upload-form-cont" className="four-ten">
      <div className='upload-form-wrapper'>
        <div className="title-hr-div">
          <div className="three-parts">
            <hr/>
          </div>
          <div className="three-parts">
            <div className="title-wrapper">
              <h4>Select Type</h4>
            </div>
            <hr className="selected-hr"/>
          </div>
          <div className="three-parts">
            <hr/>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="type-cont">
            <p>Select camera type</p>
            <div id="type-radio-cont">
              <span className="type-radio-wrapper">
                <button className={typeCheckedState[0] ? "selected-type-btn" : null } onClick={() => handleOnChangeType(0)}>
                  <div>Dome/PTZ Camera</div>
                  <img src={cameraType1}></img>
                </button>
              </span>
              <span className="type-radio-wrapper">
                <button className={typeCheckedState[1] ? "selected-type-btn" : null } onClick={() => handleOnChangeType(1)}>
                  <div>Bullet Camera</div>
                  <img src={cameraType2} ></img>
                </button>
              </span>
              <span className="type-radio-wrapper">
                <button className={typeCheckedState[2] ? "selected-type-btn" : null } onClick={() => handleOnChangeType(2)}>
                  <div>Other</div>
                  <img src={cameraType3}></img>
                </button>
              </span>
            </div>
          </div>
          {/*
            <div className="type-radio-wrapper">
              <input
                type="radio"
                name="address"
                className="radio-type"
                checked={typeCheckedState[0]}
                placeholder="Address"
                onChange={() => handleOnChangeType(0)}
              />
              <label className="label-image" htmlFor="radio1"><img src={cameraType1}></img></label>
            </div>
            
            <div className="type-radio-wrapper">
              <input
                type="radio"
                name="intersection"
                className="radio-type"
                checked={typeCheckedState[1]}
                placeholder="Intersection"
                onChange={() => handleOnChangeType(1)}
              />
              <label className="label-image" htmlFor="radio1"><img src={cameraType2}></img></label>
            </div>
            <div className="type-radio-wrapper">
              <input
                type="radio"
                name="zipcode"
                className="radio-type"
                checked={typeCheckedState[2]}
                placeholder="Zicode"
                onChange={() => handleOnChangeType(2)}
              />
              <label className="label-image" htmlFor="radio1"><img src="http://i.stack.imgur.com/FSN1q.png"/></label>
            </div>
          */}
        </div>
      </div>
      <ProgressBtn onStepChange={onStepChange}/>
    </div>
  )
}

export default Type;