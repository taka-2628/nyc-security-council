import '../stylesheets/Contribute.css';

import NavBar from "./NavBar";
import CameraSubmitForm from "./CameraSubmitForm";
import CloseBtn from "./Buttons/CloseBtn";

function Contribute(){
  return(
    <div id="contribute" className="grid-container">
      { /* <NavBar /> */}
      <CloseBtn />
      <CameraSubmitForm />
    </div>
  )
}

export default Contribute;
