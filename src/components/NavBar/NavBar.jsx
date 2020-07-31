import React from 'react';
// import { Link } from 'react-router-dom';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  const rightContent = props.user ?
    <div>
      <Form inline>
        <Nav.Link href="/watchlist">{props.user.name}</Nav.Link>
        <Link to="" onClick={props.handleLogout}>Sign Out</Link>
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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/watchlist">Watchlist</Nav.Link>
        </Nav>
          {rightContent}
      </Navbar.Collapse>
    </Navbar>
    </div>)

}
export default NavBar;