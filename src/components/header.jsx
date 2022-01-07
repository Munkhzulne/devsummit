import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { PrimaryButton } from "./buttons"
import { Logo } from "./logo"

export const DevHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="white-shadow">
      <Navbar.Brand href="#home" className="d-lg-none">
        {/* <Logo/> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-around align-items-center"
      >
        <Nav className="align-items-center">
          <Nav.Link href="#features" className="text-white f-18 text-bold">
            AGENDA
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-white f-18 text-bold">
            SPEAKERS
          </Nav.Link>
        </Nav>
        <Navbar.Brand className="d-lg-block d-none py-3">
          <Logo />
        </Navbar.Brand>
        <Nav className="align-items-center">  
          <Nav.Link href="#deets" className="text-white f-18 text-bold">
            Contact Us
          </Nav.Link>
          <Nav.Link>
            <PrimaryButton>
              Buy Ticket
              </PrimaryButton>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
