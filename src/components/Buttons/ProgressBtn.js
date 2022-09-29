import '../../stylesheets/ProgressBtn.css';

function ProgressBtn( {active} ){
  return (
    <div className="progress-btn-cont">
      <div className="progress-btn-wrapper">
        <span className={ ( active) ? "active-submit" : ""}>&#x203A;</span>
      </div>
    </div>
  )
}

export default ProgressBtn;