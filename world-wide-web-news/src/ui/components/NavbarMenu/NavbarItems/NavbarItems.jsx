import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export const NavbarItems = () => {
  return (
    <div>
      <Nav className="justify-content-center">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/technology" className="nav-link">
          Tech
        </NavLink>
        <NavLink to="/science" className="nav-link">
          Science
        </NavLink>
        <NavLink to="/entertainment" className="nav-link">
          Entertainment
        </NavLink>
        <NavLink to="/sports" className="nav-link">
          Sports
        </NavLink>
      </Nav>
    </div>
  );
};
