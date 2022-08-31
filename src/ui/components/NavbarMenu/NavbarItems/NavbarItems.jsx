import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export const NavbarItems = ({handleClose}) => {
  return (
    <div>
      <Nav className="justify-content-center">
        <NavLink to="" className="nav-link" onClick={handleClose}>
          Home
        </NavLink>
        <NavLink to="technology" className="nav-link" onClick={handleClose}>
          Tech
        </NavLink>
        <NavLink to="science" className="nav-link" onClick={handleClose}>
          Science
        </NavLink>
        <NavLink to="entertainment" className="nav-link" onClick={handleClose}>
          Entertainment
        </NavLink>
        <NavLink to="sports" className="nav-link" onClick={handleClose}>
          Sports
        </NavLink>
      </Nav>
    </div>
  );
};
