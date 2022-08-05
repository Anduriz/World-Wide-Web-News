import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const UsersDropdown = ({expand}) => {
  return (
    <div>
        <Nav className="justify-content-end">
          <NavDropdown
            title="Username"

            align={{ lg: 'end' }}
            id={`offcanvasNavbarDropdown-expand-${expand}`}
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </div>
  )
}
