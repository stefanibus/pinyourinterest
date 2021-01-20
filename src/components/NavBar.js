// NavBar.js
import React from "react";
import Navbar from "react-bootstrap/Navbar";

// BOOTSTRAP DOCUMENTATION:
// - npm install bootstrap
// - npm install react-bootstrap bootstrap
// - npm install react-router-bootstrap
// - added the below dependencies
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
// Moved the NavBar into this external Component called NavBar.js
// More Documentation can be found here:
// https://github.com/react-bootstrap/react-router-bootstrap
// https://www.pluralsight.com/guides/using-react.js-with-bootstrap

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to="/allposts">
        <div className="navbar-brand">PinYourInterest</div>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/bestratedposts">
            <div className="nav-link">Your 5 favourite Posts</div>
          </LinkContainer>

          <LinkContainer to="/allposts">
            <div className="nav-link">All your Posts</div>
          </LinkContainer>
        </Nav>

        <Nav>
          <LinkContainer to="/futureLink">
            <div className="nav-link">More links</div>
          </LinkContainer>
          <LinkContainer to="/toggleTheme">
            <div className="nav-link">Toggle Theme</div>
          </LinkContainer>
          <LinkContainer to="/UserLogin">
            <div className="nav-link">UserLogin</div>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
