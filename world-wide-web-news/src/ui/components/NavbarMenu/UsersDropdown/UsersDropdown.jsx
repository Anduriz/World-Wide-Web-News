import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BiUser } from "react-icons/bi";

export const UsersDropdown = ({expand}) => {
  return (
    <div>
        <Nav className="justify-content-end">
          <BiUser className="my-auto"/>
          <NavDropdown
            title="Username"
            align={{ lg: 'end' }}
            id={`offcanvasNavbarDropdown-expand-${expand}`}
          >
            {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider /> */}
            <NavDropdown.Item href="/login">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
    </div>
  )
}