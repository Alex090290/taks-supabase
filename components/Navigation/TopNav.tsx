"use client";

import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import SessionInfo from "./SessionInfo";

function TopNav() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto"></Nav>
          <Nav>
            <SessionInfo />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
