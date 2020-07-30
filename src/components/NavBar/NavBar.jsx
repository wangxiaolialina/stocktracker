import React from 'react';
// import { Link } from 'react-router-dom';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

const NavBar = (props) => {
  const rightContent = props.user ?
    <div>
      <Form inline>
        <Nav.Link href="/watchlist">{props.user.name}</Nav.Link>
        <Nav.Link href="" onClick={props.handleLogout}>Sign Out</Nav.Link>
      </Form>
    </div>
    :
    <div>
      <Form inline>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
      </Form>
    </div>;

  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Stock Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="/watchlist">Watchlist</Nav.Link>
        </Nav>
          {rightContent}
      </Navbar.Collapse>
    </Navbar>
    </div>)

}
export default NavBar;