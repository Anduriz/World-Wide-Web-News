import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/Col";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {ImSearch} from 'react-icons/im'

function NavbarMenu() {
  const { height, width } = useWindowDimensions();

  let expand = "lg";

  return (
    <>
      <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
          {width <= 992 && (
            <Col>
              {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            </Col>
          )}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            
                <Col>
                
                
                </Col>
             
              <Col xs={6}>
                <Nav className="justify-content-center">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
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
              </Col>
              <Col>
              <Form className="d-flex">
                  
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary"><ImSearch /></Button>
                  
                </Form>
              </Col>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
