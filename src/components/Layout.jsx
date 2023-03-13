import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <Container className="min-vh-100 d-flex flex-column pb-4 gap-3">
      <Navbar />
      {children}
    </Container>
  );
};
