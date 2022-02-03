import React, { Component } from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

export default class Navigasyon extends Component {
  render() {
    return (
      <div>
        <Navbar bg="warning" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">CanerDemir App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Covid</Nav.Link>
              <Nav.Link href="#features">Hava Durumu</Nav.Link>

              <Nav.Link href="#girisyap">Giriş Yap</Nav.Link>
            </Nav>

            <DropdownButton variant="outline-dark" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </DropdownButton>
          </Container>
        </Navbar>
      </div>
    );
  }
}
