import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Route from 'react-router-dom';
import MyModal from './MyModal'

export default class NavBar extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#name">John P. Vajda</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="navLink" href="#projects">Projects</Nav.Link>
          <Nav.Link className="navLink" href="#references">References</Nav.Link>
          <Nav.Link className="navLink" href="#certifications">Certifications</Nav.Link>
          <Nav.Link className="navLink" onSelect={MyModal}>
            Contact</Nav.Link>
          <Nav.Link className="navLink" href="https://jpv-blog.netlify.app/">Blog</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
