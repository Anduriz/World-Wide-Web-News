import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
// Hooks
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import { SearchBar } from "./SearchBar/SearchBar";
import { NavbarItems } from "./NavbarItems/NavbarItems";
import { UsersDropdown } from "./UsersDropdown/UsersDropdown";
import { useState } from "react";

export const NavbarMenu = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { width } = useWindowDimensions();

  let expand = "lg";

  return (
    <Navbar bg="" variant="dark" expand={expand} className="navbarColorTheme pt-3 mb-3">
        <Container fluid>
          {width <= 992 && (<Col></Col>)}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="title">
                Word Wide Web News
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Col>
                {/* <SearchBar /> */}
              </Col>
              <Col xs={6}>
                <SearchBar />
                <NavbarItems handleClose={handleClose}/>
              </Col>
              <Col>
                <UsersDropdown width={width} expand={expand}/>
              </Col>
            </Offcanvas.Body>         
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  )
}
