import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Cartelera">
          Cartelera
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
