import { NavLink } from "react-router-dom";
import '../stylesheets/NavBar.css';

function NavBar(){
  return(
    <nav className="three-five">
      <NavLink
        to="/about"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        About
      </NavLink>
      <NavLink    
        to="/signin"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Login/Signup
      </NavLink>
      <NavLink    
        to="/map"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Map
      </NavLink>
      <NavLink    
        to="/contribute"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Contribute
      </NavLink>
    </nav>
  )
}

export default NavBar;