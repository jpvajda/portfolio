import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default class MyCarousel extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#summary">John P. Vajda</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#summary">Summary</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#references">References</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Nav.Link href="https://jpv-blog.netlify.app/">Blog</Nav.Link>
        </Nav>
      </Navbar>

    );

  }
}