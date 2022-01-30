import { Button } from "react-bootstrap";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg">
        <Navbar>
          <Link className="nav-content" to="/home">
            <h1>Quick Ride</h1>
          </Link>{" "}
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav style={{border: "1px solid" , borderRadius: "10px"}}>
            <Link className="nav-content px-3" to="/home">
              Home{" "}
            </Link>
            <Link className="nav-content px-3" to="/login">
              Destination
            </Link>
            <Link className="nav-content px-3" to="/blog">
              Blog
            </Link>
            <Link className="nav-content px-3" to="/contact">
              Contact
            </Link>
            <Link to="/login">
              {" "}
              <Button className="nav-content-btn px-3" variant="danger">
                Login
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
