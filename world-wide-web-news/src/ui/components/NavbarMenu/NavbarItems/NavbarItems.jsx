import Nav from "react-bootstrap/Nav";

export const NavbarItems = () => {
  return (
    <div>
      <Nav className="justify-content-center">
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Tech</Nav.Link>
        <Nav.Link href="#action2">Science</Nav.Link>
        <Nav.Link href="#action2">Movies</Nav.Link>
        <Nav.Link href="#action2">Style</Nav.Link>
        <Nav.Link href="#action2">Arts</Nav.Link>
      </Nav>
    </div>
  )
}
