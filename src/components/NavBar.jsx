import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#name">John P. Vajda</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="navLink" href="#projects">Projects</Nav.Link>
        <Nav.Link className="navLink" href="#references">References</Nav.Link>
        <Nav.Link className="navLink" href="#certifications">Certifications</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;