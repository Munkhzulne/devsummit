import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { PrimaryButton, SecondaryButton } from "./buttons"
import { Logo } from "./logo"

export const DevHeader = ({ agendaRef, speakersRef }) => {
  const scrollTo = ref => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="white-shadow"
    >
      <Navbar.Brand href="#home" className="d-lg-none">
        {/* <Logo/> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-around align-items-center"
      >
        <Nav className="align-items-center">
          <Nav.Link
            href="#features"
            className="text-white f-18 text-bold"
            onClick={() => scrollTo(agendaRef)}
          >
            <SecondaryButton>AGENDA</SecondaryButton>
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            className="text-white f-18 text-bold"
            onClick={() => scrollTo(speakersRef)}
          >
            <SecondaryButton>SPEAKERS</SecondaryButton>
          </Nav.Link>
        </Nav>
        <Navbar.Brand className="d-lg-block d-none py-3">
          <Logo />
        </Navbar.Brand>
        <Nav className="align-items-center">
          <Nav.Link href="#deets" className="text-white f-18 text-bold">
            <SecondaryButton>
            Contact Us

            </SecondaryButton>
          </Nav.Link>
          <Nav.Link>
            <PrimaryButton>Buy Ticket</PrimaryButton>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
