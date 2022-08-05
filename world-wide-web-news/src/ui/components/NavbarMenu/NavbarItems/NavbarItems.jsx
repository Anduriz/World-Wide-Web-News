import Nav from "react-bootstrap/Nav";

export const NavbarItems = () => {
  return (
    <div>
      <Nav className="justify-content-center">
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Item 1</Nav.Link>
        <Nav.Link href="#action2">Item 2</Nav.Link>
        <Nav.Link href="#action2">Item 3</Nav.Link>
      </Nav>
    </div>
  )
}
