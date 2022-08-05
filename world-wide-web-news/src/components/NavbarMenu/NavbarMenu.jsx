import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
// Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { SearchBar } from "./SearchBar/SearchBar";
import { NavbarItems } from "./NavbarItems/NavbarItems";
import { UsersDropdown } from "./UsersDropdown/UsersDropdown";

function NavbarMenu() {
  const { width } = useWindowDimensions();

  let expand = "lg";

  return (
    <>
      <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
          {width <= 992 && (<Col></Col>)}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Word Wide Web News
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Col>
                {/* <SearchBar /> */}
              </Col>
              <Col xs={6}>
              <SearchBar />
                <NavbarItems />
              </Col>
              <Col>
                <UsersDropdown expand={expand}/>
              </Col>
            </Offcanvas.Body>         
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
