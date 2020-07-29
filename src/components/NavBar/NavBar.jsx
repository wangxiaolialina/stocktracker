import React from 'react';
// import { Link } from 'react-router-dom';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

const NavBar = (props) => (
  <div>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Stock Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Watchlist</Nav.Link>
    </Nav>
    <Form inline>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">Signup</Nav.Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>)

export default NavBar;