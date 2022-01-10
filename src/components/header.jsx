import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { PrimaryButton, SecondaryButton } from "./buttons"
import { Logo } from "./logo"

export const DevHeader = ({ agendaRef, speakersRef, transparent = false, partnersRef }) => {
  const scrollTo = ref => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="white-shadow"
      bg={transparent ? "transparent" : "primary"}
    >
      <Navbar.Brand href="#home" className="d-lg-none">
        {/* <Logo/> */}
        <Link to="/">
          <StaticImage src="../images/logo-m.png" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-around align-items-center"
      >
        <Nav className="align-items-center">
          <Nav.Link
            className="text-white f-18 text-bold"
            onClick={() => scrollTo(agendaRef)}
          >
            <SecondaryButton>AGENDA</SecondaryButton>
          </Nav.Link>
          <Nav.Link
            className="text-white f-18 text-bold"
            onClick={() => scrollTo(speakersRef)}
          >
            <SecondaryButton>SPEAKERS</SecondaryButton>
          </Nav.Link>
          <Nav.Link
            className="text-white f-18 text-bold"
            onClick={() => scrollTo(partnersRef)}
          >
            <SecondaryButton>PARTNERS</SecondaryButton>
          </Nav.Link>
        </Nav>
        <Navbar.Brand className="d-lg-block d-none py-3">
          <Link to="/">
            <StaticImage src="../images/logo.png" />
          </Link>
        </Navbar.Brand>
        <Nav className="align-items-center">
        <Nav.Link  className="text-white f-18 text-bold" >
            <SecondaryButton onClick={() => navigate('/devsummit-2019')}> DevSummit 2019</SecondaryButton>
          </Nav.Link>
          <Nav.Link  className="text-white f-18 text-bold">
            <SecondaryButton>Contact Us</SecondaryButton>
          </Nav.Link>
          <Nav.Link>
            <PrimaryButton>Buy Ticket</PrimaryButton>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
