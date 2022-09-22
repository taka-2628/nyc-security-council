import { NavLink } from "react-router-dom";
import '../../stylesheets/CloseBtnReturnBtn.css';

function ReturnBtn(){
  return (
    <NavLink
    to="/about"
    exact="true"
    className="return-btn"
    >
      &#8592;
    </NavLink>
  )
}

export default ReturnBtn;