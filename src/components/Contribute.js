import '../stylesheets/Contribute.css';

import CameraSubmitForm from "./CameraSubmitForm";
import CloseBtn from "./Buttons/CloseBtn";
import ReturnBtn from './Buttons/ReturnBtn';

function Contribute(){
  return(
    <div id="contribute" className="grid-container">
      <CloseBtn />
      <ReturnBtn />
      <CameraSubmitForm />
    </div>
  )
}

export default Contribute;
